import { site } from '@data/site'
import { Arrow } from './Arrow'
import { ScrollToTop } from './ScrollToTop'

export function Footer() {
	return (
		<footer className='footer'>
			<p>
				© {new Date().getFullYear()} {site.name}
			</p>
			<p className='status'>
				<span aria-hidden='true' />
				<strong>{site.availability}</strong>
			</p>
			<ScrollToTop className='footer-top' label='Back to top' suffix={<Arrow direction='up' />} />
		</footer>
	)
}
