import React from 'react';
import { Link } from "react-router-dom";

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
			window.location.href = "/";
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
			window.location.href = "/";
			return;
		}

		this.setState((state, props) => {
			return {
				currentIndex: state.currentIndex + 1,
			}
		});
	}

	render() {
		/*
			<Section data={this.props.data[this.state.currentIndex]} />
					<button onClick={this.handleBackClick}>Back</button>
					<button onClick={this.handleContinueClick}>Continue</button>
		*/
		
		const index = parseInt(this.props.match.params.index || 0, 10);

		const backLink = index === 0
			? "/"
			: `/${this.props.match.params.section}/${index - 1}`;

		const continueLink = index === this.props.data.length - 1
			? "/"
			: `/${this.props.match.params.section}/${index + 1}`;

		return (
			<div className="section-view">

				<Section {...this.props} data={this.props.data[index]} />

				<footer>
					<Link to={backLink}>Back</Link>
					<Link to={continueLink}>Continue</Link>
				</footer>

			</div>
		);
	}

}

export default SectionViewer;
