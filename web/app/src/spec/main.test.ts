import { describe, it, expect } from 'vitest'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


describe('get the first user', () => {
    it('should match admin', async () => {
        const user = await prisma.user.findFirst()
        expect(user?.name).toBe('admin')
        expect(user?.email).toBe('admin@schedulegpt.io')
    })

    prisma.$disconnect()
})