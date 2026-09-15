'use client'

import { useEffect, useState } from 'react'

const HOLD_DURATION = 500
const EXIT_DURATION = 700

export function PageLoader() {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

		const removeLoader = window.setTimeout(
			() => {
				setVisible(false)
			},
			HOLD_DURATION + (reducedMotion ? 0 : EXIT_DURATION)
		)

		return () => {
			window.clearTimeout(removeLoader)
		}
	}, [])

	if (!visible) return null

	return (
		<div className='page-loader' role='status' aria-live='polite'>
			<p>There&apos;s nothing to load, just flexin&apos;</p>
		</div>
	)
}
