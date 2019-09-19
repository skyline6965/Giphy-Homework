$("#search-button").on("click", function () {
    var apiKey = "&api_key=L1WjOIVP0GXxib9Lxv6ExK9hleZzFGtL&limit=5";
    
    var searchResults = $("#search-bar").val();
    // get values from search bar
    console.log(searchResults);

    // problem is, when i press the search button, its not getting the value of
    // what the user entered in time before the function gets ran.
    
                                                        // searchResults
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchResults + apiKey;

     
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            
            // console.log(response);
            var results = response.data;
            console.log(results);

            // forloop created to run thru each gif, grab the image, and put on html
            for (var i = 0; i < results.length; i++) {
            

                // creating and storing div tag for images
                var imageDiv = $("<div>");

                // creating and storing img tag 
                var newImages = $("<img>")

                // set the src attr of the image
                newImages.attr("src", results[i].images.original.url);

                // appending img tag to imageCache
                imageDiv.append(newImages);

                // imageCache.attr("src", imageURL);
                // imageCache.attr("alt", "...")

                $("#gif-div").prepend(imageDiv);

            }
        });


});