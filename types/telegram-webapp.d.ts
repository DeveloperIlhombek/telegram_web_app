export {}

declare global {
	interface TelegramUser {
		id: number
		is_bot: boolean
		first_name: string
		last_name?: string
		username?: string
		language_code?: string
		allows_write_to_pm?: boolean
	}

	interface TelegramWebAppInitDataUnsafe {
		query_id?: string
		user?: TelegramUser
		auth_date?: number
		hash?: string
	}

	interface TelegramWebApp {
		initData: string
		initDataUnsafe: TelegramWebAppInitDataUnsafe
		ready(): void
		expand(): void
		close(): void
		version: string
		platform: string
		isExpanded: boolean
		isClosingConfirmationEnabled: boolean
		enableClosingConfirmation(): void
		disableClosingConfirmation(): void
		sendData(data: string): void
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		HapticFeedback: any
	}

	interface Window {
		Telegram: {
			WebApp: TelegramWebApp
		}
	}
}
