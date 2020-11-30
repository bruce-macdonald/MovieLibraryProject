(function ($) {
    let movieArray = [];
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
                <img class = 'card-img-top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1280px-SNice.svg.png'alt = 'smiley face'>
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
                        <img class = 'card-img-top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1280px-SNice.svg.png'alt = 'smiley face'>
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
                            <input type="text" name="title" id='title-${movie.movieId}' placeholder="${movie.title}" />
                            <br>
                            <label for='${movie.director}Input' class='mt-2'>Director</label>
                            <input type="text" name="director" id='director-${movie.movieId}' placeholder="${movie.director}" />
                            <br>
                            <label for='${movie.genre}Input' class='mt-2'>Genre</label>
                            <input type="text" name="genre" id='genre-${movie.movieId}' placeholder="${movie.genre}" />

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



    function editMovieDetails(id) {
        var title = $('#title-'+ id ).value();
        console.log(title);
        var dict = {
            Title: $('#title-'+id),
            Director: data.director,
            Genre: data.genre
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie', 
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function (data, textStatus, jQxhr) {

            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

        e.preventDefault();
    }


}
)(jQuery);
