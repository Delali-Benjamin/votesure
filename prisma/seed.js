const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Delali Boateng",
        email: "iamdelaben@gmail.com",
        role: "VOTER",
      },
      {
        name: "Akosua Mensah",
        email: "delaben1537@gmail.com",
        role: "VOTER",
      },
      {
        name: "Yaw Owusu",
        email: "datamartgh@gmail.com",
        role: "VOTER",
      },
      {
        name: "Yaw Owusu",
        email: "blue@gmail.com",
        role: "VOTER",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seeded eligible voters ✅");
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

  // prisma/seed.js


