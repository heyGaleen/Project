$(function(){
  $j_coupon = $('#j_coupon');
  function getCoupon(){
    Route.getcoupon(function(data){
      $j_coupon.html(template('tpl_coupon',data));
    });
    $j_carousel = $('.j_carousel');
    console.log($j_carousel)
    $j_carousel.on('click',function(){
    $('.mask').show();
  });
  }
  getCoupon();
})