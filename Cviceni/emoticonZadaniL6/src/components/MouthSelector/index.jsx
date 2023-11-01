import React from 'react';

import {mouthData} from '../../data';
import { useSettings } from '../../setting-context';

const MouthSelector = () => {

	const {settings, handleSettings} = useSettings()

	const handleClick = (item) => {
		/* handleSettings({...item, mouth: item.image}) */
		handleSettings(settings => ({...settings, mouth: item.image}))
	}


	return (
		<div className="items">
			{mouthData.map(mouth =>
				<img
					className='item'
					key={mouth.id}
					src={mouth.image}
					onClick={() => { handleClick(mouth) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;