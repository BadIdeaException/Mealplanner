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

	for (i = 0; i < CATEGORIES.length; i++) {
		// Build the category card
		var card = $('<div id="card-' + i + '" class="card" data-caption="' + CATEGORIES[i] + '">' + CATEGORIES[i] + '</div>');

		var link = $('<a href="#">Search on <img src="https://www.pinterest.com/favicon.ico"/> Pinterest</a>')
		link.bind('click', searchPinterest);
		$('<div class="actions"></div>')
			.append(link)
			.appendTo(card);
		card.appendTo(CONTENT_PANE);
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