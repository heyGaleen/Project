$(function(){
  $j_title = $('#j_title');
  $j_bcjList = $('#j_bcjList');
  function getTitle(){
    Route.getbaicaijiatitle(function(data){
      $j_title.html(template('tpl_bcjtitle',data));
    });
   
  }
  getTitle();
  getbcjProduct();
  $j_title.on('click','li',function(){
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).data('index');
    getbcjProduct(index);
  })
  function getbcjProduct(id){
    Route.getbaicaijiaproduct({titleid:id||0},function(data){
      $j_bcjList.html(template('tpl_bcjlist',data));
    });
  }
})