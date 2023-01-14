let btn1 = document.querySelector('.btn1')
btn1.addEventListener('click',function () {
  document.querySelector('.img-list').style.transform = 'translate(0)'
})
let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',function () {
  document.querySelector('.img-list').style.transform = 'translate(-100vw)'
})

let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click',function () {
  document.querySelector('.img-list').style.transform = 'translate(-200vw)'
})

let btn4 = document.querySelector('.btn4')
btn4.addEventListener('click',function () {
  document.querySelector('.img-list').style.transform = 'translate(-300vw)'
})


// $(function () {
//   $('.menu-list>li').hover(function(){
//     $(this).find("ul").stop().slideDown(500);
//     ($(this).find(".listlist").css("display") == "block") 
    
//    }, function(){
//     $(this).find("ul").stop().slideUp(500);
//     $(this).find(".listlist").css("display","none")
//   })
// })  


    function test() {
        if ($('.menu-list>li>a:hover')) {
            $('.listlist').css('display', 'block');
        } else {
            $('.listlist').css('display', 'none');
        }
    }



// $(function () {
//   $(".gnb > li").hover(function (){
//     //sub 메뉴가 보이게 
//     $(this).find("ul").stop().slideDown(500);
//     $(this).children("a").addClass("on")
//   },function(){
//     $(this).find("ul").stop().slideUp(500);
//     $(this).children("a").removeClass("on")
//   })
// })