<script src="https://code.jquery.com/jquery-3.4.1.js"
			  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
			  crossorigin="anonymous"></script>


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;
var APIKey = "LhGQy3wkxj7s4h6ipUMbNy1R8s8GG9N1";

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    
  });
