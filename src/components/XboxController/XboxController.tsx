import React from 'react'
import s from './XboxController.module.css'
import { SiXbox } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { BiEnvelope } from 'react-icons/bi'
import { whatsAppLink } from '@utils/whatsappLink'
import GOShopLogo from '@components/svg/GOShopLogo'

const XboxController = () => {
	return (
		<div className={s.root}>
			<div className={s.controllerContainer}>
				<div className={s.controller}>
					<div className={s.top_left}></div>
					<div className={s.top_right}></div>
					<div className={s.top_shape}></div>
					<div className={s.corners}>
						<div className={s.right}></div>
					</div>
					<div className={s.logo}>
						<SiXbox size={60} />
					</div>
					<div className={s.main_logo_cont}>
						<div className={s.middle}></div>
					</div>
					<div className={s.bumpers}></div>
					<div className={s.buttons_joysticks}>
						<div className={s.left}></div>
						<div className={s.right}></div>
					</div>
					<div className={s.button_dpad}>
						<div className={s.inner}>
							<div className={s.up_down}></div>
							<div className={s.left_right}></div>
						</div>
					</div>
					<div className={s.buttons_middle}>
						<div className={s.view}>
							<div className={s.rect}></div>
							<div className={s.rect}></div>
						</div>
						<div className={s.menu}></div>
					</div>
					<div className={s.buttons_letters}>
						<div className={s.btn_y}>
							<div className={s.shadow}></div>
							<a href="mailto:gustavoever11@gmail.com" className={s.y}>
								<BiEnvelope />
							</a>
						</div>
						<div className={s.btn_x}>
							<div className={s.shadow}></div>
							<a
								target="_blank"
								href="https://www.facebook.com/GameOverShop11/"
								className={s.x}>
								<FaFacebookF size={40} />
							</a>
						</div>
						<div className={s.btn_a}>
							<div className={s.shadow}></div>
							<a target="_blank" href={whatsAppLink()} className={s.a}>
								<FaWhatsapp size={55} />
							</a>
						</div>
						<div className={s.btn_b}>
							<div className={s.shadow}></div>
							<a
								target="_blank"
								href="https://www.youtube.com/channel/UCcU27T_dt7JWy-uB7BO_fLQ"
								className={s.b}>
								<FaYoutube />
							</a>
						</div>
					</div>
					<div className={s.over_bottom}></div>
					<div className={s.bottom}>
						<div className={s.shopLogo}>
							<GOShopLogo />
						</div>
					</div>
					<div className={s.bottom_middle}></div>
				</div>
			</div>
		</div>
	)
}

export default XboxController
