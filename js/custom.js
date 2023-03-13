var _windowTop = $(window).scrollTop();
var _windowHeight = $(window).height();
var _baseline = _windowTop + _windowHeight;
var _pageHeight = $('body').height() - $(window).height();
var _bgBaseline = 1000;

function loading(){//로딩페이지
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

function scrollBar (){
    _windowTop = $(window).scrollTop();
    _pageHeight = $('body').height() - _windowHeight;
    var _ratio = _windowTop / _pageHeight * 100;
    $('#scroll_bar .current_indicator').css('top', _ratio + '%');
}

function scrollFadein(tgt){
    _baseline = _windowTop + _windowHeight;
    var _target= tgt; //섹션에 해당하는 엘리멘트

    //타겟 기준 비율 설정
    var _targetTop = _target.offset().top;
    var _targetHeight = _target.height();
    var _scrollProgress = (_baseline - _targetTop) / _targetHeight;
    var _progessPercent = _scrollProgress * 100;

    //css 요소 정의
    var _minOpacity = 0.1; //소수점
    var _minBgSize = 30; //퍼센트
    var _opacityValue = _minOpacity + _scrollProgress;
    var _bgSize = (_minBgSize + _progessPercent);

    //최대값
    if(_opacityValue > 1){_opacityValue = 1;}
    if(_bgSize > 100){ _bgSize = '100'; }

    if(_progessPercent < 100){
        $(_target).css({
            'opacity': _opacityValue,
            'background-size': _bgSize + '%'
        });
    }else{//최대값 이후
        if(_target.attr('data-last') != 'true'){
            _progessPercent -= 100;
            _opacityValue = 1 - (_progessPercent / 40);
            $(_target).css({
                'opacity': _opacityValue
            });
        }else if(_target.attr('data-last') == 'true'){//마지막 요소일 경우 최대값 지정
            $(_target).css({
                'opacity': 1
            });
        }
    }
}

function scrollClassing(tgt){
    var _targetBase = _windowTop + _windowHeight / 2; 
    var _target= $('#history_content > article'); //섹션에 해당하는 엘리멘트
    var _count = _target.length; // 총 엘리멘트 갯수
    var _lastIdx = _count - 1; //마지막 엘리멘트

    for(var i = 0 ; i < _count ; i++){
        var _cond1 = _target.eq(i).offset().top;
        var _cond2;
        if(_target.eq(i).next().length){
            _cond2 = _target.eq(i).next().offset().top;
        }
        
        if(i != _lastIdx){
            if(_targetBase > _cond1 && _targetBase < _cond2){
                _target.eq(i).addClass('active').siblings().removeClass('active');
            }
        }else{
            if(_targetBase > _cond1){ //마지막 엘리멘트 이후는 항상 마지막 엘리멘트에 active 추가
                _target.eq(i).addClass('active').siblings().removeClass('active');
            }
        }
    }

    var _activeIdx = $('#history_content .active').index();
    if(_activeIdx < 0) _activeIdx = 0;
    $('#history_wrap .main_line span').eq(_activeIdx).addClass('active').siblings().removeClass('active');
    $('#history_wrap .sub_line span').eq(_activeIdx).addClass('active').siblings().removeClass('active');
    console.log(_activeIdx);
}


$(window).on('scroll',function(){
    //common
    scrollBar();

    //main_bg
    _windowTop < _bgBaseline ? $('#main_bg').show() :  $('#main_bg').hide();

    //history
    scrollFadein($('#history_content > #at1'));
    scrollFadein($('#history_content > #at2'));
    scrollFadein($('#history_content > #at3'));
    scrollFadein($('#history_content > #at4'));
    scrollClassing();
});

$(function(){
    _bgBaseline = $('#history').offset().top;//main_bg 토글 baseline

    // loading(); //로딩페이지
    scrollBar(); //스크롤바

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

    //personality
    $('.personality_li li').on('mouseover',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var _iconIdx = $('.personality_li .active').index();
        console.log(_iconIdx);
        $('.personality_icon li').eq(_iconIdx).addClass('active').siblings().removeClass('active');
        
    });

    //작업용
    $('#loading').hide();
    $('body').addClass('on');
});
