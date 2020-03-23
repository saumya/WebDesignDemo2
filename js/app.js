// 
// version: 1.0.0
//
$.ready(function(){
	console.log('ready!');

	var dealDate = 'Mar 22 2020';
	 
	//
	

	var count = function(){
		var fDate = new Date(dealDate);
		var nDate = new Date();

		var daysLeft = fDate.getDate() - nDate.getDate();
		var hoursLeft = 24 - nDate.getHours();
		var minsLeft = 60 - nDate.getMinutes();
		var secsLeft = 60 - nDate.getSeconds();
		//console.log( daysLeft , hoursLeft , minsLeft , secsLeft );
		// reseting the date
		if(daysLeft<0){
			daysLeft = 2;
		}
		//
		$('#counter_day').html( daysLeft );
		$('#counter_hour').html( hoursLeft );
		$('#counter_min').html( minsLeft );
		$('#counter_sec').html( secsLeft );
	}

	setInterval(count, 1000);
	//
}());// end jQuery ready()