var _windowTop = $(window).scrollTop();
var _windowHeight = $(window).height();
var _baseline = _windowTop + _windowHeight;
var _pageHeight = $('body').height() - $(window).height();
var _bgBaseline = 1000;
var _personalityActived = -1;
var _dev = 0;// 1= 인트로 생략 0=인트로 노출

//로딩 세션스토리지 정의
var introOpened = sessionStorage.getItem('introOpen');
if(!introOpened) {
    introOpened = '0';
}

function windowInit(error){
    var _error = error;
    $('body,html').scrollTop(0);
    // console.log('windowInit',_error);
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
            $('#loading_close').addClass('active');
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
            setTimeout(() => {
                $('#loading_close').removeClass('active');
            }, 1000);
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
            setTimeout(() => {//일정 시간이 지나면 네비와 스크롤바 노출
                windowInit('interval error');
                $('body').addClass('on');
            }, 300);
        }
    }, 100);
    windowInit('loading error'); //스크롤 초기화
    _loadingTimer;

    //loading close
    $('#loading_close').on('click',function(e){
        e.preventDefault();
        clearInterval(_loadingTimer);
        $('#loading').fadeOut(1000);
        $('body').addClass('on');
        console.log('close clicked');
    });
}

function scrollBar (){
    _windowTop = $(window).scrollTop();
    _pageHeight = $('body').height() - _windowHeight;
    var _ratio = _windowTop / _pageHeight * 100;
    $('#scroll_bar .current_indicator').css('top', _ratio + '%');
}

function scrollFadein(tgt,sectionId){
    _baseline = _windowTop + _windowHeight;
    var _target= tgt; //섹션에 해당하는 엘리멘트
    var _sectionId= sectionId; //특정 섹션 구분자

    //타겟 기준 비율 설정
    var _targetTop = _target.offset().top;
    var _targetHeight = _target.outerHeight();
    var _scrollProgress = (_baseline - _targetTop) / _targetHeight;
    var _progessPercent = _scrollProgress * 100;

    if(_targetTop - _baseline  > 0) return false; //해당 위치 오기 전까지 실행금지
   
    if(_sectionId == 'history'){
        //css 요소 정의
        var _opacityValue = _scrollProgress;
        var _bgSize =_progessPercent + 20;
        var _grayscale = 1 - _scrollProgress;

        //최대값
        if(_opacityValue > 1){_opacityValue = 1;}
        if(_grayscale < 0){_grayscale = 0;}
        if(_bgSize > 100){ _bgSize = '100'; }

        //실행
        if(_progessPercent < 115){
            $(_target).css({
                'opacity': _opacityValue,
                'filter': 'grayscale('+ _grayscale +')',
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
                    'opacity': 1,
                    'filter': 'grayscale(0)'
                });
            }
        }
        //history section
    }else if(_sectionId == 'example'){
        //포지션 가로축
        var _minPositionLeft = $(_target).css('left').slice(0,-2);
        var _fixedPostionLeft = $(_target).attr('data-hori');//최초 x축 값 보존
        if(!_fixedPostionLeft){ $(_target).attr('data-hori',_minPositionLeft); }
        var _positionLeft = 0;
        if(_fixedPostionLeft > 0) {//최초 x축 값이 양수인경우 
            _positionLeft =  (1 - _scrollProgress) * _fixedPostionLeft;
        }else{
            _positionLeft = (1 - _scrollProgress) * _fixedPostionLeft;
        }

        //밝기값
        var _minBrightness = 0.2; //밝기 최소값
        var _brightness = _minBrightness + _scrollProgress;

        //최대값
        if(_fixedPostionLeft > 0 && _positionLeft < 0){ _positionLeft = '0'; }
        if(_fixedPostionLeft < 0 && _positionLeft > 0){ _positionLeft = '0'; }
        if(_brightness > 1){_brightness = 1;}

        //실행
        $(_target).css({
            'left': _positionLeft,
            'filter': 'brightness('+ _brightness +')'
        });

        //부모요소 활성화
        if(_scrollProgress >= 0.8){
            $(_target).parent().addClass('active');
        }else{
            $(_target).parent().removeClass('active');
        }
        //example section
    }
}

