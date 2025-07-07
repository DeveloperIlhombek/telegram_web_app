export interface User {
	id: number
	username: string
	role: 'PUPIL' | 'TEACHER' | 'ADMIN'
	score: number
}
