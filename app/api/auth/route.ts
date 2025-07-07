// /app/api/auth/route.ts (App Router ishlatilgan holatda)
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { telegram_id } = await req.json()

	const res = await fetch(
		`${process.env.BACKEND_URL}/api/users/telegram-auth/`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ telegram_id }),
		}
	)

	const user = await res.json()
	return NextResponse.json(user)
}
