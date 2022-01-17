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
					"Greases, fats, and oils",
					"Bread"
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
		var column = $('<div class="column"></div>');
		// Build the category card
		var card = $('<div id="card-' + i + '" class="card" data-caption="' + CATEGORIES[i] + '">' + CATEGORIES[i] + '<br></div>');
		var link = $('<a hidden href="#">Search on <img src="https://www.pinterest.com/favicon.ico"/> Pinterest</a>')
		link.bind('click', searchPinterest);
		$('<span class="actions"></span>')
			.append(link)
			.appendTo(card);
		card
			.bind('mouseenter', function(e) {
				el = $(e.target).find('a')
					.slideDown();
			})
			.bind('mouseleave', function(e) {
				el = $(e.target).find('a')
					.slideUp();
			});
		card.appendTo(column);
		column.appendTo(row);
	}
	suggest();
}

function suggest() {
	// Deactivate the previously active card, if any
	$('.active').removeClass('active');

	// Activate a random one by number
	$('#card-' + Math.floor(CATEGORIES.length * Math.random())).addClass('active');
}

function searchPinterest(e) {
	//Reverse engineered url to search own pins on Pinterest
	const BASE_URL = 'https://www.pinterest.com/search/my_pins/?q=';
	
	// Get surrounding card element
	var el = $(e.target).closest('.card');
	var searchterm = el.attr('data-caption') + ' recipes';
	
	window.open(BASE_URL + encodeURIComponent(searchterm));
}

$(document).ready(init);