const c = console.log.bind(document)

import { usePrefs } from '../../prefs-context'
import './style.scss'

const Header = () => {

    const {vegansOnly, setVegan} = usePrefs()

    const handleChange = (e) => {

        if(e.target.value === "false"){
            setVegan(false)
        } else {
            setVegan(true)
        }

    }

    return(
        <header>
        <div className="pizza" />
        <h1>Build your own pizza</h1>
        <select onChange={handleChange}>
            <option value={true}>Vegans only</option>
            <option value={false}>All</option>
        </select>
        </header>
    )

}

export default Header