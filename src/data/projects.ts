import type { StaticImageData } from 'next/image'
import gradientaCover from '../../public/projects/gradienta-cover.svg'
import gradientaImage from '../../public/projects/gradienta.png'
import toTheMoonCover from '../../public/projects/tothemoon-cover.svg'
import toTheMoonImage from '../../public/projects/tothemoon.png'
import traxtioCover from '../../public/projects/traxtio-cover.svg'
import traxtioImage from '../../public/projects/traxtio.png'

export type Project = {
	id: string
	title: string
	description: string
	year: string
	category: string
	stack: string[]
	image: StaticImageData
	imageAlt: string
	coverImage: StaticImageData
	url?: string
	github?: string
}

export const projects: Project[] = [
	{
		id: '01',
		title: 'Traxtio',
		description:
			'A custom CRM for lead management, developed on my own from scratch to production across both frontend and backend, with Trello API integration at the core of the workflow.',
		year: '2025-2026',
		category: 'CRM · Frontend · Backend',
		stack: ['Next.js', 'Nest.js', 'TypeScript', 'Trello API'],
		image: traxtioImage,
		imageAlt: 'Traxtio CRM project preview',
		coverImage: traxtioCover
	},
	{
		id: '02',
		title: 'To The Moon',
		description:
			'A full freelance marketplace platform connecting clients and freelancers through project discovery, task management, communication, billing, and workflow management. I worked across the product experience, building responsive interfaces and interactive flows for project browsing, task execution, profiles, finances, notifications, and proof-of-work submission.',
		year: '2025',
		category: 'Marketplace · Frontend',
		stack: ['JS', 'Tailwind', 'SCSS'],
		image: toTheMoonImage,
		imageAlt: 'To The Moon freelance marketplace interface',
		coverImage: toTheMoonCover,
		url: 'https://to-the-moon-dusky.vercel.app/'
	},
	{
		id: '03',
		title: 'Gradienta',
		description:
			'A bold digital agency website built from the ground up to bring a highly visual design system to life across responsive layouts, interactive sections, motion, and portfolio-driven content. I focused on translating the design into a performant, maintainable frontend while preserving the visual character and smooth user experience across devices.',
		year: '2025',
		category: 'Agency · Frontend',
		stack: ['Next.js', 'TypeScript', 'SCSS', 'GSAP'],
		image: gradientaImage,
		imageAlt: 'Gradienta digital agency website preview',
		coverImage: gradientaCover,
		url: 'https://gradienta.agency/'
	}
]
