/*
  Warnings:

  - You are about to drop the column `name` on the `Job` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "jobDuration" INTEGER NOT NULL,
    "title" TEXT,
    "address" TEXT
);
INSERT INTO "new_Job" ("address", "companyId", "email", "id", "jobDuration") SELECT "address", "companyId", "email", "id", "jobDuration" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE UNIQUE INDEX "Job_email_key" ON "Job"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
