$(document).ready(function(){
    let popup = $('.modal');

    //현재 브라우저에 쿠키 popup의 값이 none이면 팝업을 나오지 않게 함
    if($.cookie('popup')=='none'){
        $('.modal').hide();
     }
  
  // 체크박스 변수
  let $ex = $('.modal #c_btn');
  
  //체크박스에 사용자가 체크를 했는지 하지 않았는지 학인하기 위한 함수 작성
  function closePopup(){
    if($ex.is(':checked')){ //체크박스에 체크되었다면
      $.cookie('popup','none', {expires:1, path:'/'});
    }
    $('.modal').fadeOut();
  }
  
    //닫기 버튼 클릭시 해당 함수를 호출하여 모달윈도 닫기
    $('.modal  #c_btn').click(function(){
      // $('.p_modal').fadeOut();
      closePopup();
    });


  //새로고침시 팝업 이미지 바꾸기
  let r_num = Math.random()*2;
  let ran01 = Math.ceil(r_num);
  console.log(ran01);

  $('.modal > .banner img').attr('src','./images/popup'+ran01+'.jpg');
});