import React from 'react';

class TextActivity extends React.Component {
	
	componentDidMount = () => {
		if (this.props.onAction) {
			this.props.onAction();
		}
	};
	
	componentDidUpdate = () => {
		if (this.props.onAction) {
			this.props.onAction();
		}
	};

	render() {
		const { data } = this.props;
		
		return <div className="activity text">{data.content}</div>
	}
}

export default TextActivity;