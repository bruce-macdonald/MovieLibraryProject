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
                            <form id="${movie.movieId}-form">
                            <input type="text" name="title" placeholder="${movie.title}" />
                            <input type="text" name="director" placeholder="${movie.director}" />
                            <input type="text" name="genre" placeholder="${movie.genre}" />

                            <button type="submit">Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
                    `)

                });
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

    }



    function getMovieDetails() {
        $.ajax({

        })
    }

}
)(jQuery);
