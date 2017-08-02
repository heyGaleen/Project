$(function(){
  $J_list = $('.J_list');
  Route.getcategorytitle(function(data) {
      var html_category_title = template('tpl_category_title', data);
      $J_list.html(html_category_title);
      $J_list.on('click', '.title', function() {
        var index = $(this).data('id');
        //将具体内容渲染到页面中去
        var $that = $(this);
        Route.getcategory({
          titleid: index
        }, function(data) {
          var html_category = template('tpl_category', data);
          $that.next().html(html_category);
        });
      })
    })
  $J_list.on('click','.title',function(){
    $(this).next().toggle();
  })
})
   
