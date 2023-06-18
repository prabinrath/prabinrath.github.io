
$(document).ready(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly:true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: "*",
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
    

// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("main"), 
//     // select video element         
//     vid = document.getElementById('v0'); 
//     // var vid = $('#v0')[0]; // jquery option

    
    

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// console.log('scroll');
// }
    
// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });
    
    
//     window.requestAnimationFrame(scrollPlay);


  $("#chessProject").animatedModal();
});

$(document).on("click","a[name='project']", function (e) {
    var id = $(this).attr('id');
    var iFramediv;
    document.getElementById("projectPopup").style.visibility = "visible";
    $('#projectVideosChildId').remove();
    if(id === "chessProject"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/RYqMDQ5mVBQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';    
        $("resumePDF").css("display", "none");  
        $("#projectHeading").text("Autonomous Chess Playing Robot");
        $("#projectLocation").text("Research at NIT Rourkela");
        $("#projectDesc").text("A robot for playing the game of chess physically with an user. Powered with strong chess engines and interactive UI it provides all virtual game features and ensures the authenticity of the original board game.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        //$("#projectVideo").attr("src", "https://www.youtube.com/embed/X8OpdWKrOxo");
        $("#projectGithub").text("https://github.com/prabinrath/Roborex_Chess");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Roborex_Chess");
        $("#githubP").text("Github Link to the source project:  ");
    }
    else if(id === "underWaterROV"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/7OgH7KmpCG4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';    
        $("#projectHeading").text("Underwater ROV");
        $("#projectLocation").text("DIY project at NIT Rourkela");
        $("#projectDesc").text("A ROV (Remotely Operated Vehicle) for underwater exploration which can be controlled from an Android app.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id === "dotMatrixPrinter"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/DudBchBL2wo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("2D Dot Matrix Printer");
        $("#projectLocation").text("DIY project at NIT Rourkela");
        $("#projectDesc").text("A 2D Dot matrix printer is a DIY project made from old CD drives.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/Arduino_Projects");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Arduino_Projects");
        $("#githubP").text("Github Link to the source project:  ");
    }
    else if (id==="wirelessBot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/Ir5Be_2lIv8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Semi Autonomous Wireless Bot");
        $("#projectLocation").text("Robotics competition at IIT Kharagpur");
        $("#projectDesc").text("A Bluetooth controlled robot with on board FSR (Force Sensitive Resistor) for weight detection. It has indication LEDs to prompt the user about the detected weights.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "terranBot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/MGdWmmlzG-0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Adaptive Rough Terran Bot");
        $("#projectLocation").text("DIY project at NIT Rourkela");
        $("#projectDesc").text("A manual robot capable of changing inter-wheel distance so as to cover roads of variable width. It also has the capability to grip and lift objects.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
        
    }
    else if(id=== "roomAutomation"){        
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/lEjgfBhAbZ0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Room Automation Module");
        $("#projectLocation").text("Research at NIT Rourkela");
        $("#projectDesc").text("A Room Automation Module for switching electrical appliances remotely through Web, Bluetooth, and IR.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/Room_Automation");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Room_Automation");
        $("#githubP").text("Github Link to the source project:  ");
    }
    else if(id=== "IRobstacledetector"){        
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/ZxR40xoD42Q" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Manual Bot with IR obstacle detector");
        $("#projectLocation").text("DIY project at NIT Rourkela");
        $("#projectDesc").text("A manual robot with IR obstacle detection ability which is controlled through a remote made from DPDT switches.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "ledCube"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/p_xQauBz7h0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("8*8*8 LED Cube");
        $("#projectLocation").text("DIY project at NIT Rourkela");
        $("#projectDesc").text("A 8*8*8 LED cube made using 9 shift registers 74HC595 and Arduino Nano.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/Arduino_Projects");
        $("#projectGithub").attr("href", "https://github.com/prabinrath/Arduino_Projects");
        $("#githubP").text("Github Link to the source project:  ");
    }
    else if(id=== "naoRobot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/D5JEbNLVAhc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Nao Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper was accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "sophiaRobot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/ivn37xJeaeU" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Sphia Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper was accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id=== "kukaRobot"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/OlhGU5ppdws" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("Kuka Robot");
        $("#projectLocation").text("IEEE ROMAN Conference");
        $("#projectDesc").text("My first research paper got accepted at the IEEE ROMAN-2019 conference. I captured some awesome robots with my camera which were put on display at the demonstration aisle. Have a look at these wonderful machines in action.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("");
        $("#githubP").text("");
    }
    else if(id ==="datmoPipeline"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/ix0gz_FZqFg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text(" A novel DATMO pipeline");
        $("#projectLocation").text("Research at University of Calgary ");
        $("#projectDesc").text("A moving object detection pipeline based on relative motion and a novel confidence tracking approach that detects point clusters corresponding to independent moving entities around the robot.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/dynamicslamtool");
        $("#projectGithub").attr("href","https://github.com/prabinrath/dynamicslamtool");        
        $("#githubP").text("Github Link to the source project: ");
    }
    else if(id === "cdsrProject"){
        iFramediv = '<iframe id="projectVideo" src="https://www.youtube.com/embed/cT6YomIWiJ0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
        $("#projectHeading").text("CDSR 2020 and DICTA 2020 paper presentation");
        $("#projectLocation").text("Research at University of Calgary ");
        $("#projectDesc").text("A moving object detection pipeline based on relative motion and a novel confidence tracking approach that detects point clusters corresponding to independent moving entities around the robot.");
        $('#projectVideosID').append($('<div id="projectVideosChildId"><div class="video-container">'+iFramediv+'</div></div>'));
        $("#projectGithub").text("https://github.com/prabinrath/dynamicslamtool");
        $("#projectGithub").attr("href","https://github.com/prabinrath/dynamicslamtool");        
        $("#githubP").text("Github Link to the source project: ");
    }
    else if(id === "btechThesis"){
        var youTubeLinks = ["fT_pL9pibi0", "hQmdx6A4pto", "3IbjEBPWKpk", "66R0jPZouVk", "hnI_WNzaWXo"];
        iFramediv = "";
        for(var i=0; i<youTubeLinks.length; i++){
            iFramediv = iFramediv + '<div class="video-container" style="margin-bottom:5vh"><iframe id="projectVideo'+i+'" src="https://www.youtube.com/embed/'+youTubeLinks[i]+'" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        }
        $("#projectHeading").text("End Effector Stabilization of Robotic Arms");
        $("#projectLocation").text("Research at NIT Rourkela ");
        $("#projectDesc").text("End effector stabilization of robotic arms mounted on mobile robots. The stability of the end effector has been modeled mathematically and a closed-loop feedback control architecture has been used for canceling out the base motion effects on the end effector of the mounted arm.");
        $('#projectVideosID').append($('<div id="projectVideosChildId">'+iFramediv+'</div>'));
        $("#projectGithub").text("https://github.com/prabinrath/fist_lab_arm");
        $("#projectGithub").attr("href","https://github.com/prabinrath/fist_lab_arm");        
        $("#githubP").text("Github Link to the source project: ");
    }
    else if(id === "cartPoleProject"){
        var youTubeLinks = ["pHIsdZSPXUQ", "c03xXi8UCio"];
        iFramediv = "";
        for(var i=0; i<youTubeLinks.length; i++){
            iFramediv = iFramediv + '<div class="video-container" style="margin-bottom:5vh"><iframe id="projectVideo'+i+'" src="https://www.youtube.com/embed/'+youTubeLinks[i]+'" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        }
        $("#projectHeading").text("The Cartpole Control Problem");
        $("#projectLocation").text("Research at NIT Rourkela ");
        $("#projectDesc").text("Trapezoidal collocation based trajectory optimization for the cart pole swing-up problem and Balancing the inverted pendulum on a cart pole system using Linear Quadratic Regulator.");
        $('#projectVideosID').append($('<div id="projectVideosChildId">'+iFramediv+'</div>'));
        $("#projectGithub").text("https://github.com/prabinrath/Learning-Robotics-Matlab");
        $("#projectGithub").attr("href","https://github.com/prabinrath/Learning-Robotics-Matlab");        
        $("#githubP").text("Github Link to the source project: ");
    }
    return;
   
});

