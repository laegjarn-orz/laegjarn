import {useEffect, useRef} from "react";

import styles from './q_clock.module.css'

export default function QClock() {
    const clockRef = useRef<HTMLDivElement>(null);
    const hourHand = useRef<HTMLDivElement>(null);
    const minuteHand = useRef<HTMLDivElement>(null);
    const secondHand = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const date = new Date()
        const seconds = date.getSeconds()
        const minutes = date.getMinutes()
        const hours = date.getHours()

        const secondAngle = seconds * 6
        const minuteAngle = minutes * 6
        const hourAngle = (hours * 30) + (minutes / 2)

        if(hourHand.current)
            hourHand.current.style.transform = `rotateZ(${hourAngle - secondAngle}deg)`
        if(minuteHand.current)
            minuteHand.current.style.transform = `rotateZ(${minuteAngle - secondAngle}deg)`
        if(clockRef.current)
            clockRef.current.style.transform = `rotateZ(${-secondAngle}deg)`
    })

    return (
        <article className={styles.clockContainer}>
            <div ref={clockRef} className={styles.clock}/>
            <div className={styles.hoursContainer}>
                <div ref={hourHand} className={styles.hours}/>
            </div>
            <div className={styles.minutesContainer}>
                <div ref={minuteHand} className={styles.minutes}/>
            </div>
            <div className={styles.secondsContainer}>
                <div ref={secondHand} className={styles.seconds}/>
            </div>
        </article>
    )
}