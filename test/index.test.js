import { generateCSS } from '../utils/index.js'

import { it, expect, describe } from 'vitest'

describe('test custom plugin @chust3r/tailwindcss-ticker', () => {
	it('generateCSS', async () => {
		const css = await generateCSS({
			content: `<div class="animate-ticker-bottom"></div>`,
		})
		expect(css).toMatch(
			'@keyframes ticker-bottom{0%{transform:translateY(-100%)}100%{transform:translateY(0%)}}.animate-ticker-bottom{animation:ticker-bottom 10s linear infinite}\n'
		)
	})
})

describe('test custom duration animation & predefined', () => {
	it('generateCSS', async () => {
		const css = await generateCSS({
			content: `<div class="animate-duration-10s"></div>`,
		})

		expect(css).toMatch('.animate-duration-10s{animation-duration:10s}')
	})
})

describe('test ticker utilities', () => {
	it('generateCSS', async () => {
		const css = await generateCSS({
			content: `<div class="ticker"></div>`,
		})

		console.warn([css])

		expect(css).toMatch(
			'.ticker{overflow:hidden;display:flex;mask-image:linear-gradient(to left, transparent, black ,black, transparent);-webkit-mask-image:linear-gradient(to left, transparent, black, black, transparent)}\n'
		)
	})
})

describe('add pause animation', () => {
	it('generateCSS', async () => {
		const css = await generateCSS({
			content: `<div class="animate-pause"></div>`,
		})

		expect(css).toMatch('animate-pause{animation-play-state:paused}')
	})
})
