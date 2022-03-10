import React, { MouseEvent, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
        setDate(new Date())
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const d = new Date()

    const time = () => {
        let h = d.getHours()
        let m = d.getMinutes()
        let s = d.getSeconds()

        let hour = h < 10 ? '0' + h : h
        let min = m < 10 ? '0' + m : m
        let sec = s < 10 ? '0' + s : s

        return <>{hour}:{min}:{sec}</>
    }

    const data = () => {
        let date = d.getDate()
        let mn = d.getMonth() + 1
        let y = d.getFullYear()

        let day = date < 10 ? '0' + date : date
        let month = mn < 10 ? '0' + mn : mn
        return <>{day}:{month}:{y}</>
    }

    const stringTime = time() // fix with date
    const stringDate = data() // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
