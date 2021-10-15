import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../utils/database'

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { db } = await connect()

    const task = {
      uid: 'email11',
      //id: '1',
      name: 'task1',
      dueDate: '',
      labels: [
        { name: 'urgent', color: 'red' },
        { name: 'important', color: 'purple' },
      ],
      description: '',
      activities: [],
      checklists: [],
      files: [],
      createdAt: new Date(),
    }

    // const {
    //   sighting: { latitude, longitude },
    // } = req.body

    console.log(`gb🚀 ~ req.body`, req.body)

    const result = await db.collection('tasks').insertOne(task)

    res.status(201)
    res.json({ task: result })
  } catch (e) {
    res.status(500)
    res.json({ error: 'Unable to insert task... sorry' })
  }
}
