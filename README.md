# Jerry Lung <-> Modern Health Coding Challenge

Hey Modern Health team! 
Run with `npm start`

## Built With
- create-react-app
- React -- great for mapping data to UI
- React Router -- being that this is a single page app with no server, I needed some way to interface with browser history (so Back and Forward work)
- Redux -- helps maintain a global userActivity state that can be set and read from any component

## Interaction
* Answering a question activity marks it as done, whereas simply visiting a text activity does so.
* A section is marked complete (green checkmark in the main menu) when all of its activities are done.
* Answers to a question activity are saved.
* State persisted to localStorage.

## Improvements Needed
* I skipped on Typescript to save time, but that would have been preferred.
* Testing -- everything should be unit tested and unfortunately I skipped on this due to time. But each component has been broken down so they should be easier to test. 
* As is, this tool assumes that the content will not change often, which would affect the user state. Ideal scenario would be to add id's to every data piece (e.g. activities) and use that in the userActivity state, which would be more future proof. 
* In hindsight, for the userActivity state, simply saving the whole url as the key instead of a complex nested structure mirroring the data may have been easier...
* More thorough documentation.
* Accessibility: right now, keyboard nav is not great, and I've missed other a11y details. 
* More fleshed out UI, like a side nav showing where you are, maybe a Home link between Back and Continue whilst traversing sections
* Support more activity types, or different type of activities
* While I've tried to make it as responsive as possible, some CSS values are hardcoded.