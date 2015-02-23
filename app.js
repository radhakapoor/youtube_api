$(document).ready(function() {
	$('#search-form').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();	
		getRequest(searchTerm);	    
	});    
});

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key:'AIzaSyDUs1q_FIIxRjVXeHjoSsSZOgnhrMNph7s',
		q: searchTerm,
		r: 'json'
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
}

function showResults(results){
	var html ="";
	$.each(results, function(index, value){
		html += '<p>' + "<a href='https://www.youtube.com/watch?v=" + value.id.videoId + 'target="_blank"><img src=' + value.snippet.thumbnails.default.url + '></p>';
		console.log(value.snippet.title);
	});
	$('#search-results').html(html);
}