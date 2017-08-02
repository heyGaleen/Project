$(function(){
  $j_cplist = $('#j_cplist');
  var couponid = $.getUrlParam('id');
  var currentIndex = 0;
  $arrow = $('.arrow');
  $arrLeft = $('.arr_l');
  $arrRight = $('.arr_r');
  $j_modal = $('.j_modal');
  $imgWrap = $('.imgWrap');
  var modal = document.querySelector('.modal-data');
  var el = document.querySelector('.modal-overlay');
  function getCouPrt(id){
    Route.getcouponproduct({couponid:id||0},function(data){
      $j_cplist.html(template('tpl_couponlist',data));
      var carousel = document.querySelectorAll('.carousel');
       $(carousel).on('click',function(){
        $imgWrap.html(data.result[0].couponProductImg);
        showModal();
    });
      var imgArr = [];
      data.result.forEach(function(value,index,arr){
        imgArr.push(value.couponProductImg);
      });
      imgArr = imgArr.slice(0,10);
      var len = imgArr.length;
      $arrow.on('click','span',function(){
        //通过判断是否拥有类名判断点击的对象
        if($(this).hasClass('arr_l')){
          currentIndex--;
          if(currentIndex<0){
            currentIndex = len-1;
          }
        }else if($(this).hasClass('arr_r')){
            currentIndex++;
            if(currentIndex>len-1){
              currentIndex = 0;
            }
          }
        $imgWrap.html(imgArr[currentIndex]);
      });
    });
  }
  el.addEventListener('click',function(e){
    if(e.target.nodeName!='SPAN'){
      hideModal();
      $imgWrap.html('');
    }
  })
  getCouPrt(couponid);
  function hideModal() {
    el.style.visibility = "hidden";
  }

  function showModal() {
    el.style.visibility = "visible";
  }

})