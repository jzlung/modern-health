import React from 'react';

class QuestionActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: Array.from({ length: props.data.options.length }).map(x => false),
		};
	}

	handleOptionSelect = index => {
		this.setState((state, props) => {
			const result = Array.from(state.selected);
			result[index] = !result[index];

			return {
				selected: result,
			};
		}, () => {
			if (this.props.onAction) {
				this.props.onAction({
					answers: this.state.selected,
				});
			}
		});
	};
	
	render() {
		const { data } = this.props;
		
		return (
			<div className="activity text">
				{data.prompt}
				<div className="question-activity__options">
					{data.options.map((option, index) => {
						const id = `option-${index}`;
						let className = "question-activity__option";
						if (this.state.selected[index]) {
							className += " selected"
						}

						return (
							<button 
								className={className}
								key={id} 
								onClick={() => this.handleOptionSelect(index)}
							>
								{option}
							</button>
						);
					})}
				</div>
			</div>
		);
	}
}

export default QuestionActivity;