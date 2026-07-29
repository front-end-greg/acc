

     
 $(window).load(function() {
     
     


            $('#preloader').fadeOut(574, introAnimation);
            
            $('nav li').click(function() {
                var navScrollD = $(this).data('screen');
                
                $('html, body').animate({
                    scrollTop: $(navScrollD).offset().top
                }, 1409, 'easeOutQuart');
            });
   
     
     

        function introAnimation() {

            $('#mars').animate({
                top: '200px'
            }, 1493, 'easeOutQuad', sunrise);
            $('h1').animate({
                letterSpacing: '52px'
            }, 1493, 'easeOutQuad');
        }

        function sunrise() {
            $('#shine, #flare').css({
                opacity: 1
            });
            $('#shine').animate({
                width: '898px',
                marginLeft: '-449px'
            }, 198, 'easeInOutSine');
        }
        
 });
     

        $(document).scroll(function() {
            var igc = Math.round($(document).scrollTop() / $(window).height()) + 2 - 1;
            $('nav li').removeClass('active');
            $('nav li:nth-child(' + igc + ')').addClass('active');
        });