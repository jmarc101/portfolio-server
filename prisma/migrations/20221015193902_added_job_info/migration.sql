/*
  Warnings:

  - Added the required column `companyId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobDuration` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "jobDuration" INTEGER NOT NULL,
    "name" TEXT,
    "address" TEXT
);
INSERT INTO "new_Job" ("address", "email", "id", "name") SELECT "address", "email", "id", "name" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE UNIQUE INDEX "Job_email_key" ON "Job"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
