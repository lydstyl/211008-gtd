import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'
import clientPromise from '../lib/mongodb'

import styles from '../styles/Tasks.module.css'

export default function Page({ tasks }) {
  const [session, loading] = useSession()
  const [content, setContent] = useState()
  const [taskItems, setTaskItems] = useState(JSON.parse(tasks))

  const addATask = async () => {
    const task = {
      uid: session.user.email,
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
    }

    console.log('add task', task)

    // const client = await clientPromise
    // const db = client.db('ClusterGTD')

    // const collection = db.collection('tasks')

    // // const doc = { name: 'Neapolitan pizza', shape: 'round' }
    // const result = await collection.insertOne(task)
    // console.log(
    //   `A document was inserted with the _id: ${result.insertedId}`,
    // )
  }

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/tasks')
      const json = await res.json()
      if (json) {
        setContent(json)
      }
    }

    fetchData()
  }, [session])

  if (loading) {
    return <div>Loading session...</div>
  }

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  } else {
    if (content) {
      return (
        <Layout>
          <div className={styles.container}>
            <h1>{content.msg}</h1>

            <button onClick={addATask}>Add a task</button>

            <p>
              <strong>{content.tasks}</strong>
            </p>

            <h2 id='collect-task-list-heading'>Collect list</h2>
            <ul
              aria-labelledby='collect-task-list-heading'
              className='task-list'
            ></ul>

            <h2 id='todo-task-list-heading'>To do list</h2>
            <ul
              aria-labelledby='todo-task-list-heading'
              className='task-list'
            ></ul>

            <h2 id='waiting-task-list-heading'>Waiting list</h2>
            <ul
              aria-labelledby='waiting-task-list-heading'
              className='task-list'
            ></ul>

            <ul>
              {taskItems.map(task => (
                <li key={task._id}>
                  {task.name} {task._id}
                </li>
              ))}
            </ul>

            <pre>{JSON.stringify(taskItems, null, 2)}</pre>
          </div>
        </Layout>
      )
    } else {
      return <Layout>Loading content...</Layout>
    }
  }
}

export async function getServerSideProps(context) {
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  // const isConnected = await client.isConnected()

  // return {
  //   props: { isConnected },
  // }

  const client = await clientPromise
  const db = client.db('ClusterGTD')
  const collection = db.collection('tasks')

  // const task = {
  //   uid: 'session.user.email',
  //   //id: '1',
  //   name: 'task1',
  //   dueDate: '',
  //   labels: [
  //     { name: 'urgent', color: 'red' },
  //     { name: 'important', color: 'purple' },
  //   ],
  //   description: '',
  //   activities: [],
  //   checklists: [],
  //   files: [],
  // }

  // const result = await collection.insertOne(task)

  let tasks = await collection.find({}).toArray()
  tasks = JSON.stringify(tasks)

  return {
    props: { tasks },
  }
}
