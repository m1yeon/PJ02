
$(document).ready(function(){
  //1. 탑버튼 클릭시 화면 부드럽게 올라가게 하기
  $('.t_btn').click(function(){
    $('html, body').animate({'scrollTop':'0'},500);

    return false;
  });


  //2. 스크롤시 나오는 탑버튼 구현하기
  $('.t_btn').hide();
  $(window).scroll(function(){
    let s_pos = $(this).scrollTop();
    console.log(s_pos);

    if(s_pos >= 500){
      $('.t_btn').fadeIn();
    }else{
      $('.t_btn').fadeOut();
    }
  });



});