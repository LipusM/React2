const c = console.log.bind(document)

import { useSettings } from '../../settings-context';
import './style.scss';

const Header = () => {

  const {currency, setCurrency} = useSettings()

  const handleChange = (e) => {
    setCurrency(e.target.value)
  }

  return (
    <header>
      <div className="brand">
        Hračkorama
      </div>
      <select value={currency} onChange={handleChange}>
        <option value="CZK">CZK</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <span>
        Košík: 450 {currency}
      </span>
    </header>
  )
}

export default Header