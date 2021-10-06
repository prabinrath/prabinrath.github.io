// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})


$(document).on("click","a[name='project']", function (e) {
    var id = $(this).attr('id');
    document.getElementById("projectPopup").style.visibility = "visible";
    //document.getElementById("resumePopup").style.visibility = "hidden";
    if(id === "chessProject"){
        $("resumePDF").css("display", "none");  
        $("#projectHeading").text("Autonomous Chess Playing Robot");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A robot for playing the game of chess physically with an user autonomously. Powered with strong chess engines and interactive UI it provides all virtual game features and ensures the authenticity of the original board game.");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/X8OpdWKrOxo");
        $("#projectGithub").text("https://github.com/prabinrath/Roborex_Chess");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Roborex_Chess");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if(id === "underWaterROV"){
        $("#projectHeading").text("Underwater ROV");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A ROV(Remotely Operated Vehicle) for underwater exploration controlled from an Android app.");
        $("#projectVideo").attr("src","https://www.youtube.com/embed/7OgH7KmpCG4");
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id === "dotMatrixPrinter"){
        $("#projectHeading").text("2D Dot Matrix Printer");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A 2D Dot matrix printer is a DIY project made from old CD drives. ");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/DudBchBL2wo");
        $("#projectGithub").text("https://github.com/prabinrath/DotMatrix");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/cleo_codes/tree/master/Robotics/core_ROS");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if (id==="wirelessBot"){
        $("#projectHeading").text("Semi Autonomous wireless Bot");
        $("#projectLocation").text("IIT Kharagpur");
        $("#projectDesc").text("A blue-tooth control bot with on board FSR (Force Sensitive Resistor) for autonomous weight detection and indication LEDs.");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/Ir5Be_2lIv8");
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "terranBot"){
        $("#projectHeading").text("Adaptive Rough Terran Bot");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A manual bot capable of changing inter-wheel distance so as to cover roads of variable width and capable of gripping and lifting objects.");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/MGdWmmlzG-0");
        $("#projectGithub").text("");
        $("#githubP").text("");
        
    }
    else if(id=== "roomAutomation"){
        $("#projectHeading").text("Room Automation Module");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A Room Automation Module for switching electrical appliances remotely from Web, blue-tooth, and IR.");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/lEjgfBhAbZ0");
        $("#projectGithub").text("https://github.com/prabinrath/Room_Automation");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Room_Automation");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if(id=== "IRobstacledetector"){
        $("#projectHeading").text("Manual Bot with IR obstacle detector");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A manual bot with IR obstacle detection controlled through a remote made from DPDT switches.");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/ZxR40xoD42Q");
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "ledCube"){
        $("#projectHeading").text("8*8*8 LED Cube");
        $("#projectLocation").text("Home - Summer Vacation");
        $("#projectDesc").text("A 8*8*8 LED cube made using 9 shift registers 74HC595 and Arduino Nano.");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/p_xQauBz7h0");
        $("#projectGithub").text("https://github.com/prabinrath/cleo_codes/tree/master/Robotics/Core_Arduino/8_8_8_led_cube");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/cleo_codes/tree/master/Robotics/Core_Arduino/8_8_8_led_cube");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if(id=== "naoRobot"){
        $("#projectHeading").text("Nao Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/D5JEbNLVAhc");
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "sophiaRobot"){
        $("#projectHeading").text("Sphia Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/ivn37xJeaeU");
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "kukaRobot"){
        $("#projectHeading").text("Kuka Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action");
        $("#projectVideo").attr("src", "https://www.youtube.com/embed/OlhGU5ppdws");
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    return;
   
});


$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#underWaterROV, #chessProject, #dotMatrixPrinter, #wirelessBot, #terranBot, #roomAutomation, #IRobstacledetector, #ledCube, #resumeButton, #kukaRobot, #sophiaRobot, #naoRobot").animatedModal();
    $("#resumeButton").animatedModal();
    
});