import { LOG_ACTIVITY } from "../constants/action-types";

/*
Data Format:

userActivity: {
	
	// Programs
	"1": {
		// Sections
			{
				name: "Mindfulness",

				// Activities
				activities: [
					true,
					false,
					[false, true, false],
				],
			}
	},

	"2": {
		...
	 },
}

*/

const initialState = {
  userActivity: {},
};

function rootReducer(state = initialState, action) {
	if (action.type === LOG_ACTIVITY) {

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

		return Object.assign({}, state, {
			userActivity: result,
		});
	}

  return state;
};

export default rootReducer;