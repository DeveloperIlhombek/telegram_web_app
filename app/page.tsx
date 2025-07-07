'use client'
import { User } from '@/types'
import { useEffect, useState } from 'react'

export default function HomePage() {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const tgUser = window.Telegram.WebApp.initDataUnsafe?.user

		if (tgUser) {
			fetch('http://localhost:8000/api/users/telegram-auth', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(tgUser),
			})
				.then(res => res.json())
				.then(data => setUser(data))
		}
	}, [])

	if (!user) return <p>Yuklanmoqda...</p>

	return user.role === 'TEACHER' ? (
		<a href='/teacher'>Oqituvchilar paneli</a>
	) : (
		<a href='/pupil'>Oquvchilar paneli</a>
	)
}
