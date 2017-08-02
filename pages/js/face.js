$(function(){
  var $J_menu = $('.J_menu');
  Route.getindexmenu(function(data){
    var html_menu = template('tpl_menu',data);
    $J_menu.html(html_menu);
    $more = $J_menu.children().eq(7);
    console.log($more);
    $more.on('click',function(){
      $(this).nextAll().toggle();
    })
  });
  

  //获取折扣价数据
  $J_product = $('.J_product');
  Route.getmoneyctrl(function(data){
    var html_ctrl = template('tpl_ctrl',data);
    $J_product.html(html_ctrl);
  })
})