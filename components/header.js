import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Header.module.css'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession()

  return (
    <header className={styles.header}>
      {/* <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript> */}

      <div className={styles.userBox}>
        {/* <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        > */}

        <p className={styles.sessionBox}>
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>

              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={e => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session && (
            <>
              {session.user.image && (
                <span
                  style={{
                    backgroundImage: `url(${session.user.image})`,
                  }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>

                <br />

                <strong>
                  {session.user.email || session.user.name}
                </strong>
              </span>

              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav className={`container ${styles.nav}`}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href='/server'>
              <a>Server</a>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href='/tasks'>
              <a>Protected tasks</a>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href='/todo'>
              <a>To do</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
