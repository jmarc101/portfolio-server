import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        company: async (id: string) => await prisma.company.findUnique({where:{id: id}}),
        companies: async () => await prisma.company.findMany(),
        course: async (id: string) => await prisma.course.findUnique({where:{id: id}}),
        courses: async () => await prisma.course.findMany(),
        job: async (id: string) => await prisma.job.findUnique({where:{id: id}}),
        jobs: async () => await prisma.job.findMany(),
        project: async (id: string) => await prisma.project.findUnique({where:{id: id}}),
        projects: async () => await prisma.project.findMany(),
    },

    Mutation: {
        createProject: async (_root: any, { input } : { input: any }) => {
            const { name, description, rating } = input;
            return await prisma.project.create({data: {
                name: name,
                description: description,
                rating: rating
            }})
        },
        createCompany: async (_root: any, { input } : { input: any }) => {
            const { name, description, address } = input;
            return await prisma.company.create({data: {
                name: name,
                description: description,
                address: address,
            }})
        },
        createCourse: async (_root: any, { input } : { input: any}) => {
            const { author, description, rating, isCertified } = input;
            return await prisma.course.create({data: {
                author: author,
                description: description,
                rating: rating,
                isCertified: isCertified
            }})
        },
        createJob: async (_root: any, { input } : { input: any}) => {
            const { title, address, description, email, companyId, jobDuration } = input;
            return await prisma.job.create({data: {
                title: title,
                address: address,
                description: description,
                email: email,
                companyId: companyId,
                jobDuration: jobDuration,
            }})
        },
        deleteCourse: async (_root:any, { id }: { id:string }) => await prisma.course.delete({where: {id: id}}),
        deleteCompany: async (_root:any, { id }: { id:string }) => await prisma.company.delete({where: {id: id}}),
        deleteJob: async (_root:any, { id }: { id:string }) => await prisma.job.delete({where: {id: id}}),
        deleteProject: async (_root:any, { id }: { id:string }) => await prisma.project.delete({where: {id: id}}),

    },

    // Defining Job here permits me to cherry pick one or many properties to override default mapping
    Job: {
        company: async (job: { companyId: string }) => await prisma.company.findUnique({ where : {id: job.companyId}})
    },
}