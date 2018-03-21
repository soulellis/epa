var Site = {};


Site.timeOfDay = function(cycleAmount){


	var allTitles = contents.titles, 
			titleAmount = allTitles.length;
	var totalSeconds = 86400;
	var timePerItem = totalSeconds/(titleAmount * cycleAmount);


	setInterval(function(){

		var offset = new Date().getTimezoneOffset(),
				offsetSeconds = offset*60,
				dt = new Date(),
	 			currentSeconds = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours()) + offsetSeconds,
				dayProgress= currentSeconds/totalSeconds,
				currentItemTotalNumber = Math.floor(currentSeconds/timePerItem),
				currentCycle = Math.floor(currentItemTotalNumber/titleAmount),
				currentItem = currentItemTotalNumber - currentCycle*titleAmount,
				currentInstance = Math.floor(dayProgress * titleAmount);

		//console.log("currentInstance " + currentSeconds, allTitles[currentItem].title)


		$(".main").children("h1").remove()

		$(".main").append("<h1>" + allTitles[currentItem].title + "<br><a target='_blank' href='" + allTitles[currentItem].url + "'>" + allTitles[currentItem].url + "</a></h1>")
			//TweenMax.to($("h1"), 1, {opacity: 1, ease: Power4.easeInOut, delay: 0.5})

		$(".counter").text(currentItem)
		$(".full").text("/" + titleAmount)

		$("title").text(currentItem + "/" + titleAmount)

		var utc = dt.toUTCString().replace("GMT", "UTC")

		$(".currentTime").text(utc)


	}, 1000)
}



$(document).ready(function(){

	console.log("Bulletin #1: Steve, Harvey, and Matt \n archive.work \n Paul Soulellis \n Site by Lukas Eigler-Harding")
	var cycleAmount = 10;
	Site.timeOfDay(cycleAmount);
})

