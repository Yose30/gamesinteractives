// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "My parents want to ________ a car. The other is old.",
					answer: "buy",
					position: 1,
					orientation: "across",
					startx: 9,
					starty: 3
				},
			 	{
					clue: "Students ________, please!",
					answer: "sitdown",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 4
				},
				{
					clue: "Every morning I ________ the dog in the park.",
					answer: "walk",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "I am with the doctor, I ________ bad.",
					answer: "feel",
					position: 5,
					orientation: "across",
					startx: 11,
					starty: 7
				},
				{
					clue: "In the parties I want to ________ salsa and pop music.",
					answer: "dance",
					position: 7,
					orientation: "across",	
					startx: 2,
					starty: 8
				},
				{
					clue: "Every Sunday my family and I ________ out in a restaurant.",
					answer: "eat",
					position: 8,
					orientation: "across",
					startx: 12,
					starty: 12
				},
				{
					clue: "My friends are from France so they ________ French.",
					answer: "speak",
					position: 9,
					orientation: "across",
					startx: 13,
					starty: 6
				},
				{
					clue: "All my family ________ my mother to clean the house on Sunday.",
					answer: "help",
					position: 12,
					orientation: "across",
					startx: 11,
					starty: 15
				},
				{
					clue: "I don’t like texting, I prefer to ________ my friends.",
					answer: "call",
					position: 13,
					orientation: "across",
					startx: 12,
					starty: 4
				},
				{
					clue: "After school I ________ my friends in the park.",
					answer: "meet",
					position: 16,
					orientation: "across",
					startx: 3,
					starty: 14
				},
				{
					clue: "At night my brothers ________ the dinner for all my family.",
					answer: "make",
					position: 17,
					orientation: "across",
					startx: 1,
					starty: 16
				},
				{
					clue: "The football teams ________ exercise during the afternoon.",
					answer: "do",
					position: 18,
					orientation: "across",
					startx: 5,
					starty: 5
				},
				{
					clue: "I like music. I sometimes ________ a song.",
					answer: "sing",
					position: 19,
					orientation: "across",
					startx: 3,
					starty: 12
				},
				{
					clue: "To participate in the class you need to ________ your hand.",
					answer: "raise",
					position: 1,
					orientation: "down",
					startx: 13,
					starty: 3
				},
				{
					clue: "We ________ to go to the auditorium.",
					answer: "standup",
					position: 3,
					orientation: "down",
					startx: 2,
					starty: 4
				},
				{
					clue: "My best friend and I ________ a motorbike.",
					answer: "ride",
					position: 6,
					orientation: "down",
					startx: 4,
					starty: 11
				},
				{
					clue: "It is difficult to ________ fish.",
					answer: "cook",
					position: 10,
					orientation: "down",
					startx: 6,
					starty: 3
				},
				{
					clue: "My partners prefer to ________ by bus.",
					answer: "travel",
					position: 11,
					orientation: "down",
					startx: 13,
					starty: 10
				},
				{
					clue: "I need to ________ a cake, it’s my boyfriend’s birthday.",
					answer: "make",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 14
				},
				{
					clue: "Every morning I ________ milk before to go to school.",
					answer: "drink",
					position: 15,
					orientation: "down",
					startx: 17,
					starty: 2
				},

				
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
