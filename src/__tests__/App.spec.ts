import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '../App.vue'
import router from '../router'

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
    expect(links).toEqual(['/how-to-play', '/game-modes', '/word-packs', '/download'])
  })

  it('footer links include legal pages and store links', async () => {
    const wrapper = await mountAt('/')
    const footerLinks = wrapper.findAll('.site-footer a').map((a) => a.attributes('href'))
    expect(footerLinks).toContain('/how-to-play')
    expect(footerLinks).toContain('/game-modes')
    expect(footerLinks).toContain('/word-packs')
    expect(footerLinks).toContain('/download')
    expect(footerLinks).toContain('/privacy')
    expect(footerLinks).toContain('/terms')
  })

  it('footer links to Axis Labs for credits', async () => {
    const wrapper = await mountAt('/')
    const axisLink = wrapper.find('a[href="https://axislabs.eu/"]')
    expect(axisLink.exists()).toBe(true)
    expect(wrapper.find('footer.site-footer').text()).toContain('Axis Labs')
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

  it('navigates to download page', async () => {
    const wrapper = await mountAt('/download')
    expect(wrapper.text()).toContain('Download The Impostor')
    expect(wrapper.text()).toContain('Apple Devices')
    expect(wrapper.text()).toContain('Google Play')
  })

  it('navigates to privacy page', async () => {
    const wrapper = await mountAt('/privacy')
    expect(wrapper.text()).toContain('Privacy Policy')
    expect(wrapper.text()).toContain('Offline Play Data')
  })

  it('navigates to terms page', async () => {
    const wrapper = await mountAt('/terms')
    expect(wrapper.text()).toContain('Terms of Service')
    expect(wrapper.text()).toContain('Acceptance of Terms')
  })
})
