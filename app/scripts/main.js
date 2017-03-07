$(function(){
	$.ajax({
		url: 'https://free-api.heweather.com/v5/now?key=4f29a6d59fe14939a7c48cbce64190ca&city=beijing',
		type: 'get',
		dataType: 'json',
		success: function(data){
			var cond = data.HeWeather5[0].now.cond.txt;
			var tmp = data.HeWeather5[0].now.tmp;
			var txt1 = $('<span></span>');
			var txt2 = $('<span></span>');
			txt1.text(cond + ' ').appendTo($('.weather'));
			txt2.text(tmp + '℃').appendTo($('.weather'));

		}
	})


});
