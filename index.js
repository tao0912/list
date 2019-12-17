jQuery(document).ready(function(){

    axios.get('http://csc225.mockable.io/movies').then(function(response){
        setTimeout(function(){
        // console.log(response.data);
        var moviesHTML= response.data.map(function(movie){
            // console.log(book);
            // return $('<p>')
            // .addClass('book')
            // .data('book',book.id)
            // .html(book.title);

            return '<p class ="movie" data-movie= "'+movie.id+'">'+
            movie.title+'</p >';
        });
        // console.log(booksHTML);
        $('#movies').html(moviesHTML);
        },2000);
    });
    $('#movies').html('<img class= "size" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" class="img" alt="Loading">');
    
    $('body').on('click','.movie',function(){
            // $(this).data('book');
            var id= $(this).data('movie');
            var url='http://csc225.mockable.io/movies/'+id;
            var poster = 'http://csc225.mockable.io/movies/'+id + poster;
              $('#current-movie').html('<img class= "size" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" class="img" alt="Loading">');
            // alert(url);
            axios.get(url).then(function(response){
                // console.log(response);
                var movie=response.data;
                var movieHTML = '<p class ="white">' +movie.title + '</p >';
                movieHTML += '<p class ="white">' +movie.director + '</p >';
                movieHTML += '<p class ="white">' +movie.release + '</p >';
                switch(id){
                    case 1: movieHTML += ' <img class= "size" src="https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" class="img" alt="movie poster">';
                    break;
                    case 2: movieHTML += ' <img class= "size" src="https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._SY741_.jpg" class="img" alt="movie poster">';
                    break;
                    case 3: movieHTML += ' <img class= "size" src="https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" class="img" alt="movie poster">';
                    break;
                    case 4: movieHTML += ' <img class= "size" src="https://upload.wikimedia.org/wikipedia/en/0/06/Metropolisposter.jpg" class="img" alt="movie poster">';
                    break;
                    case 5: movieHTML += ' <img class= "size" src="http://www.gstatic.com/tv/thumb/v22vodart/46611/p46611_v_v8_ab.jpg" class="img" alt="movie poster">';
                    break;
                    case 6: movieHTML += ' <img class= "size" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rear_Window_film_poster.png/440px-Rear_Window_film_poster.png" class="img" alt="movie poster">';
                    break;
                    case 7: movieHTML += ' <img class= "size" src="https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg" class="img" alt="movie poster">';
                    break;
                    case 8: movieHTML += ' <img class= "size" src="https://upload.wikimedia.org/wikipedia/en/4/47/Lost_Higway_%281997%29.png" class="img" alt="movie poster">';
                    break;
                    case 9: movieHTML += ' <img class= "size" src="https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg" class="img" alt="movie poster">';
                    break;
                }
               
                // movieHTML += '<a href="' +movie.poster+'">[Poster]</ a>';
                $('#current-movie').html(movieHTML);
            });
    });// click on the book that's inside the body
    // console.log('i come after the request');
});

// var arrayNumbers = [1,2,3,4,5,6];
// var arraySquared = arrayNumbers.map(function(number){
//     return number*number;
// });

// console.log(arrayNumbers);
// console.log(arraySquared);
