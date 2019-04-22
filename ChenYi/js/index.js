$(function () {
// 轮播图
    banner();
//  移动端页签
    initMobileTab();
//  初始化提示工具
    $('[data-toggle="tooltip"]').tooltip()
})

var banner = function() {
    //获取数据
    var getData = function (callback) {
        if (window.data) {
            callback && callback(window.data)
        } else{
            $.ajax({
                type: 'get',
                url: 'js/data.json',
                dataType: 'json',
                data: '',
                success: function (data) {
                    // console.log(data)
                    window.data = data;
                    callback && callback(window.data)

                }
            })
        }
    }
    //渲染
    var render = function () {
       getData(function (data) {
           var isMobile = $(window).width() < 768 ? true : false;
           // console.log(isMobile)
           var pointHtml = template('pointTemplate',{list:data});
           // console.log(pointHtml)
           var imageHtml = template('imageTemplate',{list:data,isMobile:isMobile});
           $('.carousel-indicators').html(pointHtml);
           $('.carousel-inner').html(imageHtml);
       })

   }
    //根据页面尺寸改变事件
    $(window).on('resize',function () {
       render();
   }).trigger('resize')
    //移动端手势切换
    var startX = 0
    var distanceX = 0
    var isMove = false
    $('.cy_banner').on('touchstart',function (e) {
        startX = e.originalEvent.touches[0].clientX
    }).on('touchmove',function (e) {
        var moveX = e.originalEvent.touches[0].clientX
        distanceX = moveX - startX
        isMove = true
    }).on('touchend',function (e) {
        if (isMove && Math.abs(distanceX) > 50) {
            if (distanceX < 0) {
                $('.carousel').carousel('next')
            } else {
                $('.carousel').carousel('prev')
            }
        }
        startX = 0
        distanceX = 0
        isMove = 0
    })

}

var initMobileTab = function () {
    var $navTabs = $('.cy_product .nav-tabs')
    var width = 0
    $navTabs.find('li').each(function (i,item) {
        var $currLi = $(this)
        var liWidth = $currLi.outerWidth(true)
        width += liWidth
    })
    // console.log(width)

    $navTabs.width(width)

    new IScroll($('.nav_tabs-parent')[0], {
        scrollX: true,
        scrollY: false,
        click: true
    })
}