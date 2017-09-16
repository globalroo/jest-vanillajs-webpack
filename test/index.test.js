// Attempt to use Jest to test Vanilla HTML / Javascript

// Webpack is translating the exports in the index.js and creating bundle.js
// file to enable browsers to understand JS modules export keyword
// This allows us to import / require the module here.

// Read in the static HTML
const indexHTML = require("fs").readFileSync("static/index.html").toString();

// Setup the local jsdom
const jestDOM = document.documentElement;
jestDOM.innerHTML = indexHTML;

// Import the javascript
const indexJS = require("src/index");

describe("Test the initial state of the page", () => {
	test("Page description DIV is 'This is a static HTML page with an unclicked button'", () => {
		expect(indexJS.description.innerHTML).toBe("This is a static HTML page with an unclicked button");
	});
	test("Page button label is 'This is a clickable button'", () => {
		expect(indexJS.button.innerHTML).toBe("This is a clickable button");
	});
});

describe("Unit test event handlers", () => {
	test("Clicking the button once changes the button label to 'clicked'", () => {
		indexJS.buttonClicked();
		expect(indexJS.button.innerHTML).toBe("clicked");
	});
});

describe("Use snapshots to compare expected DOM structure", () => {
	test("Clicking the description changes the content and matches the stored snapshot", () => {
		indexJS.descriptionUpdated();
		expect(indexJS.description.innerHTML).toMatchSnapshot();
	});
});
