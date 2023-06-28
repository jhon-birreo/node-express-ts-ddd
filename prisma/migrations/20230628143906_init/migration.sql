/*
  Warnings:

  - You are about to drop the column `isActive` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `timeLine` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - A unique constraint covering the columns `[uuid]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePicUrl` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('UNDEFINED', 'MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'AUDITOR');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isActive",
DROP COLUMN "name",
DROP COLUMN "timeLine",
ADD COLUMN     "address" VARCHAR(1500) NOT NULL,
ADD COLUMN     "birthDate" DATE NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMPTZ(3),
ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'UNDEFINED',
ADD COLUMN     "lastName" VARCHAR(500) NOT NULL,
ADD COLUMN     "phoneNumber" VARCHAR(100) NOT NULL,
ADD COLUMN     "profilePicUrl" VARCHAR(2500) NOT NULL,
ADD COLUMN     "roles" "Role"[] DEFAULT ARRAY['USER']::"Role"[],
ADD COLUMN     "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "username" VARCHAR(100) NOT NULL,
ADD COLUMN     "uuid" VARCHAR(1000) NOT NULL,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_key" ON "users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
