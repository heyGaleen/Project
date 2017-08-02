$(function(){
  var brandtitleid = $.getUrlParam('brandtitleid');
  $j_btlist = $('.j_btlist');
  $j_senior = $('.j_senior');
  $j_bhead = $('#j_bhead');
  $j_lhead = $('#j_lhead');
  $j_chead = $('#j_chead');
  $j_com = $('.j_com');
  var strName;
  function getBrand(id){
    Route.getbrand({brandtitleid:id||0},function(data){
      $j_btlist.html(template('tpl_brandname',data));
      strName = data.result[0].brandName.slice(-4);
      $j_bhead.html(strName+'品牌哪家好');
    });
  }
  getBrand(brandtitleid);
  getBrandList({brandtitleid:brandtitleid,page:4}); 
  getProductCom();
  function getBrandList(data){
    Route.getbrandproductlist(data||{brandtitleid:0,pagesize:4},function(data){
      $j_senior.html(template('tpl_brandlist',data));
      $j_lhead.html(strName+'产品销量排行');
      $j_chead.html(strName+'最新评论');
    })
  } 
  function getProductCom(data){
    Route.getproductcom(data||{productid:0},function(data){
      $j_com.html(template('tpl_comment',data));
    });
  }
  $j_senior.on('click','li',function(){
    var productid = $(this).data('productid');
    getProductCom({productid:productid});
    scroll();
  })
  function scroll(){
    var oHeight = $j_chead.offset().top;
    $('body').animate({
      scrollTop:oHeight
    },500);
  }
})