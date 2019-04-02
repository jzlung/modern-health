import React from 'react';
import { connect } from "react-redux";
import Card from './Card.jsx';

import emptyUrl from '../../assets/checkbox_empty.png';
import checkedUrl from '../../assets/checkbox_green.png';

const mapStateToProps = (state, ownProps) => {
	const { programId, data } = ownProps;

	if (!state.userActivity[programId] || !state.userActivity[programId][data.name]) {
		return { sectionComplete: false }
	}

	const activityState = state.userActivity[programId][data.name];
	const numCompleted = activityState.reduce((acc, el) => {
		return el ? acc + 1 : acc;
	}, 0);

	return {
		sectionComplete: numCompleted === data.activities.length,
	};
};

function ConnectedSectionCard(props) {
	return (
		<Card>
			<img src={props.sectionComplete ? checkedUrl : emptyUrl} className="completion-badge" alt={`This section is ${true ? "" : "not "}completed`} />

			<div className="section-card__top">
				<img src={props.data.image} className="section-card__image" alt="props.data.name" />
			</div>

			<div className="section-card__bottom">
				<p className="section-part">{`Part ${props.data.order}`}</p>
				<p className="section-name">{props.data.name}</p>
			</div>

		</Card>
	);
}

const SectionCard = connect(mapStateToProps)(ConnectedSectionCard);

export default SectionCard;