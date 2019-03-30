import React from 'react';
import Activity from './Activity.jsx'

// TODO: put content in metadata.json

function Section({data}) {
	console.log(data);
	return (
		<section className="section">

			<div className="section__top">
				<h3>{data.name}</h3>
			</div>

			<div className="section__middle">
				{data.description}
			</div>

			<div className="section__bottom">
				<Activity data={data.activities[0]} />
			</div>


		</section>
	);
}

export default Section;