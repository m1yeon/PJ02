$(document).ready(function(){
  //1. 변수선언
  const l_btn = $('.main_slide .s_btn li:first-child');
  const r_btn = $('.main_slide .s_btn li:last-child');
  let m_slide_img = $('.main_slide > div');

  let i = 0;

  //2. 움직이는 함수 만들기

 function fade(idx){
  m_slide_img.fadeOut();
  
  if(i==2){
    i=0;
  }else{
    i++;
  }
  //메인 슬라이드(해당 인덱스 번호를 보이게 함)
  m_slide_img.eq(i).stop().fadeIn();
 }


 function fade2(idx){
  m_slide_img.fadeOut();
  
  if(i==0){
    i=2;
  }else{
    i--;
  }
  
  m_slide_img.eq(i).stop().fadeIn();
 }

  //5초마다 함수 반복호출
  let Timer = setInterval(fade,5000);

  //좌,우 버튼 클릭시 해당하는 방향으로 슬라이드 나오게 하기
  l_btn.click(function(){
    fade2();
  });

  r_btn.click(function(){
    fade();
  });

  //좌, 우 버튼 클릭시 자동 시간 제거
  $('.s_btn > li').hover(function(){ //마우스 오버시 시간 제거
    clearInterval(Timer);
  },function(){ //마우스 아웃시 시간 다시 생성
    Timer = setInterval(fade,5000);
  });

});