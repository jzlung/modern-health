import React from 'react';

function Card(props) {
	const style = {
		height: props.height && `${props.height}px`,
		width: props.width && `${props.width}px`,
	};

	return (
		<div className="card" style={style}>
			{props.children}
		</div>
	);
}

export default Card;