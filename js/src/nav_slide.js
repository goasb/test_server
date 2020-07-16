(function ($){

    const nav = $('nav');
    const dt = nav.find('dt'); 
    const dtLink = dt.find('a'); 

    dtLink.on('mouseenter',function(e){
        // $(this).parent('dt').siblings('dd').addClass('active') = 선택한 dt만 나오기
        // dt.siblings('dd').addClass('active'); // = 전체 dd 나오기
        $(this).addClass('active');

        dt.siblings('dd').stop().slideDown();
    });

    nav.on('mouseleave',function(e){
        dt.siblings('dd').stop().slideUp();
    });

    dtLink.on('mouseleave',function(e){
        $(this).removeClass('active');
    });
    
})(jQuery);