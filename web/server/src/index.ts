import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.post(`/signup`, async (req, res) => {
  const { email, name } = req.body
  console.log(email)

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    return res.json({ user, ok: true })
  }

  const result = await prisma.user.create({
    data: {
      email,
      name
    },
  })

  
  res.json({result, ok: true})
})

app.post(`/task`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.task.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

app.put('/task/:id/views', async (req, res) => {
  const { id } = req.params

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    })

    res.json(task)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params

  try {
    const postData = await prisma.task.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      },
    })

    const updatedPost = await prisma.task.update({
      where: { id: Number(id) || undefined },
      data: { published: !postData?.published },
    })
    res.json(updatedPost)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.delete(`/task/:id`, async (req, res) => {
  const { id } = req.params
  const task = await prisma.task.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(task)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/user/:id/drafts', async (req, res) => {
  const { id } = req.params

  const drafts = await prisma.user
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .Tasks({
      where: { published: false },
    })

  res.json(drafts)
})

app.put('/user/:id', async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  console.log(name)
  const user = await prisma.user.update({
    where: { id: Number(id) || undefined },
    data: {
      name
    },
  })

  console.log(user)


  res.json({user, ok: true})
})


app.delete('/user/:id', async (req, res) => {
  const { id } = req.params
  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  })
  
  res.json({user, ok: true})
})

app.get(`/task/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params

  const post = await prisma.task.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
})

const server = app.listen(3001, () =>
  console.log(`
🚀 Server ready at: http://localhost:3001
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
