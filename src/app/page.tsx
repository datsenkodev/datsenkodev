import { Arrow } from '@components/Arrow'
import { Footer } from '@components/Footer'
import { FlipText } from '@components/FlipText'
import { Header } from '@components/Header'
import { ProjectItem } from '@components/ProjectItem'
import { SectionLabel } from '@components/SectionLabel'
import { projects } from '@data/projects'
import { site } from '@data/site'
import { skillGroups } from '@data/skills'

const principles = [
	[
		'Performance',
		'Speed is part of the product, considered in every architectural and interface decision.'
	],
	[
		'Clarity',
		'Simple paths, direct language, and systems that make complex products feel intuitive.'
	],
	[
		'Communication',
		'Clear, proactive communication is one of my strongest qualities. I keep people informed, explain decisions simply, and make collaboration feel easy.'
	],
	[
		'Longevity',
		'Maintainable foundations that let teams move quickly long after launch.'
	]
]

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section className='hero' aria-labelledby='hero-title'>
					<div className='hero-eyebrow reveal'>
						<span>{site.role}</span>
						<span>{site.location}</span>
					</div>
					<h1 id='hero-title' className='reveal reveal--delay'>
						I build digital products that feel clear, fast, and <em>human</em>.
					</h1>
					<div className='hero-bottom reveal reveal--late'>
						<p>{site.description}</p>
						<a className='text-link' href='#work'>
							<FlipText>Selected work</FlipText>{' '}
							<Arrow direction='down' />
						</a>
						<p className='hero-index'>Portfolio / {new Date().getFullYear()}</p>
					</div>
				</section>

				<section
					className='about section'
					id='about'
					aria-labelledby='about-title'
				>
					<SectionLabel index='01'>About</SectionLabel>
					<div className='about-grid'>
						<h2 id='about-title'>
							Engineering with a<br />
							product point of view.
						</h2>
						<div className='about-copy'>
							<p>{site.about}</p>
							<p>
								I care about writing clean, maintainable code, building solid
								component systems, and making every interaction feel deliberate
								- without sacrificing performance or simplicity.
							</p>
						</div>
						<dl>
							<div>
								<dt>Focus</dt>
								<dd>Frontend, UX &amp; product</dd>
							</div>
							<div>
								<dt>Based</dt>
								<dd>Ukraine / Remote</dd>
							</div>
							<div>
								<dt>Experience</dt>
								<dd>2022 - Present</dd>
							</div>
						</dl>
					</div>
				</section>

				<section
					className='stack section'
					id='stack'
					aria-labelledby='stack-title'
					data-header-theme='dark'
				>
					<SectionLabel index='02'>Stack</SectionLabel>
					<h2 id='stack-title'>
						Tools are temporary.
						<br />
						<em>Good decisions last.</em>
					</h2>
					<div className='skills-list'>
						{skillGroups.map(group => (
							<div className='skill-row' key={group.title}>
								<span>{group.index}</span>
								<h3>{group.title}</h3>
								<ul>
									{group.items.map(skill => (
										<li key={skill}>{skill}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section
					className='work section'
					id='work'
					aria-labelledby='work-title'
				>
					<SectionLabel index='03'>Selected work</SectionLabel>
					<div className='work-heading'>
						<h2 id='work-title'>
							A selection of recent
							<br />
							product work.
						</h2>
						<p>
							Built with care for the interface,
							<br />
							the system behind it, and the people using it.
						</p>
					</div>
					<div className='projects'>
						{projects.map((project, index) => (
							<ProjectItem
								key={project.id}
								project={project}
								position={index}
							/>
						))}
					</div>
				</section>

				<section
					className='principles section'
					aria-labelledby='principles-title'
				>
					<SectionLabel index='04'>How I work</SectionLabel>
					<div className='principles-grid'>
						<h2 id='principles-title'>
							Quietly rigorous.
							<br />
							Always intentional.
						</h2>
						<div>
							{principles.map(([title, text], index) => (
								<article key={title}>
									<span>0{index + 1}</span>
									<h3>{title}</h3>
									<p>{text}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section
					className='contact section'
					id='contact'
					aria-labelledby='contact-title'
				>
					<SectionLabel index='05'>Contact</SectionLabel>
					<p>Have a project in mind?</p>
					<h2 id='contact-title'>
						Let&apos;s build something <em>useful.</em>
					</h2>
					<a className='email' href={`mailto:${site.email}`}>
						<FlipText>{site.email}</FlipText> <Arrow />
					</a>
					<div className='socials'>
						{site.socials.map(social => (
							<a
								key={social.label}
								href={social.href}
								target='_blank'
								rel='noreferrer'
							>
								<FlipText>{social.label}</FlipText> <Arrow />
							</a>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
