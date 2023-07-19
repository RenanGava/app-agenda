import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';


export function CalendarComponent() {


    const array = [new Date(2020, 7, 12), new Date(2020, 7, 15), new Date(2020, 7, 20)]

    function handleTeste(e: Date | Date[]) {
        console.log(e);

    }

    return (
        <Calendar
            value={array}
            className='calendar'
            isMultiSelector={true}
            onChange={e => { handleTeste(e) }}
        />
    )
}