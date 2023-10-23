const c = console.log.bind(document)

import "./style.scss"

const TimeShow = ({timeLeft}) => {
    return (
        <div id="time-show">
            <p>
                Zbývající čas: {timeLeft}
            </p>
        </div>
    )
}

export default TimeShow