import { createRouter, createWebHistory } from 'vue-router'
import { APP_NAME, APP_DESCRIPTION, SITE_URL } from '../config'

import HomePage from '../pages/HomePage.vue'
import HowToPlayPage from '../pages/HowToPlayPage.vue'
import GameModesPage from '../pages/GameModesPage.vue'
import WordPacksPage from '../pages/WordPacksPage.vue'
import DownloadPage from '../pages/DownloadPage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import TermsPage from '../pages/TermsPage.vue'

export const base =
  typeof window !== 'undefined' && window.location.pathname.startsWith('/theimpostor-web')
    ? '/theimpostor-web/'
    : '/'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: `${APP_NAME} — The Ultimate Spy Party Game`,
      description: APP_DESCRIPTION,
    },
  },
  {
    path: '/how-to-play/',
    alias: ['/how-to-play', '/rules', '/rules/'],
    name: 'how-to-play',
    component: HowToPlayPage,
    meta: {
      title: `How to Play The Impostor — Party Game Rules & Strategy`,
      description:
        'Official rules, clue tips, and bluffing strategies for The Impostor social deduction game. Learn how detectives find spies and how impostors bluff their way to victory.',
    },
  },
  {
    path: '/game-modes/',
    alias: ['/game-modes', '/modes', '/modes/'],
    name: 'game-modes',
    component: GameModesPage,
    meta: {
      title: `Game Modes — Pass & Play Local & Online Multiplayer`,
      description:
        'Play on 1 phone with 3 to 20 friends in offline Pass & Play mode, or connect remotely in online multiplayer rooms with live synchronized voting.',
    },
  },
  {
    path: '/word-packs/',
    alias: ['/word-packs', '/categories', '/categories/'],
    name: 'word-packs',
    component: WordPacksPage,
    meta: {
      title: `Word Packs & Categories — ${APP_NAME}`,
      description:
        'Explore 1,000+ curated secret words across Food, Travel, Pop Culture, Everyday Objects, and Animals. Available in 6 languages with custom word pack creation.',
    },
  },
  {
    path: '/download/',
    alias: ['/download'],
    name: 'download',
    component: DownloadPage,
    meta: {
      title: `Download ${APP_NAME} — Free on iOS & Android`,
      description:
        'Download The Impostor spy party game free on Apple App Store and Google Play. Instant setup, 100% offline capable for local game nights.',
    },
  },
  {
    path: '/privacy/',
    alias: ['/privacy', '/privacy-policy'],
    name: 'privacy',
    component: PrivacyPage,
    meta: {
      title: `Privacy Policy — ${APP_NAME}`,
      description:
        'Privacy policy for The Impostor mobile app and website. Learn about our local device data handling and secure multiplayer sessions.',
    },
  },
  {
    path: '/terms/',
    alias: ['/terms', '/terms-of-service'],
    name: 'terms',
    component: TermsPage,
    meta: {
      title: `Terms of Service — ${APP_NAME}`,
      description:
        'Terms of service and license conditions for using The Impostor party game application and website.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(base),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  if (typeof document === 'undefined') return
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attrName, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonicalTag(url: string) {
  if (typeof document === 'undefined') return
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', url)
}

router.afterEach((to) => {
  if (typeof document === 'undefined') return
  const title = (to.meta.title as string | undefined) ?? APP_NAME
  const description = (to.meta.description as string | undefined) ?? APP_DESCRIPTION

  document.title = title

  setMetaTag('meta[name="description"]', 'name', 'description', description)
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)

  const normalizedPath = to.path.startsWith('/') ? to.path.slice(1) : to.path
  const fullUrl = `${SITE_URL}/${normalizedPath}`
  setCanonicalTag(fullUrl)
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl)
})

export default router
