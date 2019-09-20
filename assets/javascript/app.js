$("#search-button").on("click", function () {
    var apiKey = "&api_key=L1WjOIVP0GXxib9Lxv6ExK9hleZzFGtL&limit=5";
    var searchResults = $("#search-bar").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchResults + apiKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var results = response.data;

            // forloop created to run thru each gif, grab the image, and put on html
            for (var i = 0; i < results.length; i++) {
                var imageDiv = $("<div>");
                var newImages = $("<img>");
                newImages.attr("src", results[i].images.original.url);
                imageDiv.append(newImages);
                $("#gif-div").prepend(imageDiv);
            }
        });
    // get searchResults and create a button in the "#tabs" div
   
    var gifTabs = $("<button>");

        gifTabs.attr("id", searchResults);

        gifTabs.addClass("search-tags")

        gifTabs.text(searchResults);

        $("#tabs").prepend(gifTabs);

        $("#search-bar").val("");


});

$("#searchResults").on('click', function(){


})