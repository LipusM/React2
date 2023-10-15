const c = console.log.bind(document)

import './style.scss'

const Child = (props) => {

    const {changeWord} = props

  return (
    <div className='child'>
        <h1>Child</h1>
        {/* <button onClick={() => changeWord("Ania")}>Click to change title</button> */}
        <button onClick={() => changeWord("Ania")}>Click to change title</button>
    </div>
  )
}

export default Child
