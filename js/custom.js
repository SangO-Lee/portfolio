 //로딩페이지
function loading(){
    var _loadingtxt = '<p class="loading_text">Hi. My Name is Brann.</p>';
    var _sec = 0;
    for(var i = 0; i<9;i++){
        $(_loadingtxt).appendTo('#loading');
    }
    //개별 요소 로딩 퍼센트에 따라 노출되도록 변경 고려할것
    setInterval(function(){
        if(_sec < 9){
            $('.loading_text').eq(_sec).addClass('in');
        }else if(_sec == 9){
            $('.loading_text:nth-child(5)').addClass('active');
        }else{
            $('#loading').delay(4000).fadeOut(800);
        }
        _sec++;
    }
    ,200);
}

$(function(){
    $('body').addClass('on');
    loading();
});
