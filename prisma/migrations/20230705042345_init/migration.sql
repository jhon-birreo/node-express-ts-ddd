-- CreateEnum
CREATE TYPE "UserGenderAvaibles" AS ENUM ('UNDEFINED', 'MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "UserRoleAvailables" AS ENUM ('ADMIN', 'USER', 'AUDITOR');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(500),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "phoneNumber" VARCHAR(100),
    "avatar" VARCHAR(2500),
    "gender" "UserGenderAvaibles" NOT NULL DEFAULT 'UNDEFINED',
    "roles" "UserRoleAvailables"[] DEFAULT ARRAY['USER']::"UserRoleAvailables"[],
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "timeLine" JSONB NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "timeLine" JSONB,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_key" ON "users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "products_email_key" ON "products"("email");
