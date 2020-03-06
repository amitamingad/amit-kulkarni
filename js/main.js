$(document).ready(function () {

    var t;
    console.log($("#myCarousel .active"));
    var start = $('#myCarousel').find('.active').attr('data-interval');
    t = setTimeout("$('#myCarousel').carousel({interval: 10000});", start - 1000);

    $('#myCarousel').on('slid.bs.carousel', function () {
        clearTimeout(t);
        var duration = $(this).find('.active').attr('data-interval');
        console.log(duration);
        $('#myCarousel').carousel('pause');
        t = setTimeout("$('#myCarousel').carousel();", duration - 1000);
    })

    $('.carousel-control.right').on('click', function () {
        clearTimeout(t);
    });

    $('.carousel-control.left').on('click', function () {
        clearTimeout(t);
    });

    // Adding timeline animation using waypoint
    var animationEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";
    $('.timeline-panel').waypoint(function () {
        var animationRight = "animated slideInRight";                
        $('.container ul li:nth-child(odd) .timeline-panel').addClass(animationRight);/*.one(animationEnd,*/
        // function(){
        //     $('.container ul li:nth-child(odd) .timeline-panel').removeClass(animationRight);            
        // });
    }, { offset: '50%' });

    $('.timeline-panel').waypoint(function () {
        var animationLeft = "animated slideInLeft";        
        $('.container ul li:nth-child(even) .timeline-panel').addClass(animationLeft);/*.one(animationEnd,*/
        // function(){
        //     $('.container ul li:nth-child(even) .timeline-panel').removeClass(animationLeft);            
        // });
    }, { offset: '50%' });

    // $('.timeline-panel').hover(function () {
    //     $('.timeline-panel').css("box-shadow", "10px 10px 5px grey");/*.one(animationEnd,
    //         function () {
    //             $('timeline-panel').removeClass("hoverable");
    //         });*/
    // });
    // Adding progress bar animation using waypoint
    $('.progress-bar').waypoint(function () {

        $('.skills').addClass("animated lightSpeedIn").one(animationEnd,

            function () {

                $('.progress .progress-bar').css("width",
                    function () {
                        return $(this).attr("aria-valuenow") + "%";
                    }
                )
            }

        )
    }, { offset: '75%' });



    $('#hamId').on("click", function () {

        $("#hamId").toggleClass("collapsed");
        $("#menu").toggleClass("zoomIn");
        $("#menu").toggleClass("ham-menu-anime");
        $("#lineId").toggleClass("line-icon-bg");


    });



});
