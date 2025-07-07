export async function getMe() {
	const res = await fetch('/api/me')
	return await res.json()
}

// Next.js API route
export async function POST(req: Request) {
	const tgUser = await req.json()

	const res = await fetch('http://localhost:8000/api/users/telegram-auth/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(tgUser),
	})

	const user = await res.json()
	return Response.json(user)
}
