import React from 'react';
import './style.css';


const Tabs = ({tabNames, activeTab, onTabChange}) => {

	const handleClick = (index) => {
		onTabChange(index)
	}
	return (
		<div className='tabs'>
			{tabNames.map((tabName, index) =>
				<button
					className={`tab ${activeTab === index ? 'active' : ''}`}
					onClick={() => { handleClick(index); }}
					key={tabName}
				>{tabName}</button>
			)}
		</div>
	);
}

export default Tabs;