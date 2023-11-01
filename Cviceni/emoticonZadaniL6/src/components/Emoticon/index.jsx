const c = console.log.bind(document)

import './style.css';

import eyesImg from '../../img/eyes2.svg';
import mouthImg from '../../img/mouth2.svg';

import {eyesData} from "../../data.js"

import { useSettings } from '../../setting-context';

const Emoticon = () => {

	const {settings, handleSettings} = useSettings()
	c(settings.eyes)

	return (
		<div className='emoticon' style={{ backgroundColor: '#ff2e12' }}>
			{/* <img className="emoticon__eyes" src={eyesImg} /> */}
			<img className="emoticon__eyes" src={settings.eyes} />
			{/* <img className="emoticon__mouth" src={mouthImg} /> */}
			<img className="emoticon__mouth" src={settings.mouth} />
		</div>
	);
}

export default Emoticon;