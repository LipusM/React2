const c = console.log.bind(document)

import './style.scss';

import { useSettings } from '../../settings-context';

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
      <select onChange={handleChange}>
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