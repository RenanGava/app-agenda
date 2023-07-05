"use client"
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import iconPassword from '../../icons/password.png'
import iconEmail from '../../icons/email.png'



export function FormLogin() {

    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)


    const labelEmail = !email && (
        <label htmlFor="email">
            <Image
                className={styles.icon}
                src={iconEmail}
                alt=''
            />
            Email
        </label>
    )

    const labelPassword = !password && (
        <label htmlFor="password">
            <Image
                className={styles.iconPassword}
                src={iconPassword}
                alt=''
            />
            Senha
        </label>
    )


    async function handleLogin(event: FormEvent){
        event.preventDefault()
        console.log(event);
    }

    return (
        <form
            className={styles.formLogin}
            onSubmit={handleLogin}
        >
            <div className={styles.inputfield}>

                {labelEmail}

                <input
                    onChange={e => setEmail(e.target.value)}
                    type='text'
                    id="email"
                />
            </div>
            <div className={styles.inputfield}>
                {labelPassword}

                <input
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    type={password ? 'password' : 'text'}
                />
            </div>

            <button type='submit'>GET STARTED</button>
        </form>
    )
}