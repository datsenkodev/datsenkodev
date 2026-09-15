import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { Project } from '@data/projects'
import { Arrow } from './Arrow'
import { FlipText } from './FlipText'

export function ProjectItem({
	project,
	position
}: {
	project: Project
	position: number
}) {
	const projectRatio = project.image.width / project.image.height
	const visualStyle = {
		'--project-ratio': projectRatio,
		'--project-max-width': `${projectRatio * 90}vh`
	} as CSSProperties

	return (
		<article className={`project${position % 2 ? ' project--reverse' : ''}`}>
			<a
				className='project-visual'
				style={visualStyle}
				href={project.url ?? project.github}
				target='_blank'
				rel='noreferrer'
				aria-label={`View ${project.title}`}
			>
				<Image
					src={project.image}
					alt={project.imageAlt}
					sizes='(max-width: 767px) 100vw, 65vw'
				/>
				<span className='project-cover' aria-hidden='true'>
					<Image
						className='project-cover-image'
						src={project.coverImage}
						alt=''
						fill
						sizes='(max-width: 767px) 0px, 65vw'
					/>
					<span className='project-cover-hint'>Hover to reveal</span>
				</span>
			</a>
			<div className='project-copy'>
				<div className='project-meta'>
					<span>{project.id}</span>
					<span>{project.category}</span>
					<span>{project.year}</span>
				</div>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<ul aria-label='Technology stack'>
					{project.stack.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<div className='project-links'>
					{project.url && (
						<a href={project.url} target='_blank' rel='noreferrer'>
							<FlipText>View project</FlipText> <Arrow />
						</a>
					)}
					{project.github && (
						<a href={project.github} target='_blank' rel='noreferrer'>
							<FlipText>Source</FlipText> <Arrow />
						</a>
					)}
				</div>
			</div>
		</article>
	)
}
