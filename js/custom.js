var _windowTop = $(window).scrollTop();
var _windowHeight = $(window).height();
var _baseline = _windowTop + _windowHeight;
var _pageHeight = $('body').height() - $(window).height();
var _bgBaseline = 1000;

function windowInit(){
    $('body,html').scrollTop(0);
    $('.main_content section').removeClass('active');
}

function loading(){//로딩페이지
    var _time = 0;
    var _l1Width = 0; //phase1의 .l1 가로값
    var _loadingTimer = setInterval(() => {
        _time += 100;
        if(_time > 1000  && _time < 2500){//phase1
            _l1Width = $('#loading #phase1 .l1').width();
            $('#loading #phase1').addClass('active');
            $('#loading #phase1 .l1').addClass('active');
            $('#loading #phase1 .l2').css('margin-left',_l1Width);
        }
        if(_time > 2500 && _time <3000){
            $('#loading #phase1 .l1').css({'margin-left':_l1Width * -1,'opacity':'0'});
            $('#loading #phase1 .l2').css('margin-left','-30px').addClass('active');
        }
        if(_time > 3000 && _time <3800){
            $('#loading #phase1 .l2').css('margin-left','0');
        }
        if(_time > 3800 && _time <4100){//phase2
            $('#loading #phase2').addClass('active').prev().removeClass('active');
        }
        if(_time > 4100 && _time <5100){
            $('#loading #phase2 .main_text').addClass('active');
        }
        if(_time > 5100 && _time <5400){//phase3
            $('#loading #phase3').addClass('active').prev().removeClass('active');
        }
        if(_time > 5400 && _time <6400){
            $('#loading #phase3 .main_text').addClass('active');
        }
        if(_time > 6400 && _time <6700){//phase4
            $('#loading #phase4').addClass('active').prev().removeClass('active');
        }
        if(_time > 6700 && _time <7700){
            $('#loading #phase4 .main_text').addClass('active');
        }
        if(_time > 7700 && _time <9200){//phase5
            $('#loading #phase5').addClass('active').prev().removeClass('active');
            $('#loading #phase5 .l1').addClass('active');
        }
        if(_time > 9200 && _time <10700){
            $('#loading #phase5 .l1 span').css({
                'margin-top':'-1.1em',
                'transition-delay':'0s',
                'opacity':'0'
            });
        }
        if(_time > 10700 && _time <12700){
            $('#loading #phase5 .l2').addClass('active');
        }
        if(_time > 12700 && _time <14000){//loading 종료
            $('#loading').fadeOut(1000);
        }
        if(_time > 14000){
            clearInterval(_loadingTimer);
            //일정 시간이 지나면 네비와 스크롤바 노출
            setTimeout(() => {
                $('body').addClass('on');
            }, 1000);
        }
    }, 100);
    windowInit(); //스크롤 초기화
    _loadingTimer;
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

function scrollClassing(target, siblingClass){
    var _targetBase = _windowTop + _windowHeight / 2; 
    var _target= target; //섹션에 해당하는 엘리멘트
    var _count = _target.length; // 총 엘리멘트 갯수
    var _lastIdx = _count - 1; //마지막 엘리멘트
    var _siblingClass = siblingClass;

    for(var i = 0 ; i < _count ; i++){
        var _cond1 = _target.eq(i).offset().top;
        var _cond2;
        if(_target.eq(i).next().length){
            _cond2 = _target.eq(i).next().offset().top;
        }
        
        if(i != _lastIdx){
            if(_targetBase > _cond1 && _targetBase < _cond2){
                _target.eq(i).addClass('active');
                if(_siblingClass == 'true'){
                    _target.eq(i).siblings().removeClass('active');
                }
            }
        }else{
            if(_targetBase > _cond1){ //마지막 엘리멘트 이후는 항상 마지막 엘리멘트에 active 추가
                _target.eq(i).addClass('active');
                if(_siblingClass == 'true'){
                    _target.eq(i).siblings().removeClass('active');
                }
            }
        }
    }

    var _activeIdx = $('#history_content .active').index();
    if(_activeIdx < 0) _activeIdx = 0; //history 이전 화면에서는 첫번째 요소를 활성화
    $('#history_wrap .main_line span').eq(_activeIdx).addClass('active').siblings().removeClass('active');
    $('#history_wrap .sub_line span').eq(_activeIdx).addClass('active').siblings().removeClass('active');
 }


$(window).on('scroll',function(){
    //common
    scrollBar();

    //main_content
    scrollClassing($('.main_content section'), 'false');

    //main_bg
    _windowTop < _bgBaseline ? $('#main_bg').show() :  $('#main_bg').hide();

    //history
    scrollFadein($('#history_content > #at1'), 'true');
    scrollFadein($('#history_content > #at2'), 'true');
    scrollFadein($('#history_content > #at3'), 'true');
    scrollFadein($('#history_content > #at4'), 'true');
    scrollClassing($('#history_content > article'), 'true');
});

$(function(){
    _bgBaseline = $('#history').offset().top;//main_bg 토글 baseline
    loading(); //로딩페이지
   
    scrollBar(); //스크롤바
    scrollClassing($('.main_content section'), 'false');

    //스크롤 버튼
    $('a[use="scroll"]').on('click',function(e){
        var _target = $(this).attr('href');
        var _targetTop = 0;
        _target == '#' ? 0 : _targetTop = $(_target).offset().top;

        $('body,html').animate({
            scrollTop:0
        },500,ease);

        return false;
    });

    //personality
    var _personalityLength = $('.personality_li li').length - 1;
    var _iconIdx = $('.personality_li .active').index();
    var _personalityLoop = setInterval(() => {
        _iconIdx != _personalityLength ? _iconIdx++ : _iconIdx = 0;
        $('.personality_li li').eq(_iconIdx).addClass('active').siblings().removeClass('active');
        $('.personality_icon li').eq(_iconIdx).addClass('active').siblings().removeClass('active');
    }, 2000);
    _personalityLoop;

    //project
    $('.project_li li').on('mouseover',function(){
        var _projectName = $(this).attr('data-img');
        if(_projectName != 0){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).siblings('.bg').children('.' + _projectName).addClass('active').siblings().removeClass('active');
        }
    });

    //작업용
    // $('#loading').hide();

});
