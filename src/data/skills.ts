export const skillGroups = [
	{
		index: '01',
		title: 'Frontend',
		items: [
			'React',
			'Next.js',
			'TypeScript',
			'JavaScript',
			'HTML',
			'CSS / SCSS',
			'Tailwind'
		]
	},
	{ index: '02', title: 'Backend', items: ['Nest.js', 'Prisma'] },
	{
		index: '03',
		title: 'State / Data',
		items: ['Redux', 'TanStack Query', 'REST API']
	},
	{
		index: '04',
		title: 'Motion / UI',
		items: ['Motion', 'GSAP', 'Framer Motion', 'Gulp']
	},
	{ index: '05', title: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] }
] as const
