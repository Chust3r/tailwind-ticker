import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type   {import('tailwindcss/types/config').PluginCreator} */

const pluginCreator = (api) => {
	const { theme, matchUtilities, addUtilities } = api

	const dynamicUtilities = {
		'animate-duration': {
			css: 'animation-duration',
			values: theme('animationDuration'),
		},
		'animate-delay': {
			css: 'animation-delay',
			values: theme('animationDelay'),
		},
	}

	Object.entries(dynamicUtilities).forEach(([name, { css, values }]) => {
		matchUtilities(
			{
				[name]: (value) => {
					return {
						[css]: value,
					}
				},
			},
			{ values }
		)
	})

	addUtilities(theme('tickerBase'))
}

/** @type   {import('tailwindcss/types/config').Config} */

const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
