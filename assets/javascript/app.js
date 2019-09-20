$("#search-button").on("click", function () {
    var apiKey = "&api_key=L1WjOIVP0GXxib9Lxv6ExK9hleZzFGtL&limit=5&rating=g";
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
                var imageDiv = $("<div class='div-tags'>");
                var newImages = $("<img>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                newImages.attr("src", results[i].images.original.url);
                imageDiv.append(p);
                imageDiv.append(newImages);
                $("#gif-div").prepend(imageDiv);
                console.log(results);
            }
        });
    // get searchResults and create a button in the "#tabs" div
   
    var gifTabs = $("<button>");

        gifTabs.attr("id", searchResults);

        gifTabs.addClass("search-tags");

        gifTabs.text(searchResults);

        $("#tabs").prepend(gifTabs);

        $("#search-bar").val("");


});

$("#searchResults").on('click', function(){


})

// ended up setting up too many things the wrong way in order to use them properly later on. 
// (i.e. using "ids" or forms and input fields). was unable to get gifs to display as a static
// image and making them clickable. as well as not being able to make the created buttons usable. 