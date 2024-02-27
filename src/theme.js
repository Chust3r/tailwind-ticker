export default {
	animation: {
		'ticker-bottom': 'ticker-bottom 10s linear infinite',
		'ticker-top': 'ticker-top 10s linear infinite',
		'ticker-left': 'ticker-left 10s linear infinite',
		'ticker-right': 'ticker-right 10s linear infinite',
	},
	keyframes: {
		'ticker-bottom': {
			'0%': {
				transform: 'translateY(-100%)',
			},
			'100%': {
				transform: 'translateY(0%)',
			},
		},
		'ticker-top': {
			'0%': {
				transform: 'translateY(0%)',
			},
			'100%': {
				transform: 'translateY(-100%)',
			},
		},
		'ticker-left': {
			'0%': {
				transform: 'translateX(0%)',
			},
			'100%': {
				transform: 'translateX(-100%)',
			},
		},
		'ticker-right': {
			'0%': {
				transform: 'translateX(-100%)',
			},
			'100%': {
				transform: 'translateX(0%)',
			},
		},
	},
	tickerBase: {
		'.ticker': {
			overflow: 'hidden',
			display: 'flex',
		},
		'.ticker-y': {
			overflow: 'hidden',
			display: 'flex',
			'flex-direction': 'column',
			'align-items': 'center',
		},
		'.ticker-wrapper': {
			width: 'max-content',
			display: 'flex',
		},
		'.ticker-wrapper-y': {
			'flex-direction': 'column',
		},
		'.ticker-mask-x': {
			'mask-image':
				'linear-gradient(to left, transparent, black ,black, transparent)',
		},
		'.ticker-mask-y': {
			'mask-image':
				'linear-gradient(to top, transparent, black ,black, transparent)',
		},
		'.animate-pause': {
			'animation-play-state': 'paused',
		},
	},
}
