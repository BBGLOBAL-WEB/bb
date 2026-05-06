import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Validation function
function validateFormData(data: unknown): data is ContactFormData {
  if (typeof data !== 'object' || data === null) {
    return false
  }

  const form = data as Record<string, unknown>

  return (
    typeof form.name === 'string' &&
    form.name.trim().length > 0 &&
    typeof form.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    typeof form.subject === 'string' &&
    form.subject.trim().length > 0 &&
    typeof form.message === 'string' &&
    form.message.trim().length >= 10
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    if (!validateFormData(body)) {
      return NextResponse.json(
        { error: 'Geçersiz form verileri' },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = body

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'noreply@bbglobal.com',
      to: process.env.ADMIN_EMAIL || 'info@bbglobal.com',
      subject: `Yeni İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001a33;">Yeni İletişim Formu Mesajı</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
            <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
            <p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">
              ${escapeHtml(message)}
            </p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Bu mesaj BB Global web sitesinin iletişim formu aracılığıyla gönderilmiştir.
          </p>
        </div>
      `,
    })

    if (adminEmailResult.error) {
      console.error('Admin email error:', adminEmailResult.error)
      return NextResponse.json(
        { error: 'E-posta gönderilirken bir hata oluştu' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'noreply@bbglobal.com',
      to: email,
      subject: 'İletişim Formu Alındı - BB Global',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001a33;">Mesajınız Alındı</h2>
          <p>Merhaba ${escapeHtml(name)},</p>
          <p>İletişim formunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">
              ${escapeHtml(message)}
            </p>
          </div>
          <p>Teşekkür ederiz,<br />BB Global Ekibi</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            Bu otomatik bir e-postadır. Lütfen bu e-postaya cevap vermeyin.
          </p>
        </div>
      `,
    })

    if (userEmailResult.error) {
      console.error('User confirmation email error:', userEmailResult.error)
      // Don't fail the request if confirmation email fails
      // The main email was sent successfully
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
