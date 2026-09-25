export interface BlogArticle {
  slug: string
  title: string
  description: string
  date: string // ISO date
  author: string
  locale: 'en' | 'es'
  tags: string[]
  readingTime: number // minutes
  content: string // HTML content
}
