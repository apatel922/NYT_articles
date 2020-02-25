
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=LhGQy3wkxj7s4h6ipUMbNy1R8s8GG9N1";

var userQuerry = "election";

console.log(queryURL);
console.log($(".lead"));

$(document).ready(function () {
    console.log("hey");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var headline = response.docs[i]
    });
});
