let movieArray = [];
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
                $(`#movieCards`).prepend(`<div class = 'card' style = 'width: 14rem;'>
                <img class = 'card-img-top' src='${data.movieImage}' alt = 'movie poster'>
                <div class = 'card-body'> <h5 class = 'card-title'>${data.title}</h5>
                <a href='#' class='btn btn-primary' id='${data.movieId}-button'>Details / Edit</a>
                <p class= 'card-text'>ABC</p>
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
                    $(`#movieCards`).prepend(`
                    <div class = 'card m-2' style = 'width: 14rem;'>
                        <img class = 'card-img-top' src='${movie.movieImage}' alt = 'movieposter'>
                            <div class = 'card-body'>
                            <h5 class = 'card-title'>${movie.title}</h5>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>Director: ${movie.director}</li>
                                <li class='list-group-item'>Genre: ${movie.genre}</li>
                            </ul>
                            <a href='#${movie.movieId}Collapse' class='btn btn-primary mt-2' data-toggle='collapse' aria-expanded='false' aria-controls='collapseExample' role='button' id='${movie.movieId}-button'>Edit</a>
                            
                            <div id='${movie.movieId}Collapse' class='collapse'>
                            
                            <div class='form-group mt-3'>
                            <label for='${movie.title}Input'>Movie Title</label>
                            <input type="text" name="title" id='title-${movie.movieId}' value="${movie.title}" />
                            <br>
                            <label for='${movie.director}Input' class='mt-2'>Director</label>
                            <input type="text" name="director" id='director-${movie.movieId}' value="${movie.director}" />
                            <br>
                            <label for='${movie.genre}Input' class='mt-2'>Genre</label>
                            <input type="text" name="genre" id='genre-${movie.movieId}' value="${movie.genre}" />

                            <button onclick='editMovieDetails(${movie.movieId})'  class='btn btn-danger mt-3'>Confirm Change</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    `)
                    
                });
            movieArray = data;
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

    }

}
)(jQuery);


function editMovieDetails(id) {

    var dict = {
        MovieId: id,
        Title: $('#title-'+id).val(),
        Director: $('#director-'+id).val(),
        Genre: $('#genre-'+id).val()
    };
    var putUrl = 'https://localhost:44325/api/movie/';
    console.log(dict);
    console.log(JSON.stringify(dict));

    $.ajax({
        url: putUrl, 
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function (data, textStatus, jQxhr) {
            location.reload();

        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

}