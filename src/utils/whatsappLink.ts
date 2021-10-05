export const whatsAppLink = () => {
	const WAPP_NUMBER = '59178411177'
	const WAPP_TEXT = 'Hola! quiero comprar muchos juegos 🎮'
	const WAPP_LINK = `https://wa.me/${WAPP_NUMBER}?text=${encodeURI(WAPP_TEXT)}`
	return WAPP_LINK
}
