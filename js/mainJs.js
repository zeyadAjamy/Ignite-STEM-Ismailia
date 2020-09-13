$(function() {
    'use strict'
    var scrollTopVal = $(document).scrollTop()
    var niceScrollControl, com, sidedNavBottom, scroll,
        closeSubMen, toTop, sidednav,vidInt=null, winWidth = $(window).width(), winHeight = $(window).height(), t=0;
    $(".subMCont").css("height", winHeight);

    ( niceScrollControl=(width)=>{
        if (width >= 800){
            $("body, .memCont").niceScroll({
                cursorwidth: '6px',
                cursorcolor: 'rgb(219, 171, 131)',
                cursorborder: 'none',
                cursorborderradius: 0,
                zindex: 3000,
                horizrailenabled: false
            })
        }
    });
    ( com = (width)=>{
        if(width <= 500){
            $(".sidedNav").hide()
            $("header").css({position: "fixed", height: "60px"})
            $(".infoCont").attr("class", "infoCont container-fluid")
            $(".IgniteGene, .IgniteIsmailia").css({width: "100%", marginLeft: "0px", marginRight: "0px"})
            $(".sec3").css({paddingLeft: "0px"})
        } else{
            $(".sidedNav").show()
                 $("header").css({position: "relative", height: "auto"})
            $(".infoCont").attr("class", "infoCont row container-fluid")
            $(".IgniteGene, .IgniteIsmailia").css({width: "100%", marginLeft: "40px", marginRight: "15px"})
            $(".sec3").css({paddingLeft: "25px"})
        }
    });
    ( toTop =(val)=>{
        if(val>= $(window).height()){
            $("#toTop").fadeIn()
        } else{
            $("#toTop").fadeOut()
        }
        if(val >= "54"){
            $(".sidedNav").css("top", "0px")
        } else{
            $(".sidedNav").css("top", 54-val)
        }
    });
    ( sidedNavBottom = (vals)=>{
        if(vals == NaN){
            vals=0
        }
        var contRatio = $(document).height()-64;
        var footerHeight = 64
        if(vals+$(window).height() >= contRatio){
            $("#sideHome, #sideAbout, #sideTeam").attr("class", "")
            $("#sidedContact").attr("class", "circleNav")
            $(".sidedNav").css("top", ((contRatio)-(vals+$(window).height())))
        } else if(vals <= contRatio-footerHeight){
            toTop(vals)
        }
    });
    ( scroll = (value)=>{
        $("html, body").animate({scrollTop: value}, 1000)
    });
    ( closeSubMen = _=>{
        $(".subMCont ul").hide()
        $(".subMCont").animate({width: "0px"}, 400, _=>{
            $(".subMenu").fadeOut()
        })
        $("section, .sidedNav, #blogHeader").animate({marginLeft: "0%"}, 400)
    });
    ( sidednav = _=>{
        let homeValue = $(".mainTitle").attr('class')
        let aboutValue = $(".headSec2").attr('class')
        let teamValue = $(".headSec3").attr('class')
        if(homeValue == undefined){
            $("#blogs, #sideSubBlogs").css("color", "rgb(219, 171, 131)")
        }else{
            if(homeValue.includes("bounceIn")){
                $("#sideHome").attr("class", "circleNav")
                $("#sidedContact, #sideAbout, #sideTeam").attr('class', "")
            } else if(aboutValue.includes("bounceIn")){
                $("#sideAbout").attr("class", "circleNav")
                $("#sidedContact, #sideHome, #sideTeam").attr('class', "")
            } else if(teamValue.includes("bounceIn")){
                $("#sideTeam").attr("class", "circleNav")
                $("#sidedContact, #sideHome, #sideAbout").attr('class', "")
            }
        }
    });
    
    let openHackDetails = _=>{
        $(".hackAll").show().css({height: "100vh", zIndex: "auto"});
        $("#hackVid").css("z-index", "auto")
        setTimeout(_=>{
            $(".hackClose").fadeIn();
            $(".hack .cont").fadeIn();
        },1000)
    }
    let closeHackDetails = _=>{
        $(".hackAll").show().css({height: "0px", zIndex: "-1"});
        vidInt = setTimeout(_=>{
            $(".hackClose").fadeOut();
            $(".cont").fadeOut();
        })
    }
    $(document).scroll(_=>{
        let scrollValue = $(document).scrollTop()
        toTop(scrollValue)
        sidedNavBottom(scrollValue)
        sidednav()
        if(scrollValue+$(window).height() == $(document).height()){
            $("#sidedContact").attr("class", "circleNav")
            $("#sideTeam, #sideHome, #sideAbout").attr('class', "")
        }
    });
    $(window).resize(_=>{
         winWidth = $(window).width()
         winHeight = $(window).height()

        $("#fluid_video_wrapper_hackVid").css({height:winHeight, width: winWidth})
        com(winWidth)
        niceScrollControl(winWidth)
        $(".subMCont").css("height", $(window).height());
    })
    $(document).on("click", _=>{
        closeSubMen()
    })

    // Onload
    scroll(0)
    $("#sideHome").attr("class", "circleNav")
    $("#sidedContact, #sideAbout, #sideTeam").attr('class', "")
    closeSubMen();
    setTimeout(_=>{
        $("#fluid_video_wrapper_hackVid").css({height:winHeight+18, width: winWidth})
    },100)
    vidInt = setInterval(function (){ 
        let vid = document.getElementById("hackVid");
        t = vid.currentTime;
        if(t>61){
            openHackDetails()
        } else{
            closeHackDetails();
        }  
    },500);
    $("#hackClose").on("click", _=>{
        clearInterval(vidInt)
        $(".hack").css("display", "none")
    })


    // video
    fluidPlayer(
       'hackVid', {
        "layoutControls": {
            "controlBar": {
                "autoHideTimeout": 3,
                "animated": null,
                "autoHide": null
            },
            "autoPlay": true,
            "mute": false,
            "allowTheatre": true,
            "playPauseAnimation": false,
            "playbackRateEnabled": false,
            "allowDownload": false,
            "playButtonShowing": false,
            "fillToContainer": false,
            "posterImage": ""
        },
        "vastOptions": {
            "adList": [],
            "adCTAText": false,
            "adCTATextPosition": ""
        }
        })
    ////////////////////// Menu \\\\\\\\\\\\\\\\\\\\\\\
    $(".fa-bars").on("click", (event)=>{
        event.stopPropagation()
        $(".subMenu").fadeIn(400, _=>{
            $(".subMCont").animate({width: "20%"}, 400,_=>{
                $(".subMCont ul").show()
            })
        })
        setTimeout(_=>{
            $("section, .sidedNav, #blogHeader").animate({marginLeft: "20%"}, 400)
        },400)
    })
    $(".subMCont").on("click", (event)=>{
        event.stopPropagation()
    })
    $("#closeSubMenu").on("click", _=>{
        closeSubMen()
    })
    $("#sideSubHome").on("click", _=>{
        closeSubMen()
        setTimeout(_=>{
            scroll(0)
        },500)
    })
    $("#sideSubAbout").on("click", _=>{
        closeSubMen()
        setTimeout(_=>{
            scroll($(window).height()+10)
        },500)
    })
    $("#sideSubTeam").on("click", _=>{
        closeSubMen()
        setTimeout(_=>{
            scroll($(window).height()+$(".sec2").height()-125)
        },500)
    })
    $("#sideSubcontacts").on("click", _=>{
        closeSubMen()
        setTimeout(_=>{
            scroll($(window).height()+$(".sec2").height()+65)
        },500)
    })
    $("#toAbout").on("click", _=>{
        $("html, body").animate({ scrollTop: $(window).height() }, 700);
    })
    $("#sideHome, #homeMenu").on("click", _=>{
        scroll(0)
    })
    $("#aboutMenu, #sideAbout").on("click", _=>{
        scroll($(window).height()+10)
    })
    $("#teamMenu, #sideTeam").on("click", _=>{
        scroll($(window).height()+$(".sec2").height()-125)
    })
    $("#contactMenu, #sidedContact").on("click", _=>{
        scroll($(window).height()*2+$(".sec2").height()+65)
    })
    $(".fa-times").on("click", _=>{
        $(".subscribe .cont").fadeOut(400, _=>{
        $(".subscribe").animate({"height": "0"}, 400)
        })
    })

    $("#toTop").on("click", _=>{
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })

    $("#massageUs").on("click", _=>{
        $("#massage").animate({height: "100vh"}, 500, _=>{
            $(".centerv").fadeIn()
        })
    })
    $("#closeMassageCont").on("click", _=>{
        $(".centerv").fadeOut(400, _=>{
            $("#massage").animate({height: "0px"}, 500)
        })
    })

    $(".fa-bell").on("click", _=>{
        $(".subscribe").animate({"height": "100vh"}, 400, _=>{
            $(".cont, #submit-form").fadeIn()
        })
    })
    let docState = _=>{
        var state = document.readyState
        if(state == "complete"){
            $(".start").fadeOut()
            setTimeout(_=>{
                $(".subscribe").animate({"height": "100vh"}, 400, _=>{
                    $(".cont").fadeIn()
                })
            }, 5000)
        } else{
            setTimeout(_=>{
                docState()
            }, 400)
        }
    }

    ////////////////// Animations \\\\\\\\\\\\\\\\\\\\\\
    $('.tltFirst').textillate({
        loop:true
    });
    $('.pIn').textillate({
        loop:false,
        speed: 'faster'
    });
    $(window).on('load scroll resize', function() {
        $('.mainTitle').anisview({
            animation:'bounceIn',
            direction: 'both',
            repeat: true
        });
        $('.headSec2, .headSec3').anisview({
            animation:'bounceIn',
            direction: 'both',
            repeat: true
        });
        $('.social .fa').anisview({
            animation: 'tada',
            direction: 'both',
            repeat: true
        });
    });
    /////////////////// Blogs \\\\\\\\\\\\\\\\\\\\\
    $.getJSON("../js/blogs.json", function(data) {
        for(let i in data){
            var html = 
                `<div class="blogShowCont _${data[i].name}">
                    <h3 class="blogHeader">${data[i].Header}</h3><img class="blogImg" src="../img/${data[i].imgURL}.jpg">
                    <p class="blogCont">${data[i].Content}</p>
                    <div class="more"><img src="../img/backGrad.png" class="bgFeat"><span onclick="blogOpen(${data[i].name})">Read More...</span></div>
                </div>`
            $(".allBlogs").append(html)
        }
    });
    /////////////////// Apply CountDown \\\\\\\\\\\\\\\\\\
    $.getScript('js/countdown.js', function(){});
    com($(window).width())
    niceScrollControl($(window).width())
    sidedNavBottom(scrollTopVal)
    sidednav()
    toTop(scrollTopVal)
    setInterval(_=>{
        console.clear()
    }, 1000)
    docState()
})
function blogOpen(i){
    var that = `._${i}`
    if($(that).css("height") == "450px"){
        $(that).siblings().css({
            height: "450px",
            paddingBottom: "0px",
            opacity: "0.5"
        })
        $(that).css({
            height: "auto",
            paddingBottom: "40px",
            opacity: "1"
        })
        $(`${that} .more span`).text("Read Less...")
    }else{
        $(that).siblings().css({
            height: "450px",
            paddingBottom: "0px",
            opacity: "1"
        })
        $(that).css({
            height: "450px",
            paddingBottom: "0px",
            opacity: "1"
        }) 
        $(`${that} .more span`).text("Read More...")
    }
};

