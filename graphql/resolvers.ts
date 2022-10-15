import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        courses: async () => await prisma.course.findMany(),
        companies: async () => await prisma.company.findMany(),
        jobs: async () => await prisma.job.findMany(),
        users: async () => await prisma.user.findMany(),
        projects: async () => await prisma.project.findMany(),
    },

    Job: {
        company: async (job: { companyId: string }) => await prisma.company.findUnique({ where : {id: job.companyId}})
    },
}