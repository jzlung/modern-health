import React from 'react';
import Card from './Card.jsx';

function SectionCard(props) {
	return (
		<button onClick={props.onSectionClick}>
			<Card>

				<div className="section-card__top">
					<img src={props.data.image} className="section-card__image" alt="props.data.name" />
				</div>

				<div className="section-card__bottom">
					{props.data.name}
				</div>

			</Card>
		</button>
	);
}

export default SectionCard;