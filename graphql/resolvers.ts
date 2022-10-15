import { Companies, Courses, Jobs } from '../database.js';

export const resolvers = {
    Query: {
        courses: async () => Courses.findAll(),
        companies: async () => Companies.findAll(),
        jobs: async () => Jobs.findAll(),
    },

    Job: {
        company: async (job: { companyId: string }) => await Companies.findById(job.companyId)
    },
}