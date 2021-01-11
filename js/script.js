
  $(window).resize(function(){

    if ($(window).width() <= 768) {  

        $(document).ready(function() {
            var body = $('html,body'), NAVBAR_HEIGHT = 70;
            function smoothScrollingTo(target) {
              if($(target)) body.animate({scrollTop:$(target).offset().top - NAVBAR_HEIGHT}, 500);
            }
            $('a[href*=\\#]').on('click', function(event){
              event.preventDefault();
              smoothScrollingTo(this.hash);
            });
            $(document).ready(function(){
              smoothScrollingTo(location.hash);
            });
          })
           

    }     

})

$(document).ready(function () {
    $('nav li').click(function(e) {

        $('nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});


$(document).ready(function () {
    $('nav a').click(function(e) {

        $('nav a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});


