$(function(){
  $j_discount = $('.j_discount');
  Route.getinlanddiscount(function(data){
    $j_discount.html(template('tpl_discount',data));
  })
})