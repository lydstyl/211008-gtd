import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'

const Page: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>GTD Home</h1>

        <p>Use local storage</p>
        <p>A Task component must have :</p>
        <ul>
          <li>uid</li>
          <li>id</li>
          <li>name</li>
          <li>dueDate</li>
          <li>labels including important, urgent, and so on</li>
        </ul>

        <p>And might have later :</p>
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

export default Page
