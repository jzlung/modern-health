import React from 'react';
import SectionCard from './SectionCard.jsx'

/*
Todos, refactors, reusables:
- Learn More link text

*/

function ProgramPreview(props) {
	return (
		<div className="program-preview">
			<h2>{props.data.name}</h2>

			<a href="#">Learn More</a>

			<div className="sections">
				{props.data.sections.map((section, sectionIndex) => {
					const onClick = () => {
						props.onSectionClick(props.programId, sectionIndex);
					};

					return (
						<SectionCard data={section} onSectionClick={onClick} />
					);
					
				})}
			</div>
			
		</div>
	);
}

export default ProgramPreview;