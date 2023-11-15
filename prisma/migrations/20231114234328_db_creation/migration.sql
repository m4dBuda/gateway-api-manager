-- CreateEnum
CREATE TYPE "customer_status" AS ENUM ('PENDING_DOCUMENTS', 'PENDING_PAYMENT_METHOD', 'APPROVED', 'BLOCKED', 'WAITING');

-- CreateEnum
CREATE TYPE "seller_status" AS ENUM ('PENDING_DOCUMENTS', 'APPROVED', 'BLOCKED', 'WAITING');

-- CreateEnum
CREATE TYPE "seller_user_status" AS ENUM ('PENDING_DOCUMENTS', 'BANNED', 'APPROVED', 'BLOCKED', 'WAITING');

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "cpf" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "userImageUrl" TEXT,
    "status" "customer_status",
    "addressId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seller" (
    "id" TEXT NOT NULL,
    "businessName" TEXT,
    "tradeName" TEXT,
    "cnpj" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "brandImageUrl" TEXT,
    "status" "seller_status",
    "addressId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "number" TEXT,
    "neighborhood" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "zipCode" TEXT,
    "complement" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sellerCatalog" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "catalogImageUrl" TEXT,
    "sellerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "sellerCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "productImageUrl" TEXT,
    "price" TEXT,
    "quantity" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_productsToseller" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_productsTosellerCatalog" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_productsToseller_AB_unique" ON "_productsToseller"("A", "B");

-- CreateIndex
CREATE INDEX "_productsToseller_B_index" ON "_productsToseller"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_productsTosellerCatalog_AB_unique" ON "_productsTosellerCatalog"("A", "B");

-- CreateIndex
CREATE INDEX "_productsTosellerCatalog_B_index" ON "_productsTosellerCatalog"("B");

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seller" ADD CONSTRAINT "seller_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellerCatalog" ADD CONSTRAINT "sellerCatalog_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsToseller" ADD CONSTRAINT "_productsToseller_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsToseller" ADD CONSTRAINT "_productsToseller_B_fkey" FOREIGN KEY ("B") REFERENCES "seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsTosellerCatalog" ADD CONSTRAINT "_productsTosellerCatalog_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsTosellerCatalog" ADD CONSTRAINT "_productsTosellerCatalog_B_fkey" FOREIGN KEY ("B") REFERENCES "sellerCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
