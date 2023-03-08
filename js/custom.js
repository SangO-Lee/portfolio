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
            $('#loading').delay(4000).fadeOut(800, function(){
                clearInterval(_addTxt);
                //로드 완료 후 실행
                $('body').addClass('on');
            });
        }
        console.log(_loadIdx);
        _loadIdx++;
    }
    ,200);

   
}

$(function(){
    loading();
});
