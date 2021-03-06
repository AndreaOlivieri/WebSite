$(document).ready(function(){

    "use strict";

    if($('.contact_page').length > 0){
        /*
         ----------------------------------------------------------------------
         Map
         ----------------------------------------------------------------------
         */
        var map;
        function initialize_map() {

            if ($('.map').length) {
                var myLatLng = new google.maps.LatLng(41.809119, 12.470637);
                var mapOptions = {
                    zoom: 16,
                    center: myLatLng,
                    scrollwheel: false,
                    panControl: false,
                    zoomControl: true,
                    scaleControl: false,
                    mapTypeControl: false,
                    streetViewControl: false
                };
                map = new google.maps.Map(document.getElementById('map'), mapOptions);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Andrea Olivieri',
                    icon: '/assets/images/marker-color-red.png'
                });
            } else {
                return false;
            }

        }
        initialize_map();
        //google.maps.event.addDomListener(window, 'load', initialize_map);


        /*
         ----------------------------------------------------------------------
         Forms
         ----------------------------------------------------------------------
         */

        /* Email validation */
        function valid_email_address(email) {
            var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
            return pattern.test(email);
        }

        /*
         ----------------------------------------------------------------------
         Contact form validation
         ----------------------------------------------------------------------
         */

        $("#submit-btn").on("click", function(){
            $("#user-status").val("yes");
        });

        $("#contact-form").submit( function() {


            if ( !valid_email_address( $("#user-email").val() ) || $("#user-name").val().length <= 2  )  {

                if ( !valid_email_address( $("#user-email").val() ) ) {
                    $("#user-email").addClass("error");
                }
                if ( $("#user-name").val().length <= 2 ){
                    $("#user-name").addClass("error");
                }

            } else {

                var data_of_form = $(this).serialize();

                $.ajax({
                    url: 'assets/php/contact.php',
                    data: data_of_form,
                    type: 'POST',
                    success: function(data) {
                        if ( data == "success" )
                        {
                            $("#user-name").val("");
                            $("#user-email").val("");
                            $("#user-message").val("");

                            $(".info-message-form p").text("Message sent!");
                            $(".info-message-form").addClass('success');
                            setTimeout(
                                function(){
                                    $(".info-message-form").removeClass('success');
                                    $(".info-message-form p").text("");
                                }, 5000
                            );
                        } else {
                            alert(data);
                            $(".info-message-form p").text("Error");
                            $(".info-message-form").addClass('error');
                            setTimeout(
                                function(){
                                    $(".info-message-form").removeClass('error').fadeOut(500);
                                    $(".info-message-form p").text("");
                                }, 5000
                            );
                        }
                    },
                    error: function(){
                        alert("te1");
                        $(".info-message-form p").text("Error");
                        $(".info-message-form").addClass('error');
                        setTimeout(
                            function(){
                                $(".info-message-form").removeClass('error');
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    }
                });

            }

            return false;
        });

        $(".close-msg").on("click", function() {
            $(this).parent().removeClass("error");
        });

        $("#user-name, #user-email").on("click", function() {

            $(this).removeClass("error");

        });

    }
}); // End $(document).ready(function(){
