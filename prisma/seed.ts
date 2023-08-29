import { PrismaClient } from "@prisma/client";
import { data } from "../src/data/mockupdata";

const prisma = new PrismaClient();

async function main() {
  const employee = await prisma.employee.createMany({
    data: [...data]
  });

  console.log({ employee });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
