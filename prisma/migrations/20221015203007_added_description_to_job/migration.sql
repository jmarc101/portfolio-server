-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL DEFAULT '',
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
