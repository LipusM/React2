const c = console.log.bind(document)

import "./style.scss"

const TimeButtons = ({theTime, setYourTime}) => {
    
    return (
        <div className="stage__time">
            {
                theTime.map(time => <button className="stage-time-selection" key={time.realTime} 
                onClick={() => setYourTime(time.realTime)}>{time.textTime}</button>)
            }
            <div></div>
        </div>
    )
}

export default TimeButtons