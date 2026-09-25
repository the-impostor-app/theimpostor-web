import { describe, it, expect, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '../App.vue'
import router from '../router'
import { useI18n } from '../composables/useI18n'

beforeEach(() => {
  const { setLocale } = useI18n()
  setLocale('en')
})

async function mountAt(path: string) {
  await router.push(path)
  await router.isReady()
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })
  await flushPromises()
  return wrapper
}

describe('App shell', () => {
  it('renders header, main, and footer', async () => {
    const wrapper = await mountAt('/')
    expect(wrapper.find('header.site-header').exists()).toBe(true)
    expect(wrapper.find('main.app-main').exists()).toBe(true)
    expect(wrapper.find('footer.site-footer').exists()).toBe(true)
    expect(wrapper.text()).toContain('The Impostor')
  })

  it('header links point to separate SEO pages', async () => {
    const wrapper = await mountAt('/')
    const links = wrapper.findAll('.site-header__link').map((a) => a.attributes('href'))
    expect(links).toEqual(['/how-to-play', '/game-modes', '/word-packs', '/blog', '/download'])
  })

  it('footer links include legal pages and store links', async () => {
    const wrapper = await mountAt('/')
    const footerLinks = wrapper.findAll('.site-footer a').map((a) => a.attributes('href'))
    expect(footerLinks).toContain('/how-to-play')
    expect(footerLinks).toContain('/game-modes')
    expect(footerLinks).toContain('/word-packs')
    expect(footerLinks).toContain('/blog')
    expect(footerLinks).toContain('/download')
    expect(footerLinks).toContain('/privacy')
    expect(footerLinks).toContain('/terms')
    expect(footerLinks).toContain('https://axislabs.eu/the-impostor/policy')
    expect(footerLinks).toContain('https://axislabs.eu/the-impostor/terms-and-conditions')
  })

  it('footer links to Axis Labs for credits', async () => {
    const wrapper = await mountAt('/')
    const axisLink = wrapper.find('a[href="https://axislabs.eu/"]')
    expect(axisLink.exists()).toBe(true)
    expect(wrapper.find('footer.site-footer').text()).toContain('Axis Labs')
  })

  it('language switch toggles language', async () => {
    const wrapper = await mountAt('/')
    const buttons = wrapper.findAll('.language-switch__btn')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
    const esButton = buttons[1]!
    await esButton.trigger('click')
    await flushPromises()
    expect(wrapper.text()).toContain('El Impostor')
  })
})

describe('pages routing', () => {
  it('home page displays headline and features', async () => {
    const wrapper = await mountAt('/')
    expect(wrapper.text()).toContain('Spot the Impostor. Survive the Accusation.')
    expect(wrapper.text()).toContain('How It Works in 3 Steps')
    expect(wrapper.text()).toContain('Pass & Play')
  })

  it('navigates to how-to-play page', async () => {
    const wrapper = await mountAt('/how-to-play')
    expect(wrapper.text()).toContain('How to Play The Impostor')
    expect(wrapper.text()).toContain('The Clue Round')
    expect(wrapper.text()).toContain('Setup & Secret Word Distribution')
  })

  it('navigates to game-modes page', async () => {
    const wrapper = await mountAt('/game-modes')
    expect(wrapper.text()).toContain('Game Modes for Any Gathering')
    expect(wrapper.text()).toContain('Pass & Play (Single Device)')
    expect(wrapper.text()).toContain('Online Rooms (Multiplayer)')
  })

  it('navigates to word-packs page', async () => {
    const wrapper = await mountAt('/word-packs')
    expect(wrapper.text()).toContain('Word Packs & Categories')
    expect(wrapper.text()).toContain('Available in 6 Languages')
  })

  it('navigates to blog page and displays articles', async () => {
    const wrapper = await mountAt('/blog')
    expect(wrapper.text()).toContain('Blog & Guides')
    expect(wrapper.text()).toContain('What Is a Social Deduction Game?')
  })

  it('navigates to individual blog article page', async () => {
    const wrapper = await mountAt('/blog/what-is-social-deduction-game')
    expect(wrapper.text()).toContain('What Is a Social Deduction Game? The Complete 2026 Guide')
    expect(wrapper.text()).toContain('The Rise of Social Deduction Games')
    expect(wrapper.text()).toContain('Back to Blog')
  })

  it('navigates to download page', async () => {
    const wrapper = await mountAt('/download')
    expect(wrapper.text()).toContain('Download The Impostor')
    expect(wrapper.text()).toContain('iOS & iPadOS')
    expect(wrapper.text()).toContain('Google Play')
  })

  it('navigates to privacy page and policy alias', async () => {
    const wrapper = await mountAt('/privacy')
    expect(wrapper.text()).toContain('Privacy Policy')
    expect(wrapper.text()).toContain('Offline Play Data')

    const wrapperAlias = await mountAt('/the-impostor/policy')
    expect(wrapperAlias.text()).toContain('Privacy Policy')
  })

  it('navigates to terms page and terms alias', async () => {
    const wrapper = await mountAt('/terms')
    expect(wrapper.text()).toContain('Terms of Service')
    expect(wrapper.text()).toContain('Acceptance of Terms')

    const wrapperAlias = await mountAt('/the-impostor/terms-and-conditions')
    expect(wrapperAlias.text()).toContain('Terms of Service')
  })
})
