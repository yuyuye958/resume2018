!function(){
    iconClick($('#qq'),$('.popover-qq'))
    iconClick($('#weixin'),$('.popover-weixin'))

    function iconClick(icon,popover){
        icon.on('click',function(){
            $('.popover').hide()
            popover.toggle(150)
            $(document).one('click', function(){
                popover.hide(150)
            })
            $(document).one('scroll', function(){
                popover.hide(150)
            })
        })
        $(".media a").on('click', function(e){
            e.stopPropagation()
        })
        $(".popover").on('click', function(e){
            e.stopPropagation()
        })
    }
    
}()