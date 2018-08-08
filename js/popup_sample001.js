$(function(){
function popup_scroll_top(){
    let scroll_top = $(window).scrollTop() + 300;
    return scroll_top;
}
function reset_data(){
    $('body').data('action_id', '');
    $('body').data('action_url', '');
    $('body').data('action_flg', '');
    $('#popup_yn_notice').text('');
}

$('.yn_btn').click(function(){
    let id = $(this).attr('data-id');
    let url = $(this).attr('data-url');
    let text = $(this).attr('data-text');
    $('body').data('action_id', id);
    $('body').data('action_url', url);
    $('body').data('action_flg', 1);
    $('#popup_yn_txt').html(text);
    let scroll_top = $(window).scrollTop();
    $('#popup_yn').css('top', popup_scroll_top()+'px');
    $('#popup_yn').show(500);
    $('#popup_background').show();
});

$('.location_href').click(function(){
    let url = $(this).attr('data-url');
    window.location.href = url;
});

$('#popup_y_btn').click(function(){
    let action_id = $('body').data('action_id');
    let action_url = $('body').data('action_url');
    let action_flg = $('body').data('action_flg');
    if(action_flg == 1){
        $.ajax({
            type:'post',
            url:action_url,
            data:{id:action_id},
            dataType:'json'
        }).done(function(data){
            window.location.href = data.callback_url;
        }).fail(function(data){
            $('#popup_yn_notice').text('処理に失敗しました。');
        });
    }
});
$('#popup_n_btn').click(function(){
    reset_data();
    $('#popup_yn').hide(500);
    $('#popup_background').hide();
});

$('#popup_background').click(function(){
    reset_data();
    $('#popup_yn').hide(500);
    $('#popup_background').hide();
});

});