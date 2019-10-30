// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "#",
					answer: "gotothezoo",
					position: 1,
					orientation: "across",
					startx: 2,
					starty: 2
				},
				{
					clue: "#",
					answer: "goskiing",
					position: 3,
					orientation: "across",
					startx: 19,
					starty: 3
				},
				{
					clue: "#",
					answer: "haveapicnic",
					position: 5,
					orientation: "across",
					startx: 8,
					starty: 5
				},
				{
					clue: "#",
					answer: "goswimming",
					position: 8,
					orientation: "across",
					startx: 8,
					starty: 7
				},
				{
					clue: "#",
					answer: "collectstamps",
					position: 9,
					orientation: "across",
					startx: 2,
					starty: 9
				},
				{
					clue: "#",
					answer: "relaxat",
					position: 10,
					orientation: "across",
					startx: 10,
					starty: 11
				},
				{
					clue: "#",
					answer: "readcomics",
					position: 12,
					orientation: "across",
					startx: 9,
					starty: 13
				},
				{
					clue: "#",
					answer: "study",
					position: 14,
					orientation: "across",
					startx: 10,
					starty: 16
				},
				{
					clue: "#",
					answer: "haveaparty",
					position: 15,
					orientation: "across",
					startx: 2,
					starty: 18
				},
				{
					clue: "#",
					answer: "watchmovies",
					position: 16,
					orientation: "across",
					startx: 3,
					starty: 19
				},
				{
					clue: "#",
					answer: "gocamping",
					position: 18,
					orientation: "across",
					startx: 6,
					starty: 22
				},
				{
					clue: "#",
					answer: "travelbycar",
					position: 19,
					orientation: "across",
					startx: 7,
					starty: 21
				},
			 	
				{
					clue: "#",
					answer: "goto",
					position: 1,
					orientation: "down",
					startx: 2,
					starty: 2
				},
				{
					clue: "#",
					answer: "rideahorse",
					position: 2,
					orientation: "down",
					startx: 23,
					starty: 2
				},
				{
					clue: "#",
					answer: "spendtime",
					position: 4,
					orientation: "down",
					startx: 21,
					starty: 3
				},
				{
					clue: "#",
					answer: "visitfriends",
					position: 6,
					orientation: "down",
					startx: 10,
					starty: 5
				},
				{
					clue: "#",
					answer: "walkthestreet",
					position: 7,
					orientation: "down",
					startx: 5,
					starty: 7
				},
				{
					clue: "#",
					answer: "rideabike",
					position: 11,
					orientation: "down",
					startx: 26,
					starty: 8
				},
				{
					clue: "#",
					answer: "takeaphoto",
					position: 13,
					orientation: "down",
					startx: 7,
					starty: 13
				},
				{
					clue: "#",
					answer: "read",
					position: 17,
					orientation: "down",
					startx: 6,
					starty: 8
				},
				

				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
