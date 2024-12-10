/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Chatbot` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Chatbot` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Chatbot` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stylesId]` on the table `Chatbot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `team_id` to the `Chatbot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chat"."Chatbot" DROP CONSTRAINT "Chatbot_teamId_fkey";

-- AlterTable
ALTER TABLE "chat"."Chatbot" DROP COLUMN "createdAt",
DROP COLUMN "teamId",
DROP COLUMN "updatedAt",
ADD COLUMN     "allowed_domains" TEXT[],
ADD COLUMN     "analytics_sector" TEXT,
ADD COLUMN     "collect_leads_settings" JSONB,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "credits_limit" INTEGER,
ADD COLUMN     "credits_used" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "custom_domains" TEXT[],
ADD COLUMN     "embedding_model" TEXT NOT NULL DEFAULT 'text-embedding-3-large',
ADD COLUMN     "freeze_topics" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "index_name" TEXT,
ADD COLUMN     "initial_messages" TEXT[],
ADD COLUMN     "instructions" TEXT,
ADD COLUMN     "ip_limit" INTEGER,
ADD COLUMN     "ip_limit_message" TEXT,
ADD COLUMN     "ip_limit_timeframe" INTEGER,
ADD COLUMN     "last_trained_at" TIMESTAMP(3),
ADD COLUMN     "model" TEXT NOT NULL DEFAULT 'gpt-4',
ADD COLUMN     "notifications_settings" JSONB,
ADD COLUMN     "retraining_interval" INTEGER,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'trained',
ADD COLUMN     "stylesId" TEXT,
ADD COLUMN     "suggested_messages" TEXT[],
ADD COLUMN     "team_id" TEXT NOT NULL,
ADD COLUMN     "temp" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "visibility" TEXT NOT NULL DEFAULT 'private';

-- CreateTable
CREATE TABLE "chat"."styles" (
    "id" TEXT NOT NULL,
    "theme" TEXT,
    "chat_icon" TEXT,
    "button_color" TEXT,
    "display_name" TEXT,
    "align_chat_button" TEXT,
    "user_message_color" TEXT,
    "regenerate_messages" BOOLEAN,
    "profile_picture_file" TEXT,
    "collect_user_feedback" BOOLEAN,
    "auto_open_chat_window_after" INTEGER,
    "message_placeholder" TEXT,
    "header_color" TEXT,
    "footer" TEXT,
    "chatbotId" TEXT,

    CONSTRAINT "styles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "styles_chatbotId_key" ON "chat"."styles"("chatbotId");

-- CreateIndex
CREATE UNIQUE INDEX "Chatbot_stylesId_key" ON "chat"."Chatbot"("stylesId");

-- CreateIndex
CREATE INDEX "Chatbot_team_id_idx" ON "chat"."Chatbot"("team_id");

-- AddForeignKey
ALTER TABLE "chat"."Chatbot" ADD CONSTRAINT "Chatbot_stylesId_fkey" FOREIGN KEY ("stylesId") REFERENCES "chat"."styles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat"."Chatbot" ADD CONSTRAINT "Chatbot_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "chat"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
