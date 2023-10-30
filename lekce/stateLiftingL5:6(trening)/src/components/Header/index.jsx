const c = console.log.bind(document)

import './style.scss';

import { useSettings } from '../../settings-context';

const Header = () => {

  return (
    <header>
      <div className="brand">
        Hračkorama
      </div>
      <span>
        Košík: 450 CZK
      </span>
    </header>
  )
}

export default Header