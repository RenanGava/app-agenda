import { Header } from '@/components/Header'
import styles from './page.module.scss'
import { FormLogin } from '@/components/FormLogin'

export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
      <FormLogin/>
    </main>
  )
}

