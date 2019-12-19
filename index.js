jQuery(document).ready(function(){

    axios.get('http://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22').then(function(response){
        setTimeout(function(){
        // console.log(response.data);
        var weatherHTML= response.data.map(function(weather){
            // console.log(book);
            // return $('<p>')
            // .addClass('book')
            // .data('book',book.id)o
            // .html(book.title);

            return '<p class ="" data-weather= "'+weather.id+'">'+
            weather.name+'</p >';
        });
        // console.log(booksHTML);
        $('#post').html(weatherHTML);
        },2000);
    });
    $('#weather').html('<img class= "size" src="https://unsplash.com/photos/UuGGxuBfYic" class="img" alt="Loading">');
    
    // $('body').on('click','.weather',function(){
    //         var id= $(this).data('weather');
    //         var url='http://csc225.mockable.io/movies/'+id;
    //         var poster = 'http://csc225.mockable.io/movies/'+id + poster;
    //           $('#current-movie').html('<img class= "size" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" class="img" alt="Loading">');
    //         // alert(url);
            
    // });// click on the book that's inside the body
    // // console.log('i come after the request');
});
