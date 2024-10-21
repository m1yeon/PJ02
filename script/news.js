$(document).ready(function(){
    // 4. 뉴스&공지

    //1.탭버튼 변수선언
    const n_nav = $('.n_nav ul li a');
    const board_btn = $('.n_nav ul li:first-child a');
    const notice_btn = $('.n_nav ul li:nth-child(2) a');
    const hire_btn = $('.n_nav ul li:last-child a');

    //2.탭메뉴 구현하기
    n_nav.click(function(){
      $(this).addClass('n_act').parent().siblings().find('a').removeClass('n_act');
    });


    board_btn.click(function(){
      $('.total').hide();
      $('.board').fadeIn();
    });

    notice_btn.click(function(){
      $('.total').hide();
      $('.notice').fadeIn();
    });

    hire_btn.click(function(){
      $('.total').hide();
      $('.hire').fadeIn();
    });

    // <!-- 6. 고객센터_탭콘텐츠 -->
    //1. 탭 버튼 변수 저장
    const tab = $('.tab_con_wrap > .tab_con > ul > li > a');

    tab.click(function(){ //탭 버튼 클릭시
      //1. 클릭한 탭 버튼의 부모의 형제는 보이게 하고 나머지 숨김
      // 1-1.일단 다 숨기고
      $('.tab_con_wrap > .tab_con  li > div').hide();
      //1-2. 사용자가 클릭한 탭 버튼의 바로 옆에만 보이게
      $(this).next().fadeIn();

      //2. 내가 클릭한 탭 버튼에 .tab_act 적용시키기
      //2-1. 내가 선택한 탭 버튼 외 나머지도 서식 빼기
      $(this).parents().siblings().find('a').removeClass('tab_act');
      //2-2. 내가 선택한 탭 버튼에 서식 적용
      $(this).addClass('tab_act');

      return false;
    });
});