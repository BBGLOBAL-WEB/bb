'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    intercomSettings?: Record<string, unknown>
  }
}

export default function Chatbot() {
  useEffect(() => {
    // Intercom Script
    window.intercomSettings = {
      api_base: 'https://api-iam.intercom.io',
      app_id: 'YOUR_INTERCOM_APP_ID', // Replace with your Intercom App ID
      name: 'BB Global',
      email: 'support@bbglobal.com',
      created_at: Math.floor(Date.now() / 1000),
      custom_launcher_selector: '.intercom-launcher',
    }

    // Load Intercom script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://widget.intercom.io/widget/YOUR_INTERCOM_APP_ID' // Replace with your Intercom App ID
    document.head.appendChild(script)

    return () => {
      // Cleanup if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null
}
