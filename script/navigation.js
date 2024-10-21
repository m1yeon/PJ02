$(document).ready(function(){
  // 화면 크기 별 메인메뉴
  if($(window).width()>=1025){
    $('.h_gnb').mouseenter(function(){
      $('.h_wrap').stop().animate({'height':'360px'},500);
      $('.h_wrap').css('background','linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,1) 100%)');
    });

    $('.h_gnb').mouseleave(function(){
      $('.h_wrap').stop().animate({'height':'100px'},500);
    });
  }else if(($(window).width()<1024)&&($(window).width()>=768)){

    $('.menu_btn').click(function(){
        $('.h_wrap').toggleClass('height1');      
    });

  }else{
    $('.menu_btn').click(function(){
      $('.h_gnb').toggle(400);
    });
  
    $('.h_gnb li a').click(function(){
      $(this).next().toggle().parent().siblings().find('.h_sub').hide();
      $(this).find('span').addClass('gnb_act');
      $(this).parent().siblings().find('span').removeClass('gnb_act');
    });
    $('.h_wrap h1 img').attr('src','./images/logo.png'); //로고
    $('.h_wrap #search_btn img').attr('src','./images/search_btn_black.png');
    $('.h_wrap .menu_btn img').attr('src','./images/menu_btn.png');
  }

});