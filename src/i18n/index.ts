import { en, type TranslationKey } from './en'
import { es } from './es'

export const translations = {
  en,
  es,
}

export type Locale = keyof typeof translations
export type { TranslationKey }
