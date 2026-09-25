import { ref, inject, hasInjectionContext, type InjectionKey, type Ref, type App } from 'vue'
import { translations, type Locale, type TranslationKey } from '../i18n'

export interface I18nContext {
  locale: Ref<Locale>
  setLocale: (l: Locale) => void
  t: (key: TranslationKey) => string
}

const I18N_KEY = Symbol('i18n') as InjectionKey<I18nContext>

const safeGetItem = (key: string): string | null => {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      return window.localStorage.getItem(key)
    }
  } catch {
    // Ignore storage errors in restricted/test environments
  }
  return null
}

const safeSetItem = (key: string, value: string): void => {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      window.localStorage.setItem(key, value)
    }
  } catch {
    // Ignore storage errors in restricted/test environments
  }
}

export function createI18n() {
  const getInitialLocale = (): Locale => {
    if (typeof window === 'undefined') return 'en'
    const saved = safeGetItem('impostor-locale')
    if (saved === 'en' || saved === 'es') return saved
    const nav = typeof navigator !== 'undefined' ? navigator.language || '' : ''
    if (nav.toLowerCase().startsWith('es')) return 'es'
    return 'en'
  }

  const locale = ref<Locale>(getInitialLocale())

  const setLocale = (l: Locale) => {
    locale.value = l
    safeSetItem('impostor-locale', l)
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = l
    }
  }

  const t = (key: TranslationKey): string => {
    const translation = translations[locale.value] || translations['en']
    return translation[key] || translations['en'][key] || key
  }

  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = locale.value
  }

  const context: I18nContext = {
    locale,
    setLocale,
    t,
  }

  return {
    install(app: App) {
      app.provide(I18N_KEY, context)
    },
    ...context,
  }
}

const defaultContext: I18nContext = (() => {
  const getInitialLocale = (): Locale => {
    if (typeof window === 'undefined') return 'en'
    const saved = safeGetItem('impostor-locale')
    if (saved === 'en' || saved === 'es') return saved
    const nav = typeof navigator !== 'undefined' ? navigator.language || '' : ''
    if (nav.toLowerCase().startsWith('es')) return 'es'
    return 'en'
  }

  const locale = ref<Locale>(getInitialLocale())

  const setLocale = (l: Locale) => {
    locale.value = l
    safeSetItem('impostor-locale', l)
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = l
    }
  }

  const t = (key: TranslationKey): string => {
    const translation = translations[locale.value] || translations['en']
    return translation[key] || translations['en'][key] || key
  }

  return {
    locale,
    setLocale,
    t,
  }
})()

export function useI18n() {
  if (!hasInjectionContext()) {
    return defaultContext
  }
  const context = inject(I18N_KEY, null)
  if (!context) {
    return defaultContext
  }
  return context
}
