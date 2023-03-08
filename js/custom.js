$(function(){
    $('body').addClass('on');

    //loading
    var _loadingtxt = '<p class="loading_text">Hi. My Name is <strong>Brann</strong>.</p>';
    var _sec = 0;
    setInterval(function(){
        if(_sec < 9){
            $(_loadingtxt).appendTo('#loading');
            if(_sec == 4)$('.loading_text:nth-child(5)').addClass('active');
        }else if(_sec == 9){
            // $('.loading_text:nth-child(5)').delay(2000).addClass('active');
        }else{
            $('#loading').delay(3000).fadeOut();
            return false;
        }
        _sec++;
        console.log(_sec);
    }
    ,150);
});
