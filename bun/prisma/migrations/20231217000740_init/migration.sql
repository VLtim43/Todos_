-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
