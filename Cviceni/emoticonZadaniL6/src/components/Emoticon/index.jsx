import './style.css';

import eyesImg from '../../img/eyes2.svg';
import mouthImg from '../../img/mouth2.svg';

const Emoticon = () => {

	return (
		<div className='emoticon' style={{ backgroundColor: '#ff2e12' }}>
			<img className="emoticon__eyes" src={eyesImg} />
			<img className="emoticon__mouth" src={mouthImg} />
		</div>
	);
}

export default Emoticon;