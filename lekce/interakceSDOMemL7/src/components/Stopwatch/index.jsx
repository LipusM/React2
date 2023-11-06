import {useState, useEffect, useRef} from "react"

const Stopwatch = () => {

    const [seconds, setSeconds] = useState(0)
    const intervalId = useRef()

    const handleStart = () => {
        intervalId.current = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)

        /* setSeconds(0) */ //Pokud chceme, ať se to zároveň hodí na hodnotu 0.
    }

    const handleStop = () => {
        clearInterval(intervalId.current)
    }
    
    return (
        <div className="stopwatch">
                <h2>Stopwatch: {seconds}</h2>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Stopwatch



