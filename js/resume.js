var _windowTop = $(window).scrollTop();
var _windowHeight = $(window).height();
var _baseline = _windowTop + _windowHeight;
var _pageHeight = $('body').height() - $(window).height();
var _bgBaseline = 1000;
var _dev = 0;// 1= 인트로 생략 0=인트로 노출

function scrollBar (){
    _windowTop = $(window).scrollTop();
    _pageHeight = $('body').height() - _windowHeight;
    var _ratio = _windowTop / _pageHeight * 100;
    $('#scroll_bar .current_indicator').css('top', _ratio + '%');
}


$(window).on('scroll',function(){
    //common
    scrollBar();
 
});

$(function(){
    scrollBar(); //스크롤바


    //스크롤 버튼
    $('a[data-use="scroll"]').on('click',function(e){
        e.preventDefault();
        var _target = $(this).attr('href');
        var _targetTop = 0;
        _target == '#' ? 0 : _targetTop = $(_target).offset().top;

        $('body,html').animate({
            scrollTop:_targetTop
        },1000,'easeInOutCubic');

        //네비게이션 초기화
        $('#navi').removeClass('active');
        $('body').removeClass('blur');

        return false;
    });

    
});
