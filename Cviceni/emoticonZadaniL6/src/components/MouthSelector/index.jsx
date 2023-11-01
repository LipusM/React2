import React from 'react';

import {mouthData} from '../../data';

const MouthSelector = () => {

	const handleClick = (item) => {
		console.log('mouth', item.id);
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