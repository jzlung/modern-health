import React from 'react';
import { Link } from 'react-router-dom';
import SectionCard from './SectionCard';
import { getHashFromSectionName } from '../helpers';

function Program(props) {
  // TODO: style the button as link

  return (
    <div className="program">
      <div className="program__heading">
        <h1>{props.data.name}</h1>

        <button className="learn-more btn-as-link" onClick={props.triggerModal}>Learn More</button>
      </div>

      <div className="sections">

        {props.data.sections.map(section => {
          const hashedSectionName = getHashFromSectionName(section.name);
          const link = `/${props.programId}/${hashedSectionName}`;
          return (
            <Link 
              to={`${link}/0`} 
              key={link}
            >
              <SectionCard data={section} programId={props.programId} />
            </Link>
          );
          
        })}

      </div>
    </div>
  );
}

export default Program;