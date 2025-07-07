const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : undefined

export const telegram = tg

export const initTelegram = () => {
	if (tg) {
		tg.ready()
		tg.expand()
	}
}

export function getTelegramUser() {
	if (
		typeof window !== 'undefined' &&
		window.Telegram?.WebApp?.initDataUnsafe?.user
	) {
		return window.Telegram.WebApp.initDataUnsafe.user
	}
	return null
}
