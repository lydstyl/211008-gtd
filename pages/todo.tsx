import type { NextPage, GetServerSideProps } from 'next'
// import styles from '../styles/Home.module.css'

import { connect } from '../utils/database'

import Layout from '../components/layout'

const Page: NextPage = ({ tasks }) => {
  tasks = JSON.parse(tasks)

  async function addTask() {
    try {
      const response = await fetch('/api/todo/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: 'taskData' }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log('Error while adding task')
      console.log(error)

      throw error
    }
  }

  return (
    <Layout>
      <div className=''>
        <h1>To do</h1>

        <button onClick={addTask}>Add a task</button>

        <pre>{JSON.stringify(tasks, null, 4)}</pre>

        <ul>
          {tasks.map(t => (
            <li key={t._id}>{t.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps =
  async context => {
    const { db } = await connect()

    const collection = db.collection('tasks')

    const documents = await collection.find({}).toArray()
    const tasks = JSON.stringify(documents)

    return {
      props: { tasks },
    }
  }

export default Page
