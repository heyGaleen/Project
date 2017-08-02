$(function(){
  $ad = $('.ad');
  $j_ptype = $('#j_ptype');
  $J_comment = $('.J_comment');
  $j_bname = $('#j_bname');
  var id = $.getUrlParam('id');
  var brandName = $.getUrlParam('productname').slice(-2);
  var pTypeName = '>'+$.getUrlParam('productname').split(" ")[0];
  $j_bname.html(brandName);
  $j_ptype.html(pTypeName);
  Route.getproduct({productid:id},function(data){
    $ad.html(template('tpl_product',data));
  });
  Route.getproductcom({productid:id},function(data){
    $J_comment.append(template('tpl_comment',data));
  })
})