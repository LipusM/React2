import React from 'react';

import {mouthData} from '../../data';
import { useSettings } from '../../setting-context';

import classnames from 'classnames';

const MouthSelector = () => {

	const {settings, handleSettings} = useSettings()

	const changeMouth = (item) => {
		handleSettings(settings => ({...settings, mouth: item.image}))
	}


	return (
		<div className="items">
			{mouthData.map(mouth =>
				<img
					className={classnames("item", {active: settings.mouth === mouth.image})}
					key={mouth.id}
					src={mouth.image}
					onClick={() => { changeMouth(mouth) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;