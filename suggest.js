const COLUMNS = 4;

const CATEGORIES = [ 
					"Horsemeat", 
					"Vegan gluten-free hypoallergenic snowflakefood",
					"Mud- and dirt-based foods",
					"Nutritional Vapors",
					"Downloadable internet foods",
					"Non-grainy cereals",
					"No-fun foods",
					"Recycled stuff",
					"Mushes and pastes",
					"Greases, fats, and oils"
				];


function init() {
	const CONTENT_PANE = $('#content-pane');

	var row;
	for (i = 0; i < CATEGORIES.length; i++) {
		// Start a new row if appropriate
		if (i % COLUMNS === 0) {
			// Create a DOM element for the row with jQuery
			row = $('<div class="row"></row>');
			// Append the new row to the content pane
			row.appendTo(CONTENT_PANE);
		}
		// Append the current category to the row
		row.append(
			'<div class="column"><div id="card-' + i + '" class="card fade">' + CATEGORIES[i] + '</div></div>');
	}
	suggest();
}

function suggest() {
	// Deactivate the previously active card, if any
	$('.active').removeClass('active');

	// Activate a random one by number
	$('#card-' + Math.floor(CATEGORIES.length * Math.random())).addClass('active');
}

$(document).ready(init);