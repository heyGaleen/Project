$(function(){
  $j_sitenav = $('#j_sitenav');
  function getSiteNav(){
    Route.getsitenav(function(data){
      $j_sitenav.html(template('tpl_sitenav',data));
    });
  }
  getSiteNav();
})