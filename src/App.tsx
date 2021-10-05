import { useState } from 'react'
import cn from 'classnames'
import s from './App.module.css'
import Wall from '@components/Wall'
import { ComingSoonText } from '@components/svg'
import XboxController from '@components/XboxController'
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsAppLink } from '@utils/whatsappLink'
// assets
import logo from '@images/logo-face.png'

function App() {
	return (
		<main className={s.main}>
			<Wall />
			<div className={s.content}>
				<div className={s.hero}>
					<div className={s.logoContainer}>
						<img className={s.logo} src={logo} alt="logo game-over shop" />
					</div>
					<div className={s.comingSoonWrapper}>
						<ComingSoonText />
					</div>
					<ul className={s.social}>
						<li className={s.socialItem}>
							<a
								className={cn(s.socialButton, s.fb)}
								target="_blank"
								href="https://www.facebook.com/GameOverShop11/">
								<FaFacebookF />
							</a>
						</li>
						<li className={s.socialItem}>
							<a
								className={cn(s.socialButton, s.wapp)}
								target="_blank"
								href={whatsAppLink()}>
								<FaWhatsapp />
							</a>
						</li>
					</ul>
					<XboxController />
				</div>
			</div>
		</main>
	)
}

export default App
