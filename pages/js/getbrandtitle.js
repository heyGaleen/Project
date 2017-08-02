$(function(){
  $j_binfo = $('#j_binfo');
  function getBrandTitle(){
    Route.getbrandtitle(function(data){
      $j_binfo.html(template('tpl_brandtitle',data));
    });
  }
  getBrandTitle();
})