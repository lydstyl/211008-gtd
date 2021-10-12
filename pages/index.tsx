import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>GTD</h1>

        <h2 id='collect-task-list-heading'>Collect</h2>
        <ul
          aria-labelledby='collect-task-list-heading'
          className='task-list'
        ></ul>

        <h2 id='todo-task-list-heading'>To do</h2>
        <ul
          aria-labelledby='todo-task-list-heading'
          className='task-list'
        ></ul>

        <h2 id='waiting-task-list-heading'>Waiting</h2>
        <ul
          aria-labelledby='waiting-task-list-heading'
          className='task-list'
        ></ul>

        <p>Use local storage</p>
        <p>A todo component :</p>
        <p>must be</p>
        <ul>
          <li>uid</li>
          <li>id</li>
          <li>name</li>
          <li>dueDate</li>
          <li>labels including important, urgent, and so on</li>
        </ul>

        <p>later</p>
        <ul>
          <li>description</li>
          <li>activity</li>
          <li>checklist to make process and so on</li>
          <li>files</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home
