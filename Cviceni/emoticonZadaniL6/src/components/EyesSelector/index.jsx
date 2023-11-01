import React from 'react';

import {eyesData} from '../../data';
import { useSettings } from '../../setting-context';

const EyesSelector = () => {

	const {settings, handleSettings} = useSettings()

	const handleClick = (item) => {
		/* handleSettings({...item, eyes: item.image}) */
		handleSettings(settings => ({...settings, eyes: item.image}))

	}


	return (
		<div className="items">
			{eyesData.map(eyes =>
				<img
					className='item'
					key={eyes.id}
					src={eyes.image}
					onClick={() => { handleClick(eyes) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;