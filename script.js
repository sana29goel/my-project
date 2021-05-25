// var preloader=document.getElementById('loading');
// function preloaderfunction(){
//     preloader.style.display='none';
    
// }

$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autowidth:true,
        loop:true,
        onSliderLoad:function(){
            $('#autoWidth').removeClass('cS-hidden')
        }
    })
})

