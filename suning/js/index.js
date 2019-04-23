$(function () {
    var $banner = $('.sn_banner')
    var width = $banner.width()
    // console.log(width)

    var $imageBox = $banner.find('ul:first')
    var $pointBox = $banner.find('ul:last')
    var $point = $pointBox.find('li')
    var animationFuc = function () {
        $imageBox.animate({transform:'translate('+(-index*width)+'px)'}, 200, function () {
            if (index >= 9) {
                index = 1
                $imageBox.css({transform:'translate('+(-index*width)+'px)'})
            } else if (index <= 0) {
                index =8
                $imageBox.css({transform:'translate('+(-index*width)+'px)'})
            }
            $point.removeClass('now').eq(index-1).addClass('now')
        })
    }
    var index = 1
    var timer = setInterval(function () {
        index++
        animationFuc()

    }, 3000);
//    手势切换
    $banner.on('swipeLeft',function () {
        index++
        animationFuc()
        // console.log('next')
    })
    $banner.on('swipeRight',function () {
        index--
        animationFuc()
        // console.log('prev')
    })
})
