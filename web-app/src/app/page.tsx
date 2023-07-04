import { Header } from '@/components/Header'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
    </main>
  )
}
