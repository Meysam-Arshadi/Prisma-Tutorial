import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	await prisma.user.deleteMany()
	await prisma.user.create({
		data: {
			name: 'Meysam',
			email: 'meysam@test.com',
			age: 27,
			isAdmin: false, // Add the isAdmin property
			userPreference: {
				create: {
					emailUpdates: true,
				},
			},
		},
		select: {
			name: true,
			userPreference: { select: { id: true}}
		}
		},
	})
}

main()
	.catch((e) => {
		console.log(e.message)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
