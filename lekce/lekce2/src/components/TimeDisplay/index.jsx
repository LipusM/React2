import React from "react"

import { useState } from "react"

const TimeDisplay = () => {

    const TimeDisplay = () => {
        const [time, setTime] = useState({
            hours: 1,
            minutes: 20,
            seconds: 40
        })
      };


      const addMinute = () => {
        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
        } else {
          setMinutes(minutes + 1);
        }
      }
      


    return (
        <>
        </>
    )
}

export default TimeDisplay