import {Open_Sans} from 'next/font/google'
import Link from 'next/link'
import styles from './RootLayout.module.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weights: [400]
})
export const metadata = {
  title: 'Globalmantics app',
  description: 'Generated Cosy',
}

export default function RootLayout({children}){
  return(
    <html lang='en' className={openSans.className}>
      <title>Globalmantics app</title>
      <head />
      <body className={styles.html}>
        <header className={styles.header}>
          <ul>
            <li className={styles.links}>
              <Link href='/home' className={styles.links}>Globalmantics</Link>
            </li>
            <li className={styles.links}>
              <Link href='/blog' className={styles.links}>Blog</Link>
            </li>
            <li className={styles.links}>
              <Link href='/settings' className={styles.links}>Settings</Link>
            </li>
            <li className={styles.links}>
              <Link href='/conference' className={styles.links}>Conference</Link>
            </li>
          </ul>

        </header>
        {children}</body>
    </html>
  )
}
