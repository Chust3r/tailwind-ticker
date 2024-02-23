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
	animationDuration: {
		none: 0,
		'5s': '5s',
		'10s': '10s',
		'15s': '15s',
		'20s': '20s',
		'25s': '25s',
		'30s': '30s',
		'35s': '35s',
		'40s': '40s',
	},
	animationDelay: {
		none: 0,
		'1s': '5s',
		'2s': '10s',
		'3s': '15s',
		'4s': '20s',
		'5s': '25s',
		'10s': '30s',
	},
	tickerBase: {
		'.tickerX': {
			overflow: 'hidden',
			display: 'flex',
		},
		'.tickerY': {
			overflow: 'hidden',
			display: 'flex',
			'flex-direction': 'column',
			'align-items': 'center',
		},
		'.tickerX-wrapper': {
			width: 'max-content',
			display: 'flex',
		},
		'.tickerY-wrapper': {
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
