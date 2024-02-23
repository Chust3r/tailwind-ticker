import tailwindcss from 'tailwindcss'
import minify from '@csstools/postcss-minify'
import postcss from 'postcss'

import tickerPugin from '../src/index.js'

const TAILWIND_BASE = '@tailwind utilities;'

export const generateCSS = (options = {}) => {
	const { inline = '', content = '' } = options

	return postcss([
		minify(),
		tailwindcss({
			plugins: [tickerPugin],
			content: [{ raw: content }],
		}),
	])
		.process(`${TAILWIND_BASE} ${inline}`, {
			from: undefined,
		})
		.then((result) => {
			console.log([result.css])
			return result.css
		})
}
