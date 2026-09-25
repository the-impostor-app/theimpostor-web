export const APP_NAME = 'The Impostor'
export const APP_TAGLINE = 'The Ultimate Spy Party Game'
export const APP_DESCRIPTION =
  'Unmask the impostor among your friends! Pass & play on 1 phone or play online multiplayer. Hundreds of secret words, custom categories, and endless bluffing fun.'

export const SITE_URL = 'https://theimpostor.eu'
export const CREDITS_URL = 'https://axislabs.eu/'
export const CREDITS_NAME = 'Axis Labs'

export const STORE_URLS = {
  android: 'https://play.google.com/store/apps/details?id=com.drodriguez.imposter',
  ios: 'https://apps.apple.com/us/app/the-impostor-spy-party-game/id6763661603',
} as const

export type Platform = 'ios' | 'android' | 'desktop'

export function detectPlatform(customUa?: string): Platform {
  const ua =
    customUa !== undefined
      ? customUa
      : typeof window !== 'undefined' && typeof navigator !== 'undefined'
        ? navigator.userAgent || ''
        : ''

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (typeof navigator !== 'undefined' &&
      navigator.platform === 'MacIntel' &&
      navigator.maxTouchPoints > 1)

  if (isIOS) return 'ios'
  if (/Android/.test(ua)) return 'android'
  return 'desktop'
}

export function getPreferredStoreUrl(customUa?: string): string {
  const platform = detectPlatform(customUa)
  if (platform === 'ios') return STORE_URLS.ios
  return STORE_URLS.android
}
