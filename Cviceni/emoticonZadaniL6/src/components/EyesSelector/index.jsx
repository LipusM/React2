import React from 'react';

import {eyesData} from '../../data';
import { useSettings } from '../../setting-context';

const EyesSelector = () => {

	const {handleSettings} = useSettings()

	const handleClick = (item) => {
		/* console.log('eyes', item.id); */
		handleSettings({...item, eyes: item.id})
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