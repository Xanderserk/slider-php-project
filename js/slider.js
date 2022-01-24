$(document).ready(function() {
    const slideCount = $('#article-slider-items').children().length;
    let itemWidth = document.getElementsByClassName('section-7-front-page__article-slider-item')[0].clientWidth;
    let slidePosition = 4;
    let leftPosition = 0;

    $('#btn-next').on('click', function() {
        if (slidePosition >= slideCount) {
            leftPosition = ((slideCount - 4) * -itemWidth);
            $('#article-slider-items').css({
                'transform': `translate(${leftPosition}px, 0)`,
                '-webkit-transform': `translate(${leftPosition}px, 0)`,
                '-ms-transform': `translate(${leftPosition}px, 0)`,
            });
        } else {
            leftPosition = leftPosition - itemWidth;
            $('#article-slider-items').css({
                'transform': `translate(${leftPosition}px, 0)`,
                '-webkit-transform': `translate(${leftPosition}px, 0)`,
                '-ms-transform': `translate(${leftPosition}px, 0)`,
            });
            slidePosition++;
        }
    });

    $('#btn-prev').on('click', function() {
        if (slidePosition <= 4) {
            leftPosition = 0;
            $('#article-slider-items').css({
                'transform': `translate(${leftPosition}px, 0)`,
                '-webkit-transform': `translate(${leftPosition}px, 0)`,
                '-ms-transform': `translate(${leftPosition}px, 0)`,
            });
        } else {
            leftPosition = leftPosition + itemWidth;
            $('#article-slider-items').css({
                'transform': `translate(${leftPosition}px, 0)`,
                '-webkit-transform': `translate(${leftPosition}px, 0)`,
                '-ms-transform': `translate(${leftPosition}px, 0)`,
            });
            slidePosition--;
        }
    });
});