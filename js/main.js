/* main.js */

$(function(){
    $("header .menu-btn").on('click', function(){
        $('.hold').toggleClass('show');
    });
     // 문서 실행 시 상품 전체 보기
     $('#product li').addClass('show'); // 초기 상태

     var col_num = 4; // 칼럼수 
         $('#product li.show').each(function (i) {
             console.log('index= ', i)
             if ((i + 1) % col_num == 0) {
                 console.log('target el= ', i % 4);
                 $(this)
                     .css('margin-right', 0)
             }
         });
 
     function col_init(){
         var col_num = 4; // 칼럼수 
         $('#product li.show').each(function (i) {
             console.log('index= ', i)
             if ((i + 1) % col_num == 0) {
                 console.log('target el= ', i % 4);
                 $(this)
                     .css('margin-right', 0)
             }
         });
     }
     
         
 
     $(".new-product").on("click", function () {
         $('#product li').removeClass('show');
 
         $('#product li[class*="new"]').addClass('show');
         col_init();
 
     });
 
     $(".special-product").on("click", function () {
         $('#product li').removeClass('show');
 
         $('#product li[class*="special"]').addClass('show');
         col_init();
 
     });
 
     $(".normal-product").on("click", function () {
         $('#product li').removeClass('show');
 
         $('#product li[class*="normal"]').addClass('show');
         col_init();
         
 
     });
 
     $(".health-product").on("click", function () {
         $('#product li').removeClass('show');
 
         $('#product li[class*="health"]').addClass('show');
         col_init();
 
     });
});
$(function(){
    $("header .find-btn").on('click', function(){
        $('.searchtop').toggleClass('show');
    });
});
    $(function () {
      // bx slider 초기화
      $('.slider').bxSlider({
        // 옵션
        mode: "fade", // 효과
        auto: true, // 자동재생(true/false)
        pause: 4500, // 대기시간(ms),
        pager: true, // 하단 인디케이터 표시
        controls: false, // 좌우 화살표
        captions: true,
        autoHover: false, // 마우스오버시 정지
        touchEnabled: true, // 터치 지원
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1920,
      });
    })
