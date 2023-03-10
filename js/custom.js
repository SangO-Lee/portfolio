var _windowTop = $(window).scrollTop();
var _pageHeight = $('body').height() - $(window).height();
 
 //로딩페이지
function loading(){
    var _loadingtxt = '<p class="loading_text">Hi. My Name is Brann.</p>';
    var _loadIdx = 0;

    for(var i = 0; i<9;i++){
        $(_loadingtxt).appendTo('#loading');
    }
    
    //개별 요소 로딩 퍼센트에 따라 노출되도록 변경 고려할것
    var _addTxt = setInterval(function(){
        if(_loadIdx < 9){
            $('.loading_text').eq(_loadIdx).addClass('in');
        }else if(_loadIdx == 9){
            $('.loading_text:nth-child(5)').addClass('active');
        }else{
            $('#loading').delay(2000).fadeOut(600, function(){
                clearInterval(_addTxt);
                //로드 완료 후 실행
                $('body').addClass('on');
            });
        }
        console.log(_loadIdx);
        _loadIdx++;
    }
    ,150);
}

//scrollbar
function scrollBar (){
    _windowTop = $(window).scrollTop();
    _pageHeight = $('body').height() - $(window).height();
    var _ratio = _windowTop / _pageHeight * 100;
    
    console.log(_ratio);
    $('#scroll_bar .current_indicator').css('top', _ratio + '%');
}

//window scroll 시
$(window).on('scroll',function(){
    scrollBar();
});

$(function(){
    // loading(); //로딩페이지
    scrollBar();

    //스크롤 버튼 
    $('a[use="scroll"]').on('click',function(e){
        var _target = $(this).attr('href');
        var _targetTop = 0;
        _target == '#' ? 0 : _targetTop = $(_target).offset().top;

        $('body,html').animate({
            scrollTop:0
        },500);
        
        return false;
    });
    
    //작업용
    $('#loading').hide();
    $('body').addClass('on');
});
