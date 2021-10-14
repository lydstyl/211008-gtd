// This is an example of to protect an API route
import { getSession } from 'next-auth/client'

const content = JSON.stringify([
  {
    uid: 'myuid',
    id: '1',
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
  },
  {
    uid: 'myuid',
    id: '2',
    name: 'task2',
    dueDate: '',

    labels: [{ name: 'important', color: 'purple' }],

    description: '',
    activities: [],
    checklists: [],
    files: [],
  },
])

const getTasks = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      msg: 'This is protected content. You can access this content because you are signed in.',

      content,
    })
  } else {
    res.send({
      error:
        'You must be sign in to view the protected content on this page.',
    })
  }
}

export default getTasks
