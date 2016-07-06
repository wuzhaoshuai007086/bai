$(function(){

    $('.container').fullpage({
        onLeave: function(index, nextIndex, direction){
            $('.in-left').attr("id","");
            $('.in-right').attr("id","");
            $('.binkuai2').attr("id","");

        },
        afterLoad: function(anchorLink, index){
            $('.in-left').attr("id","active");
            $('.in-right').attr("id","active2");
            $('.binkuai2').attr("id","active3");

        },
    })
    $(".downs").click(function(){
    	 $.fn.fullpage.moveSectionDown();
    })


}); 