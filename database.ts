import { Database } from 'fakebase';

const db = new Database('./data');

export const Jobs = db.table('jobs');
export const Companies = db.table('companies');
export const Courses = db.table('courses');