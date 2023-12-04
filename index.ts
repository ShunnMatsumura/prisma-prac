import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//       posts: {
//         create: { title: 'Hello World' },
//       },
//       profile: {
//         create: { bio: 'I like turtles' },
//       },
//     },
//   })

//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allUsers, { depth: null })
// }

// async function main() {
//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   })
//   console.log(post)
// }

async function main() {
  const latestPost = await prisma.post.findMany({
    where: { published: false },
    orderBy: { updatedAt: 'desc' },
    take: 1,
  })

  console.log(latestPost)

  const post = await prisma.post.create({
    data: {
      title: 'aaaaa',
      author: {
        connect: { email: 'alice@prisma.io' },
      },
    },
  })

  console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })