import { useState } from 'react';

import Tabs from '../Tabs';
import EyesSelector from '../EyesSelector';
import MouthSelector from '../MouthSelector';
import ColorSelector from '../ColorSelector';

const tabNames = [
	'Oči',
	'Ústa',
	'Barva'
];

const Configurator = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (newActiveTab) => {
		setActiveTab(newActiveTab);
	}

	return (
		<div className="configurator">
			<Tabs tabNames={tabNames} activeTab={activeTab} onTabChange={handleTabChange} />

			{activeTab === 0 && <EyesSelector /> }
			{activeTab === 1 && <MouthSelector /> }
			{activeTab === 2 && <ColorSelector /> }
		</div>
	);
}

export default Configurator;