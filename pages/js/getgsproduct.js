$(function(){
  $j_store = $('.j_store');
  $j_area = $('.j_area');
  $j_gsproduct = $('#j_gsproduct');
  function getStore(){
    Route.getgsshop(function(data){
      $j_store.html(template('tpl_shop',data));
    });
  }

  function getArea(){
    Route.getgsshoparea(function(data){
      $j_area.html(template('tpl_area',data));
    });
  }

  function getGsProduct(data){
    Route.getgsproduct(data||{shopid:0,areaid:0},function(data){
      $j_gsproduct.html(template('tpl_gslist',data));
    })
  }
  getStore();
  getArea();
  getGsProduct();
  getCurProduct();
  function getCurProduct(){
    $j_store.change(function(){
      shopid = $(this).val();
      $j_area.change(function(){
      areaid = $(this).val();
      getGsProduct({shopid:shopid,areaid:areaid});
      });
    });
  }
  $j_store.on('change',function(){
    var valShop = $(this).val();
    var valArea = $(this).next().val();
    getGsProduct({shopid:valShop,areaid:valArea});
  }); 
  $j_area.on('change',function(){
    var valShop = $(this).prev().val();
    var valArea = $(this).val();
    getGsProduct({shopid:valShop,areaid:valArea});
  });  
})