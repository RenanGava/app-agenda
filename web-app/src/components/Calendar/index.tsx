import { Calendar } from '@natscale/react-calendar';
import styles from './styles.module.scss'
import '@natscale/react-calendar/dist/main.css';
import { useEffect, useState } from 'react'
import { CalendarProps } from '@natscale/react-calendar/dist/utils/types';

export function CalendarComponent({...rest}: CalendarProps) {

    
    
    

    return (
        <Calendar
            {...rest}
            className={styles.calendar}
        />
    )
}