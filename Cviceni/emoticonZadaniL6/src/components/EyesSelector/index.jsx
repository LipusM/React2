import React from 'react';

import {eyesData} from '../../data';
import { useSettings } from '../../setting-context';
import classnames from 'classnames';

const EyesSelector = () => {

	const {settings, handleSettings} = useSettings()

	const changeEyes = (item) => {
		handleSettings(settings => ({...settings, eyes: item.image}))
	}


	return (
		<div className="items">
			{eyesData.map((eyes, index) =>
				<img
					className='item'
					key={eyes.id}
					src={eyes.image}
					onClick={() => { changeEyes(eyes) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;