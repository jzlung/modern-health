import { LOG_ACTIVITY } from "../constants/action-types";

/*
TODO: write down data format

userActivity: {
	
	// Programs
	"1": {
		// Sections
		sections: [
			// Section
			{
				name: "Mindfulness",

				// Activities
				activities: [
					// Activity
					{
						type: "Text",
						state: "Complete",
					},
					{
						type: "Question",
						state: "Complete",
					},
					{
						type: "Question",
						state: "Incomplete",
					},
				],
			}
		],
	},

	"2": {
	
	,}
}


*/

const initialState = {
  userActivity: {},
};

function rootReducer(state = initialState, action) {
	if (action.type === LOG_ACTIVITY) {
		console.log(action);

		const result = Object.assign({}, state.userActivity);
		const { programId, sectionName, activityIndex, extra } = action.payload;
		// More advanced usages we'd probably want an object with more fields than a simple boolean
		const value = extra || true;

		if (!result.hasOwnProperty(programId)) {
			result[programId] = {
				[sectionName]: [],
			};
			result[programId][sectionName][activityIndex] = value;
		}
		else {
			const program = result[programId];
			if (!program.hasOwnProperty(sectionName)) {
				program[sectionName] = [];
			}
			program[sectionName][activityIndex] = value;
		}

		console.log(result);

		return Object.assign({}, state, {
			userActivity: result,
		});
	}

  return state;
};

export default rootReducer;