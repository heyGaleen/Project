/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {


    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        baseUrl : 'http://192.168.22.43:9090',

               /* ------ 首页 api 数据请求 ------ */
        // 获取首页上面的菜单栏数据
        getindexmenu: ml_getindexmenu,
        getmoneyctrl: ml_getmoneyctrl,
        getcategorytitle: ml_getcategorytitle,
        getcategory: ml_getcategory,
        getcategorybyid: ml_getcategorybyid,
        getproductlist: ml_getproductlist,
        getproduct: ml_getproduct,
        getproductcom: ml_getproductcom,
        getmoneyctrlproduct:ml_getmoneyctrlproduct,
        getinlanddiscount: ml_getinlanddiscount,
        getbaicaijiatitle: ml_getbaicaijiatitle,
        getbaicaijiaproduct: ml_getbaicaijiaproduct,
        getcoupon: ml_getcoupon,
        getcouponproduct: ml_getcouponproduct,
        getgsshop: ml_getgsshop,
        getgsshoparea: ml_getgsshoparea,
        getgsproduct: ml_getgsproduct,
        getsitenav: ml_getsitenav,
        getbrandtitle: ml_getbrandtitle,
        getbrand: ml_getbrand,
        getbrandproductlist: ml_getbrandproductlist,
        getproductcom: ml_getproductcom
      }

     /**
     * 获取首页上面的菜单栏数据
     * 方法名：getindexmenu
     * 请求方式：get
     * 传参:无
     * 返回数据样例：
     *     {
                "result": [{
                    "indexmenuId": “菜单的id”,
                    "name": "菜单的名称",
                    "img": "菜单的图片",
                    "titlehref": "菜单的链接地址"
                }]
            }
     */
    function ml_getindexmenu(callback) {
        var url = Route.baseUrl + '/api/getindexmenu';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json');
    }

    function ml_getmoneyctrl(data,callback) {
        var url = Route.baseUrl + '/api/getmoneyctrl';
        $.get( url, data||{pageid:1},function( res ) {
            callback && callback( res );
        }, 'json');
    }

    //分类页功能界面
    function ml_getcategorytitle(callback) {
        var url = Route.baseUrl + '/api/getcategorytitle';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json');
    }

    //商品分类列表
     function ml_getcategory(data,callback) {
        var url = Route.baseUrl + '/api/getcategory';
        $.get( url, data,function( res ) {
            callback && callback( res );
        }, 'json');
    }

    function ml_getcategorybyid(data,callback) {
        var url = Route.baseUrl + '/api/getcategorybyid';
        $.get( url, data,function( res ) {
            callback && callback( res );
        }, 'json');
    }

    //商品分页
    function ml_getproductlist(data,callback) {
        var url = Route.baseUrl + '/api/getproductlist';
        $.get( url, data,function( res ) {
            callback && callback( res );
        }, 'json');
    }

    //商品详情功能界面
    function ml_getproduct(data,callback){
       var url = Route.baseUrl + '/api/getproduct';
        $.get( url, data,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取商品评论
    function ml_getproductcom(data,callback){
       var url = Route.baseUrl + '/api/getproductcom';
        $.get( url,data, function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //国内折扣商品详情页
    function ml_getmoneyctrlproduct(data,callback){
       var url = Route.baseUrl + '/api/getmoneyctrlproduct';
        $.get( url,data||{productid:0}, function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取商品折扣信息
    function ml_getinlanddiscount(callback){
       var url = Route.baseUrl + '/api/getinlanddiscount';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //白菜价标题
    function ml_getbaicaijiatitle(callback){
       var url = Route.baseUrl + '/api/getbaicaijiatitle';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //白菜价商品列表
    function ml_getbaicaijiaproduct(data,callback){
       var url = Route.baseUrl + '/api/getbaicaijiaproduct';
        $.get( url,data||{titleid:0} ,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //优惠券标题
    function ml_getcoupon(callback){
       var url = Route.baseUrl + '/api/getcoupon';
        $.get( url,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //优惠券列表
    function ml_getcouponproduct(data,callback){
       var url = Route.baseUrl + '/api/getcouponproduct';
        $.get( url,data||{couponid:0},function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取店铺信息
    function ml_getgsshop(callback){
       var url = Route.baseUrl + '/api/getgsshop';
        $.get( url,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取地区信息和标题
    function ml_getgsshoparea(callback){
       var url = Route.baseUrl + '/api/getgsshoparea';
        $.get( url,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取凑单商品列表
    function ml_getgsproduct(data,callback){
       var url = Route.baseUrl + '/api/getgsproduct';
        $.get( url,data||{},function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取商城列表
    function ml_getsitenav(callback){
       var url = Route.baseUrl + '/api/getsitenav';
        $.get( url,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取品牌标题
    function ml_getbrandtitle(callback){
       var url = Route.baseUrl + '/api/getbrandtitle';
        $.get( url,function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取品牌列表
    function ml_getbrand(data,callback){
       var url = Route.baseUrl + '/api/getbrand';
        $.get( url,data||{brandtitleid:0},function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取品牌列表
    function ml_getbrandproductlist(data,callback){
       var url = Route.baseUrl + '/api/getbrandproductlist';
        $.get( url,data||{brandtitleid:0,pagesize:4},function( res ) {
            callback && callback( res );
        }, 'json'); 
    }

    //获取商品评论
    function ml_getproductcom(data,callback){
       var url = Route.baseUrl + '/api/getproductcom';
        $.get( url,data||{productid:0},function( res ) {
            callback && callback( res );
        }, 'json'); 
    }
    window.Route = Route; /* 向外暴露 Route */

})(window);