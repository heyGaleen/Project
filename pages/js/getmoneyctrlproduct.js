$(function(){
  $jContent = $('.j_content');
  $cityList = $('.city_list');
  $comment = $('.comment');
    var id = $.getUrlParam('id');
    Route.getmoneyctrlproduct({productid:id||31},
      function(data){
        $jContent.html(template('tpl_ctrlproduct'),data);
        $cityList.html(data.result[0].productCity);
        $comment.html(data.result[0].productComment);
        $('.ctrl').remove();
    })
})