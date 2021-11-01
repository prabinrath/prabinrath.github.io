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
    var iFramediv;
    document.getElementById("projectPopup").style.visibility = "visible";
    $('#projectVideosChildId').remove();
    if(id === "chessProject"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/X8OpdWKrOxo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';    
        $("resumePDF").css("display", "none");  
        $("#projectHeading").text("Autonomous Chess Playing Robot");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A robot for playing the game of chess physically with an user autonomously. Powered with strong chess engines and interactive UI it provides all virtual game features and ensures the authenticity of the original board game.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        //$("#projectVideo").attr("src", "https://www.youtube.com/embed/X8OpdWKrOxo");
        $("#projectGithub").text("https://github.com/prabinrath/Roborex_Chess");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Roborex_Chess");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if(id === "underWaterROV"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/7OgH7KmpCG4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';    
        $("#projectHeading").text("Underwater ROV");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A ROV(Remotely Operated Vehicle) for underwater exploration controlled from an Android app.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id === "dotMatrixPrinter"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/DudBchBL2wo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("2D Dot Matrix Printer");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A 2D Dot matrix printer is a DIY project made from old CD drives. ");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/DotMatrix");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/cleo_codes/tree/master/Robotics/core_ROS");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if (id==="wirelessBot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/Ir5Be_2lIv8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Semi Autonomous wireless Bot");
        $("#projectLocation").text("IIT Kharagpur");
        $("#projectDesc").text("A blue-tooth control bot with on board FSR (Force Sensitive Resistor) for autonomous weight detection and indication LEDs.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "terranBot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/MGdWmmlzG-0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Adaptive Rough Terran Bot");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A manual bot capable of changing inter-wheel distance so as to cover roads of variable width and capable of gripping and lifting objects.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
        
    }
    else if(id=== "roomAutomation"){        
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/lEjgfBhAbZ0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Room Automation Module");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A Room Automation Module for switching electrical appliances remotely from Web, blue-tooth, and IR.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/Room_Automation");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Room_Automation");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if(id=== "IRobstacledetector"){        
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/ZxR40xoD42Q" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Manual Bot with IR obstacle detector");
        $("#projectLocation").text("NIT Rourkela");
        $("#projectDesc").text("A manual bot with IR obstacle detection controlled through a remote made from DPDT switches.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "ledCube"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/p_xQauBz7h0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("8*8*8 LED Cube");
        $("#projectLocation").text("Home - Summer Vacation");
        $("#projectDesc").text("A 8*8*8 LED cube made using 9 shift registers 74HC595 and Arduino Nano.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/cleo_codes/tree/master/Robotics/Core_Arduino/8_8_8_led_cube");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/cleo_codes/tree/master/Robotics/Core_Arduino/8_8_8_led_cube");
        $("#githubP").text("Github Link to the source project - ");
    }
    else if(id=== "naoRobot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/D5JEbNLVAhc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Nao Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "sophiaRobot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/ivn37xJeaeU" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Sphia Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "kukaRobot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/OlhGU5ppdws" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Kuka Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id ==="datmoPipeline"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/ix0gz_FZqFg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text(" A novel DATMO pipeline");
        $("#projectLocation").text("Research at University of Calgary ");
        $("#projectDesc").text("This paper presents a moving object detection pipeline based on relative motion and a novel confidence tracking approach that detects point clusters corresponding to independent moving entities around the robot.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/dynamicslamtool");
        $("#projectGithub").attr("href","https://github.com/prabinrath/dynamicslamtool");        
        $("#githubP").text("Github Link to the source project -");
    }
    else if(id === "cdsrProject"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/cT6YomIWiJ0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("CDSR 2020 and DICTA 2020 paper presentation");
        $("#projectLocation").text("Research at University of Calgary ");
        $("#projectDesc").text("This paper presents a moving object detection pipeline based on relative motion and a novel confidence tracking approach that detects point clusters corresponding to independent moving entities around the robot.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/fist_lab_arm");
        $("#projectGithub").attr("href","https://github.com/prabinrath/fist_lab_arm");        
        $("#githubP").text("Github Link to the source project -");
    }
    else if(id === "btechThesis"){
        var youTubeLinks = ["fT_pL9pibi0", "hQmdx6A4pto", "3IbjEBPWKpk", "66R0jPZouVk", "hnI_WNzaWXo"];
        iFramediv = "";
        for(var i=0; i<youTubeLinks.length; i++){
            iFramediv = iFramediv + '<div class="video-container" style="margin-bottom:5vh"><iframe id="projectVideo'+i+'" src="https://www.youtube.com/embed/'+youTubeLinks[i]+'" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        }
        $("#projectHeading").text("End Effector Stabilization of Robotic Arms");
        $("#projectLocation").text("Research at NIT Rourkela ");
        $("#projectDesc").text("End-effector stabilization of a robotic arm on a dynamic base frame. The stability of the end-effector has been modeled mathematically and a closed-loop feedback control architecture has been used for canceling out the base motion effects on the end-effector of the mounted arm.");
        $('#projectVideosID').append($('<div id="projectVideosChildId">'+iFramediv+'</div>'));
        $("#projectGithub").text("https://github.com/prabinrath/dynamicslamtool");
        $("#projectGithub").attr("href","https://github.com/prabinrath/dynamicslamtool");        
        $("#githubP").text("Github Link to the source project -");
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
       
        if(id === "#navIcon"){
            var height = $(window).scrollTop();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if(height === 0)
            {
                $(".nav-responsive").toggle( 'slow');
            }
            return;
        }
        
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });

    $(".navbar-fixed-top").addClass("bg-nav");
    // Menu opacity
    
    /*
    if ($(window).scrollTop() > 0) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });*/



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
            filter: ".research",
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
    $("#underWaterROV, #chessProject, #dotMatrixPrinter, #wirelessBot, #terranBot, #roomAutomation, #IRobstacledetector, #ledCube, #resumeButton, #kukaRobot, #sophiaRobot, #naoRobot, #cdsrProject, #datmoPipeline, #btechThesis").animatedModal();
    
});