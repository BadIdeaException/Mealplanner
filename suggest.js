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

	for (category of CATEGORIES) {
		// Build the category card
		let card = $('<div class="card" data-caption="' + category + '">' + category + '</div>');

		let actionPane = $('<div class="actions"></div>');
		card.append(actionPane);
		[ 
			{ name: 'Pinterest', icon: 'https://www.pinterest.com/favicon.ico', baseURL: 'https://www.pinterest.com/search/my_pins/?q=', suffix: ' recipes' },
			{ name: 'Damn Delicious', icon: 'https://s23209.pcdn.co/wp-content/themes/damndelicious2021/favicon/favicon-32x32.png', baseURL: 'https://damndelicious.net/?s=', suffix: '' },
			{ name: 'Half Baked Harvest', icon: 'https://www.halfbakedharvest.com/wp-content/uploads/2021/10/cropped-favicon-32x32.png', baseURL: 'https://www.halfbakedharvest.com/?s=', suffix: '' }
		].forEach(action => {
			let link = $('<a href="#">Search on <img src="' + action.icon + '"/> ' + action.name + '</a>');
			link.bind('click', function search(e) {			
				console.log($(e.target).closest('.card'));
				window.open(
					action.baseURL + 
					encodeURIComponent($(e.target).closest('.card').attr('data-caption') + 
					action.suffix)
				);
			});
			actionPane.append(link);
		});
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

$(document).ready(init);