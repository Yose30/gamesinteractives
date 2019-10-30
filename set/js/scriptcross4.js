// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "#",
					answer: "playchess",
					position: 1,
					orientation: "across",
					startx: 2,
					starty: 3
				},
				{
					clue: "#",
					answer: "doyoga",
					position: 3,
					orientation: "across",
					startx: 5,
					starty: 7
				},
				{
					clue: "#",
					answer: "goskiing",
					position: 4,
					orientation: "across",
					startx: 14,
					starty: 10
				},
				{
					clue: "#",
					answer: "playrugby",
					position: 7,
					orientation: "across",
					startx: 4,
					starty: 9
				},
				{
					clue: "#",
					answer: "playbasketball",
					position: 9,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "#",
					answer: "playhockey",
					position: 10,
					orientation: "across",
					startx: 2,
					starty: 19
				},
				{
					clue: "#",
					answer: "gorunning",
					position: 12,
					orientation: "across",
					startx: 10,
					starty: 15
				},
				{
					clue: "#",
					answer: "dopilates",
					position: 14,
					orientation: "across",
					startx: 7,
					starty: 6
				},
				{
					clue: "#",
					answer: "playfootball",
					position: 16,
					orientation: "across",
					startx: 7,
					starty: 21
				},
				{
					clue: "#",
					answer: "gocycling",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 13
				},
				
				
			 	

			 	{
					clue: "#",
					answer: "playtennis",
					position: 1,
					orientation: "down",
					startx: 2,
					starty: 3
				},
				{
					clue: "#",
					answer: "dokarate",
					position: 2,
					orientation: "down",
					startx: 6,
					starty: 6
				},
				{
					clue: "#",
					answer: "gosailing",
					position: 5,
					orientation: "down",
					startx: 21,
					starty: 10
				},
				{
					clue: "#",
					answer: "goswimming",
					position: 6,
					orientation: "down",
					startx: 16,
					starty: 8
				},
				{
					clue: "#",
					answer: "playvideogames",
					position: 7,
					orientation: "down",
					startx: 4,
					starty: 9
				},
				{
					clue: "#",
					answer: "gorockclimbing",
					position: 11,
					orientation: "down",
					startx: 18,
					starty: 2
				},
				{
					clue: "#",
					answer: "playvolleyball",
					position: 13,
					orientation: "down",
					startx: 3,
					starty: 2
				},
				{
					clue: "#",
					answer: "playgolf",
					position: 15,
					orientation: "down",
					startx: 13,
					starty: 16
				},
				{
					clue: "#",
					answer: "dogymnastic",
					position: 18,
					orientation: "down",
					startx: 20,
					starty: 5
				},
				{
					clue: "#",
					answer: "gowalking",
					position: 19,
					orientation: "down",
					startx: 1,
					starty: 15
				},
				
				
				

				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
