type ArrowDirection = 'up-right' | 'down-right' | 'up' | 'down'

const rotations: Record<ArrowDirection, number> = {
	'up-right': 0,
	'down-right': 90,
	up: -45,
	down: 135
}

export function Arrow({ direction = 'up-right' }: { direction?: ArrowDirection }) {
	return (
		<span className='arrow-icon' aria-hidden='true'>
			<svg
				viewBox='0 0 16 16'
				width='1em'
				height='1em'
				fill='none'
				focusable='false'
				style={{ transform: `rotate(${rotations[direction]}deg)` }}
			>
				<path
					d='M4.75 11.25 11.25 4.75M5.25 4.75h6v6'
					stroke='currentColor'
					strokeWidth='1.25'
					strokeLinecap='square'
					strokeLinejoin='miter'
				/>
			</svg>
		</span>
	)
}
