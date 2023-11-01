import React from 'react';

import {mouthData} from '../../data';
import { useSettings } from '../../setting-context';

const MouthSelector = () => {

	const {handleSettings} = useSettings()

	const handleClick = (item) => {
		/* console.log('mouth', item.id); */
		handleSettings({...item, mouth: item.id})
		/* handleSettings(prev => ({...prev, mouth: item.id})) */
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