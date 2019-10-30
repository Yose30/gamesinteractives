// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(card, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.binding();
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 800);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 2000);
		},

		showModal: function(){
            swal("Congratulations!", "Have answered correctly", "success");
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="images/majesticcarta.jpg"\
				alt="Majestic" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var card = [
		
	]
	var cards = [
		{
			name: "Egipto Flag",
			img: "images/memo4/living.jpg",
			id: 1
		},
		{
			name: "Egipto",
			img: "images/memo4/living2.jpg",
			id: 1
		},
		{
			name: "China Flag",
			img: "images/memo4/bedroom.jpg",
			id: 2
		},
		{
			name: "China",
			img: "images/memo4/bedroom2.jpg",
			id: 2
		}, 
		{
			name: "Mexico Flag",
			img: "images/memo4/garage.jpg",
			id: 3
		},
		{
			name: "Mexico",
			img: "images/memo4/garage2.jpg",
			id: 3
		},
		{
			name: "Turkey 1",
			img: "images/memo4/sofa.jpg",
			id: 4
		},
		{
			name: "Turkey",
			img: "images/memo4/sofa2.jpg",
			id: 4
		},
		{
			name: "#",
			img: "images/memo4/washing.jpg",
			id: 5
		},
		{
			name: "#",
			img: "images/memo4/washing2.jpg",
			id: 5
		},
		{
			name: "Russia Flag",
			img: "images/memo4/bathroom.jpg",
			id: 6
		},
		{
			name: "Russia",
			img:"images/memo4/bathroom2.jpg",
			id: 6
		},
		{
			name: "Draw / Drew",
			img: "images/memo4/garden.jpg",
			id: 7
		},
		{
			name: "Draw / Drew",
			img:"images/memo4/garden2.jpg",
			id: 7
		},
		{
			name: "Drive / Drove",
			img: "images/memo4/bed.jpg",
			id: 8
		},
		{
			name: "Drive / Drove",
			img:"images/memo4/bed2.jpg",
			id: 8
		},
		{
			name: "Drive / Drove",
			img: "images/memo4/book.jpg",
			id: 9
		},
		{
			name: "Drive / Drove",
			img:"images/memo4/book2.jpg",
			id: 9
		},
		{
			name: "Drive / Drove",
			img: "images/memo4/cooker.jpg",
			id: 10
		},
		{
			name: "Drive / Drove",
			img:"images/memo4/cooker2.jpg",
			id: 10
		},
		{
			name: "Drive / Drove",
			img: "images/memo4/office.jpg",
			id: 11
		},
		{
			name: "Drive / Drove",
			img:"images/memo4/office2.jpg",
			id: 11
		},
		{
			name: "Drive / Drove",
			img: "images/memo4/dining.jpg",
			id: 12
		},
		{
			name: "Drive / Drove",
			img:"images/memo4/dining2.jpg",
			id: 12
		},
		{
			name: "Drive / Drove",
			img: "images/memo4/wardrobe.jpg",
			id: 13
		},
		{
			name: "Drive / Drove",
			img:"images/memo4/wardrobe2.jpg",
			id: 13
		},
		{
			name: "Italy flag",
			img: "images/memo4/microwave.jpg",
			id: 14
		},
		{
			name: "Italy ",
			img:"images/memo4/microwave2.jpg",
			id: 14
		},
		{
			name: "Spain Flag",
			img: "images/memo4/window.jpg",
			id: 14
		},
		{
			name: "Spain",
			img:"images/memo4/window2.jpg",
			id: 14
		},
	];
    
	Memory.init(cards, card);


})();