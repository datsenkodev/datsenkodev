'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@data/site'
import { FlipText } from './FlipText'
import { ScrollToTop } from './ScrollToTop'

export function Header() {
	const [hidden, setHidden] = useState(false)
	const [dark, setDark] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const lastScrollY = useRef(0)
	const menuButtonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const darkSections = document.querySelectorAll<HTMLElement>(
			"[data-header-theme='dark']"
		)

		const onScroll = () => {
			const currentScrollY = window.scrollY
			const scrollingDown = currentScrollY > lastScrollY.current
			const headerProbe = 32

			setHidden(currentScrollY > 180 && scrollingDown)
			setDark(
				Array.from(darkSections).some(section => {
					const bounds = section.getBoundingClientRect()
					return bounds.top <= headerProbe && bounds.bottom > headerProbe
				})
			)
			lastScrollY.current = currentScrollY
		}

		lastScrollY.current = window.scrollY
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		if (!menuOpen) return

		const previousOverflow = document.body.style.overflow
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setMenuOpen(false)
				window.requestAnimationFrame(() => menuButtonRef.current?.focus())
			}
		}
		const closeOnDesktop = () => {
			if (window.innerWidth > 680) setMenuOpen(false)
		}

		document.body.style.overflow = 'hidden'
		window.addEventListener('keydown', closeOnEscape)
		window.addEventListener('resize', closeOnDesktop)

		return () => {
			document.body.style.overflow = previousOverflow
			window.removeEventListener('keydown', closeOnEscape)
			window.removeEventListener('resize', closeOnDesktop)
		}
	}, [menuOpen])

	const toggleMenu = () => {
		setHidden(false)
		setMenuOpen(open => !open)
	}

	const closeMenu = () => setMenuOpen(false)

	return (
		<header
			className={`site-header${hidden && !menuOpen ? ' site-header--hidden' : ''}${dark || menuOpen ? ' site-header--dark' : ''}${menuOpen ? ' site-header--menu-open' : ''}`}
		>
			<ScrollToTop
				className='monogram'
				label={site.shortName}
				suffix='.'
				ariaLabel={`${site.name}, back to top`}
			/>
			<nav className='desktop-nav' aria-label='Primary navigation'>
				{site.nav.map(item => (
					<a key={item.href} href={item.href}>
						<FlipText>{item.label}</FlipText>
					</a>
				))}
			</nav>
			<a className='header-contact' href={`mailto:${site.email}`}>
				<FlipText>Let&apos;s talk</FlipText> <span aria-hidden='true'>↗</span>
			</a>
			<button
				ref={menuButtonRef}
				className='mobile-menu-toggle'
				type='button'
				aria-expanded={menuOpen}
				aria-controls='mobile-menu'
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				onClick={toggleMenu}
			>
				<span className='mobile-menu-toggle-copy' aria-hidden='true'>
					<span>Menu</span>
					<span>Close</span>
				</span>
				<span className='mobile-menu-toggle-icon' aria-hidden='true'>
					<span />
					<span />
				</span>
			</button>
			<div className='mobile-menu' id='mobile-menu' aria-hidden={!menuOpen}>
				<p className='mobile-menu-kicker'>Explore / Portfolio</p>
				<nav className='mobile-menu-links' aria-label='Mobile navigation'>
					{site.nav.map((item, index) => (
						<a key={item.href} href={item.href} onClick={closeMenu}>
							<span>0{index + 1}</span>
							<FlipText>{item.label}</FlipText>
							<span aria-hidden='true'>↘</span>
						</a>
					))}
				</nav>
				<div className='mobile-menu-footer'>
					<p>{site.availability}</p>
					<a href={`mailto:${site.email}`} onClick={closeMenu}>
						<FlipText>{site.email}</FlipText> <span aria-hidden='true'>↗</span>
					</a>
				</div>
			</div>
		</header>
	)
}