function scrollClassing(target, siblingClass, menuChange){
    var _targetBase = _windowTop + _windowHeight / 2; 
    var _target= target; //섹션에 해당하는 엘리멘트
    var _count = _target.length; // 총 엘리멘트 갯수
    var _lastIdx = _count - 1; //마지막 엘리멘트
    var _siblingClass = siblingClass;
    var _menuChange = menuChange;

    for(var i = 0 ; i < _count ; i++){
        var _cond1 = _target.eq(i).offset().top; //조건1 타겟의 오프셋 값
        var _cond2;
        if(_target.eq(i).next().length){
            _cond2 = _target.eq(i).next().offset().top;//조건2 다음 타겟의 오프셋 값
        }

        if(i != _lastIdx){
            if(_targetBase > _cond1 && _targetBase < _cond2){
                _target.eq(i).addClass('active');
                if(_siblingClass == 'true'){//true일때 형제노드 active 클래스 삭제
                    _target.eq(i).siblings().removeClass('active');
                }

                //네비게이션 메뉴명 전환
                if(_menuChange == 'true'){
                    var _menuName = _target.eq(i).attr('nv-title');
                    $('#menu_name .curr_name').text(_menuName);
                }
            }
        }else{
            if(_targetBase > _cond1){ //마지막 엘리멘트 이후는 항상 마지막 엘리멘트에 active 추가
                _target.eq(i).addClass('active');
                if(_siblingClass == 'true'){
                    _target.eq(i).siblings().removeClass('active');
                }

                //네비게이션 메뉴명 전환
                if(_menuChange == 'true'){
                    var _menuName = _target.eq(i).attr('nv-title');
                    $('#menu_name .curr_name').text(_menuName);
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
    if(_windowTop == 0){//windowInit
        $('.main_content section').removeClass('active');
    }

    //main_content
    scrollClassing($('.main_content section'), 'false', 'true');

    //main_bg
    _windowTop < _bgBaseline ? $('#main_bg').show() :  $('#main_bg').hide();

    //history
    scrollFadein($('#history_content > #at1'), 'history');
    scrollFadein($('#history_content > #at2'), 'history');
    scrollFadein($('#history_content > #at3'), 'history');
    scrollFadein($('#history_content > #at4'), 'history');
    scrollClassing($('#history_content > article'), 'true');

    //personality
    if($('#personality').hasClass('active')) _personalityActived = 1;

     //example
     scrollFadein($('#major_wrap > .example1 img'), 'example');
     scrollFadein($('#major_wrap > .example2 img'), 'example');
     scrollFadein($('#major_wrap > .example3 img'), 'example');
     scrollFadein($('#major_wrap > .example4 img'), 'example');
});

$(function(){
    //common
    _bgBaseline = $('#history').offset().top;//main_bg 토글 baseline
    
    //로딩페이지 세션스토리지
    if(introOpened == 0){
        loading();
        sessionStorage.setItem('introOpen','1');
    }else if(introOpened ==1 || dev == 1){
        $('#loading').hide();
        $('body').addClass('on');
    }

    scrollClassing($('.main_content section'), 'false'); 
    scrollBar(); //스크롤바

    //네비게이션
    $('#menu_name .curr_name').on('click',function(){
        $('body').toggleClass('blur');
        $('#navi').toggleClass('active');
    });

    //스크롤 버튼
    $('a[use="scroll"]').on('click',function(e){
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

    //personality
    var _personalityLength = $('.personality_li li').length - 1;
    var _iconIdx = 0;
    var _personalityLoop = setInterval(() => {
        if(_personalityActived == 1){
            _iconIdx != _personalityLength ? _iconIdx++ : _iconIdx = 0;
            $('.personality_li li').eq(_iconIdx).addClass('active').siblings().removeClass('active');
            $('.personality_icon li').eq(_iconIdx).addClass('active').siblings().removeClass('active');
            
        }
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

    
});
