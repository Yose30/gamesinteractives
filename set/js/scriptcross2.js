// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "#",
					answer: "goto",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 4
				},
				{
					clue: "#",
					answer: "start",
					position: 2,
					orientation: "across",
					startx: 14,
					starty: 9
				},
				{
					clue: "#",
					answer: "wash",
					position: 4,
					orientation: "across",
					startx: 11,
					starty: 10
				},
				{
					clue: "#",
					answer: "goto",
					position: 6,
					orientation: "across",
					startx: 8,
					starty: 17
				},
				{
					clue: "#",
					answer: "have",
					position: 8,
					orientation: "across",	
					startx: 4,
					starty: 9
				},
				{
					clue: "#",
					answer: "get",
					position: 10,
					orientation: "across",
					startx: 9,
					starty: 13
				},
				{
					clue: "#",
					answer: "leave",
					position: 12,
					orientation: "across",
					startx: 3,
					starty: 12
				},
				{
					clue: "#",
					answer: "getup",
					position: 14,
					orientation: "across",
					startx: 8,
					starty: 19
				},
				{
					clue: "#",
					answer: "listen",
					position: 15,
					orientation: "across",
					startx: 9,
					starty: 7
				},
				{
					clue: "#",
					answer: "go",
					position: 16,
					orientation: "across",
					startx: 3,
					starty: 7
				},
				{
					clue: "#",
					answer: "wakeup",
					position: 17,
					orientation: "across",
					startx: 3,
					starty: 10
				},
				{
					clue: "#",
					answer: "read",
					position: 18,
					orientation: "across",
					startx: 8,
					starty: 14
				},
			 	
				{
					clue: "#",
					answer: "goto",
					position: 1,
					orientation: "down",
					startx: 4,
					starty: 4
				},
				{
					clue: "#",
					answer: "finish",
					position: 3,
					orientation: "down",
					startx: 14,
					starty: 5
				},
				{
					clue: "#",
					answer: "do",
					position: 5,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "#",
					answer: "watch",
					position: 7,
					orientation: "down",
					startx: 16,
					starty: 8
				},
				{
					clue: "#",
					answer: "take",
					position: 9,
					orientation: "down",
					startx: 18,
					starty: 9
				},
				{
					clue: "#",
					answer: "have",
					position: 11,
					orientation: "down",
					startx: 4,
					starty: 9
				},
				{
					clue: "#",
					answer: "gethome",
					position: 13,
					orientation: "down",
					startx: 9,
					starty: 13
				},

				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
