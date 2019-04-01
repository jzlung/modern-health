import React from 'react';

function Activity({data}) {
	if (data.type === 'Text') {
		return <div className="activity text">{data.content}</div>
	}
	else if (data.type === 'Question') {
		return <div className="activity text">{data.prompt}</div>
	}
}

export default Activity;