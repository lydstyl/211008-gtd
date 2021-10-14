import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'

import styles from '../styles/Tasks.module.css'

export default function Page() {
  const [session, loading] = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/tasks')
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <Layout>
      <div className={styles.container}>
        <h1>GTD</h1>
        <p>
          <strong>{content || '\u00a0'}</strong>
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
      </div>
    </Layout>
  )
}
