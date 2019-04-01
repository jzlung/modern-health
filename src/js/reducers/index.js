import { LOG_ACTIVITY } from "../constants/action-types";

/*
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
		return Object.assign({}, state, {
			// userActivity: Object.assign({}, state.activities[action.payload['key']][action.payload['index']] = true),
		});
	}

  return state;
};

export default rootReducer;