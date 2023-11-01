import {colorsData} from '../../data';

const ColorSelector = () => {

	const handleClick = (item) => {
		console.log('color', item.id);
	}

	return (
		<div className="items">
			{colorsData.map(color =>
				<div
					className='item'
					key={color.id}
					style={{ backgroundColor: color.value}}
					onClick={() => { handleClick(color) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;