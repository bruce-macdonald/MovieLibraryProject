(function ($) {
    getMovieList();
    function processForm(e) {
        var dict = {
            Title: this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function (data, textStatus, jQxhr) {
                $('#response pre').html("Movie successfully added - Title: " + data.title + " - Director: " + data.director + " - Genre: " + data.genre);
                $(`#movieCards`).prepend(`<div class = 'card' style = 'width: 18rem;'>
                <img class = 'card-img-top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1280px-SNice.svg.png'alt = 'smiley face'>
                <div class = 'card-body'> <h5 class = 'card-title'>${data.title}</h5>
                <p class= 'card-text'>ABC</p>
                <a href='#' class='btn btn-primary'>Go somewhere</a>
                </div>
                </div>`
                )
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit(processForm);

    function getMovieList() {
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            success: function (data, textStatus, jQxhr) {
                data.forEach(movie => {
                    $(`#movieCards`).prepend(`<div class = 'card' style = 'width: 18rem;'><img class = 'card-img-top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1280px-SNice.svg.png'alt = 'smiley face'><div class = 'card-body'> <h5 class = 'card-title'>${movie.title}</h5> <p class= 'card-text'>ABC</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>`)

                });
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

        // e.preventDefault();
    }

}
)(jQuery);

// (function($){



// }
// )(jQuery);