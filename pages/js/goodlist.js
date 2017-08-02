$(function(){
  $J_page = $('.J_page');
  $J_paging = $('.J_paging');
  $J_select = $('.J_select');
  $btnPrev = $('.btnPrev');
  $btnNext = $('.btnNext');
  $j_type = $('#j_type');
  var currentPage = 1;
  var pageNum;
  var htmlOption = '';
  $btnPrev = $('.btnPrev');
  $btnNext = $('.btnNext');
  var id = $.getUrlParam('id');
  var catrgorytitle = $.getUrlParam('categorytitle');
  $j_type.html(catrgorytitle);
  getData(0,1); 
  function getData(id,currentPage){
    Route.getproductlist(
    {categoryid:id,pageid:currentPage},
    function(data){
      $J_page.html(template('tpl_paging',data));
      pageNum = Math.ceil(data.totalCount/data.pagesize);
  });
}
    
    setTimeout(function(){
     for(var i=1;i<=pageNum;i++){
      htmlOption += '<option value='+i+'>'+i+'/'+pageNum+'</option>';
     }
     $J_select.html(htmlOption);
    },50);

      
    
      $J_paging.on('click','div',function(){
        var index = $(this).data('index');
        if(index == 'prev'){
          currentPage--;
          if(currentPage<1){
            alert('已经是第一页了!');
            currentPage = 1;
            $btnPrev.attr('disabled',true);
          }
          $(this).next().html('<option value='+currentPage+'>'+currentPage+'/'+pageNum+'</option>');
        }else if(index == 'next'){
          currentPage++;
          if(currentPage>pageNum){
            alert('已经是最后一页了!');
            currentPage = pageNum;
            $btnNext.attr('disabled',true);
          }
         $(this).prev().html('<option value='+currentPage+'>'+currentPage+'/'+pageNum+'</option>');
        }
        getData(id,currentPage);
      })

 
       $J_select.on('change',function(){
        num = $(this).val();
        currentPage = num;
         getData(id,currentPage);
      });



})
