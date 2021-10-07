import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>Gabriel's GTD method</h1>

            <h2>Collect</h2>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>

            <h2>TODO</h2>
            <ul>
                <li>ONE</li>
                <li>TWO</li>
                <li>three</li>
            </ul>

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
    );
};

export default Home;
