import { describe, expect, it } from 'vitest'
import {
  detectPlatform,
  getPreferredStoreUrl,
  STORE_URLS,
  APP_NAME,
  SITE_URL,
  CREDITS_URL,
  CREDITS_NAME,
} from '../config'

describe('config', () => {
  it('has the correct app store and play store links', () => {
    expect(STORE_URLS.android).toBe(
      'https://play.google.com/store/apps/details?id=com.drodriguez.imposter',
    )
    expect(STORE_URLS.ios).toBe(
      'https://apps.apple.com/us/app/the-impostor-spy-party-game/id6763661603',
    )
  })

  it('has the app name and site url', () => {
    expect(APP_NAME).toBe('The Impostor')
    expect(SITE_URL).toBe('https://theimpostor.eu')
  })

  it('has the Axis Labs credits url and name', () => {
    expect(CREDITS_URL).toBe('https://axislabs.eu/')
    expect(CREDITS_NAME).toBe('Axis Labs')
  })

  it('detects iOS from the user agent', () => {
    expect(
      detectPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'),
    ).toBe('ios')
    expect(detectPlatform('Mozilla/5.0 (iPad; CPU OS 17_0) AppleWebKit/605.1.15')).toBe('ios')
    expect(
      getPreferredStoreUrl(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
      ),
    ).toBe(STORE_URLS.ios)
  })

  it('detects Android from the user agent', () => {
    expect(detectPlatform('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36')).toBe(
      'android',
    )
    expect(
      getPreferredStoreUrl('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36'),
    ).toBe(STORE_URLS.android)
  })

  it('defaults to desktop for other user agents', () => {
    expect(detectPlatform('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')).toBe('desktop')
  })
})
