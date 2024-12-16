/*
  Warnings:

  - The primary key for the `Document` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "chat"."Suggestion" DROP CONSTRAINT "Suggestion_documentId_documentCreatedAt_fkey";

-- AlterTable
ALTER TABLE "chat"."Document" DROP CONSTRAINT "Document_pkey",
ADD CONSTRAINT "Document_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "chat"."Suggestion" ADD CONSTRAINT "Suggestion_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "chat"."Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
