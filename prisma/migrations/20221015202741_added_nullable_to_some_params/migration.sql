-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "jobDuration" INTEGER,
    "title" TEXT,
    "address" TEXT
);
INSERT INTO "new_Job" ("address", "companyId", "email", "id", "jobDuration", "title") SELECT "address", "companyId", "email", "id", "jobDuration", "title" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE UNIQUE INDEX "Job_email_key" ON "Job"("email");
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author" TEXT NOT NULL,
    "description" TEXT,
    "rating" INTEGER,
    "isCertified" BOOLEAN
);
INSERT INTO "new_Course" ("author", "description", "id", "isCertified", "rating") SELECT "author", "description", "id", "isCertified", "rating" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_author_key" ON "Course"("author");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
