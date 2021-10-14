// This is an example of to protect an API route
import { getSession } from 'next-auth/client'

import { tasks } from '../../../data/someTasks'

const getTasks = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      msg: 'This is protected content. You can access this content because you are signed in.',

      content: tasks,
    })
  } else {
    res.send({
      error:
        'You must be sign in to view the protected content on this page.',
    })
  }
}

export default getTasks
