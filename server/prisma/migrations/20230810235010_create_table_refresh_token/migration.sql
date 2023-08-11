-- CreateTable
CREATE TABLE "Refresh_Token" (
    "id" TEXT NOT NULL,
    "expiresIn" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Refresh_Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Refresh_Token_userId_key" ON "Refresh_Token"("userId");

-- AddForeignKey
ALTER TABLE "Refresh_Token" ADD CONSTRAINT "Refresh_Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
