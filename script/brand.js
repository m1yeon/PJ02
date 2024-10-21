$(document).ready(function(){
//좌, 우 버튼 변수 선언
const b_lbtn = $('.b_lbtn');
const b_rbtn = $('.b_rbtn');
const slideWidth = $('.brand_slide > li').css('Width');

//1. 첫번째 슬라이드 앞에 마지막 슬라이드 배치
$('.brand_slide > li:last-child').insertBefore('brand_slide > li:first-child');

//2. 왼쪽으로 이동 함수
function moveRight(){
  $('.brand_slide').animate({'margin-left':-slideWidth},400,
  function(){
    $('.brand_slide > li:first-child').insertAfter('.brand_slide li:last-child');
    $('.brand_slide').css('margin-left','0px');
  }
  );
}

//3. 오른쪽 이동 함수
function moveLeft(){
  $('.brand_slide').animate({'margin-left':slideWidth},400,
  function(){
    $('.brand_slide li:last-child').insertBefore('.brand_slide li:first-child');
    $('.brand_slide').css('margin-left','0px');
  });
}
// let Timer = setInterval(moveLeft,3500);

let sbar_num = 1;

//왼쪽 버튼 클릭시
b_lbtn.click(function(){
  // clearInterval(Timer);
  moveLeft();
  if(sbar_num == 1){
    sbar_num = 10;
  }else{
    sbar_num = --sbar_num;
  }
  $('.slide_bar_inner').animate({'width':sbar_num*120},400);
  
});

//오른쪽 버튼 클릭시
b_rbtn.click(function(){
  // clearInterval(Timer);
  moveRight();
  if(sbar_num == 10){
    sbar_num =1;
  }else{
    sbar_num = ++sbar_num;
  }
  console.log(sbar_num);

  $('.slide_bar_inner').animate({'width':sbar_num*120},400);
});


// 모달 제이쿼리
const story = $('.brand_slide li');

story.click(function(){
  let i = $(this).index()+1;
  let Bstory = `
  <div class="brand_story_wrap">
    <div class="brand_story">
      <img src="./images/brand_story${i}.jpg" alt="브랜드스토리" class="bstory_img"></img>
      <a href="#" title="banner">브랜드 바로가기</a>
      <input type="button" id="s_cbtn">
    </div>
  </div>
  `

       // <img src="./images/left_btn_white.png" alt="왼쪽 버튼" class="s_lbtn">
      // <img src="./images/right_btn_white.png" alt="오른쪽 버튼" class="s_rbtn">
  //모달창 나오게 하기
  $('body').append(Bstory);
  
  //닫기 버튼 클릭시 모달창 숨기기
  $('.brand_story > #s_cbtn').click(function(){
    $('.brand_story_wrap').fadeOut();
  });

  // //좌, 우 버튼 클릭시 함수 작성
  // $('.brand_story .s_lbtn').click(function(){
  //   // alert('left btn test');
  //   if(i==1){
  //     i=10;
  //   }else{
  //     i--;
  //   }
  //   console.log(i);
  //   dataChange(i);
  // });

  // $('.brand_story .s_rbtn').click(function(){
  //   if(i==10){
  //     i=1;
  //   }else{
  //     i++;
  //   }
  //   console.log(i);
  //   dataChange(i);
  // });

  //해당 인덱스 번호에 맞는 이미지 출력
  function dataChange(i){
    $('.brand_story .bstory_img').attr('src','./images/brand_story'+i+'.jpg');
  }
});
});
