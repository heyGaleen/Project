$(function(){
    $J_ctrl = $('.J_ctrl');
    $J_page = $('.J_page');
    $J_paging = $('.J_paging');
    $J_select = $('.J_select');
    $btnPrev = $('.btnPrev');
    $btnNext = $('.btnNext');
    var currentPage = 1;
    $btnPrev = $('.btnPrev');
    $btnNext = $('.btnNext');
    var id = $.getUrlParam('id');
    var htmlOption = '';
    getData();
      function getData(id,currentPage){
        Route.getmoneyctrl(
        {categoryid:id,pageid:currentPage},
        function(data){
          $J_ctrl.html(template('tpl_ctrl',data));
          pageNum = Math.ceil(data.totalCount/data.pagesize);
          for(var i=1;i<=pageNum;i++){
            htmlOption += '<option value='+i+'>'+i+'/'+pageNum+'</option>';
         }
         $J_select.html(htmlOption);
        });
      }
      

     $J_paging.on('click','div',function(){
        var index = $(this).data('index');
        if(index == 'prev'){
          currentPage--;
          if(currentPage<1){
            alert('已经是第一页了!');
            currentPage = 1;
            $btnPrev.attr('disabled',true);
          }
        }else if(index == 'next'){
          currentPage++;
          if(currentPage>pageNum){
            alert('已经是最后一页了!');
            currentPage = pageNum;
            $btnNext.attr('disabled',true);
           }
          }
          getData(id,currentPage);
        })
       $J_select.on('change',function(){
          num = $(this).val();
          currentPage = num;
          getData(id,currentPage);
        });
})