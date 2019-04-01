import React from 'react';
import { Link } from "react-router-dom";

import Section from './Section.jsx';

function SectionView(props) {
	/*
		<Section data={this.props.data[this.state.currentIndex]} />
				<button onClick={this.handleBackClick}>Back</button>
				<button onClick={this.handleContinueClick}>Continue</button>
	*/

	const { match, data, programId } = props;
	const urlPrefix = `/${match.params.programId}/${match.params.section}/`;
	
	const activityIndex = parseInt(match.params.index || 0, 10);

	const backLink = activityIndex === 0
		? "/"
		: `${urlPrefix}${activityIndex - 1}`;

	const continueLink = activityIndex === data.activities.length - 1
		? "/"
		: `${urlPrefix}${activityIndex + 1}`;


	// TODO: is footer the right role?
	return (
		<div className="section-view">

			<div className="section__top">
				<h1>{data.name}</h1>
			</div>

			<Section 
				data={data.activities[activityIndex]}
				programId={programId}
				sectionName={data.name}
				activityIndex={activityIndex}
			/>

			<footer>
				<Link to={backLink}>Back</Link>
				<Link to={continueLink}>Continue</Link>
			</footer>

		</div>
	);
}	

export default SectionView;
