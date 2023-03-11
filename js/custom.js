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
    $('#scroll_bar .current_indicator').css('top', _ratio + '%');
}

//scroll classing
function scrollClassing(tgt){
    var _windotHeight = $(window).height();
    var _baseline = _windowTop + _windotHeight; //화면이 섹션 중간쯤 왔을때 이벤트 작동
    var _target= tgt; //섹션에 해당하는 엘리멘트
    var _count = _target.length; // 총 엘리멘트 갯수
    var _lastIdx = _count + 1; //마지막 엘리멘트

    // for(var i = 0 ; i < _count ; i++){
            var _targetTop = _target.offset().top;
            var _targetHeight = _target.height();
            var _scrollProgress = (_baseline - _targetTop) / _targetHeight;
            var _progessPercent = _scrollProgress * 100;
            
            $(_target).css({
                'opacity': _scrollProgress * 0.7,
                'background-size': (85 + _scrollProgress * 15) + '%'
            });

            // var _cond1 = _target.eq(i).offset().top;
            // if(_target.eq(i).next().length) var _cond2 = _target.eq(i).next().offset().top;
            // var _cond3 = _target.eq(0).offset().top;

            // if(i != _lastIdx){
            //     if(_baseline < _cond3){
            //         _target.removeClass('active');
            //     }else if(_baseline > _cond1 && _baseline < _cond2){
            //         _target.eq(i).addClass('active').siblings().removeClass('active');
            //     }
            // }else if(i == _lastIdx){
            //     if(_baseline > _cond1){ //마지막 엘리멘트 이후는 항상 마지막 엘리멘트에 active 추가
            //         _target.eq(i).addClass('active').siblings().removeClass('active');
            //     }
            // }


    // }
}

//window scroll 시
$(window).on('scroll',function(){
    scrollBar();

    //main_bg
    if(_windowTop < 1000){
        $('#main_bg').show();
    }else{
        $('#main_bg').hide();
    }

    //history 
    scrollClassing($('#history_content > article#at1'));
   
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
