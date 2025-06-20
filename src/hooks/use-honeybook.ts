'use client';

import { useEffect } from 'react'

declare global {
  interface Window {
    _HB_?: {
      pid?: string
    }
  }
}

const SCRIPT_SELECTOR = 'script[data-honeybook-script="true"]'
const SCRIPT_SRC = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

export function useHoneyBook(pid: string = '61a840e6341fbd00074ed82a') {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const existing = document.querySelector<HTMLScriptElement>(SCRIPT_SELECTOR)
    const w = window as Window & { _HB_?: { pid?: string } }
    if (existing) {
      // ensure pid is set
      w._HB_ = w._HB_ || {}
      w._HB_.pid = pid
      return
    }

    w._HB_ = w._HB_ || {}
    w._HB_.pid = pid

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = SCRIPT_SRC
    script.setAttribute('data-honeybook-script', 'true')
    document.body.appendChild(script)

    return () => {
      const el = document.querySelector<HTMLScriptElement>(SCRIPT_SELECTOR)
      if (el && el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  }, [pid])
}
