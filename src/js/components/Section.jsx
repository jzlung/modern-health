import React from 'react';
import { connect } from "react-redux";

import TextActivity from './TextActivity.jsx'
import QuestionActivity from './QuestionActivity.jsx'
import logActivity from '../actions/index';

// TODO: put content in metadata.json

const mapDispatchToProps = dispatch => {
	return {
		logActivity: (programId, sectionName, activityIndex, extra) => {
			console.log("hola", programId, sectionName, activityIndex, extra);
			dispatch(logActivity({
				programId,
				sectionName,
				activityIndex,
				extra,
			}));
		}
	};
};

function ConnectedSection(props) {
	const { data, logActivity } = props;

	const activityProps = {
		data,
		onAction: (extra) => {
			const { programId, sectionName, activityIndex } = props;
			logActivity(programId, sectionName, activityIndex, extra);
		},
	};

	const renderActivityType = activityData => {
		switch (activityData.type) {
			case "Text":
				return <TextActivity {...activityProps} />;
			case "Question":
				return <QuestionActivity {...activityProps} />;
			default:
				return null;
		}
	};

	return (
		<section className="section">

			<div className="section__bottom">
				{renderActivityType(data)}
			</div>

		</section>
	);
}

const Section = connect(null, mapDispatchToProps)(ConnectedSection);

export default Section;
