const c = console.log.bind(document)

import {colorsData} from '../../data';
import { useSettings } from '../../setting-context';

import classnames from 'classnames';

const ColorSelector = () => {

	const {settings, handleSettings} = useSettings()

	const changeColor = (item) => {
		/* console.log('color', item.id); */
		handleSettings(settings => ({...settings, color: item.value}))
	}

	return (
		<div className="items">
			{colorsData.map(color =>
				<div
					className={classnames("item", {active: settings.color === color.value})}
					key={color.id}
					style={{ backgroundColor: color.value}}
					onClick={() => { changeColor(color) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;