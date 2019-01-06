import proxify from 'proxify-url';

const GOODREADS_API_KEY = "UlcDZNPWmjXE6iqtr7M7VQ";
const GOODREADS_USER_ID = "9875935";

$(document).ready(() => {
    $("a").hover(function(event) {
        var hue = Math.floor(Math.random() * 360);
        var pastel = 'hsl(' + hue + ', 100%, 70%)';
        $(this).css({"color": pastel});
        console.log(this);
    }, function() {
        $(this).removeAttr('style');
    });

    const proxyUrl = proxify(
        `https://www.goodreads.com/review/list.xml?key=${GOODREADS_API_KEY}&id=${GOODREADS_USER_ID}&shelf=currently-reading`,
        { inputFormat: 'xml' }
    );
        
    fetch(proxyUrl)
    .then((result) => {
        return result.json();
    })
    .then((json) => {
        const books = json.query.results.GoodreadsResponse.books.book;
        if (books.length) {
            books.forEach((book) => {
                $("<a>", {
                    text: book.title,
                    href: book.link,
                    style: "padding-right: 1%;"
                }).appendTo(".books");
            });    
        } else {
            $("<a>", {
                text: books.title,
                href: books.link,
                style: "padding-right: 1%;"
            }).appendTo(".books");
        }
    })
});
