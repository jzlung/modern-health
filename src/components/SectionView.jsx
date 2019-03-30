import React from 'react';
import Section from './Section.jsx';

class SectionViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: defaultProps instead
			currentIndex: props.index || 0,
		}
	}

	handleBackClick = () =>  {
		// Check index 0 and use callback
		if (this.state.currentIndex === 0) {
			this.props.onReturn();
			return;
		}

		this.setState((state, props) => {
			return {
				currentIndex: state.currentIndex - 1,
			}
		});
	}

	handleContinueClick = () => {
		// Check index length and use callback
		if (this.state.currentIndex === this.props.data.length - 1) {
			this.props.onReturn();
			return;
		}

		this.setState((state, props) => {
			return {
				currentIndex: state.currentIndex + 1,
			}
		});
	}

	render() {
		return (
			<div className="section-view">

				<Section data={this.props.data[this.state.currentIndex]} />

				<footer>
					<button onClick={this.handleBackClick}>Back</button>
					<button onClick={this.handleContinueClick}>Continue</button>
				</footer>

			</div>
		);
	}

}

export default SectionViewer;
