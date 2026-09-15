import { site } from '@data/site'
import { ScrollToTop } from './ScrollToTop'

export function Footer() {
	return (
		<footer className='footer'>
			<p>
				© {new Date().getFullYear()} {site.name}
			</p>
			<p className='status'>
				<span aria-hidden='true' />
				{site.availability}
			</p>
			<ScrollToTop className='footer-top' label='Back to top' suffix='↑' />
		</footer>
	)
}
