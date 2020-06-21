$(function() {
    'use strict'
    var scrollTopVal = $(document).scrollTop()

    var niceScrollControl, com, sidedNavBottom, scroll, closeSubMen, toTop, sidednav;
    (niceScrollControl=(width)=>{
        if (width >= 800){
            $("body, .memCont").niceScroll({
                cursorwidth: '6px',
                cursorcolor: 'rgb(219, 171, 131)',
                cursorborder: 'none',
                cursorborderradius: 0,
                zindex: 2000,
                horizrailenabled: false
            })
        } 
    })
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
        $("button").hide()
    });
    (sidednav = _=>{
        let homeValue = $(".mainTitle").attr('class')
        let aboutValue = $(".headSec2").attr('class')
        let teamValue = $(".headSec3").attr('class')

        $("#sideHome").attr("class", "circleNav")
        $("#sidedContact, #sideAbout, #sideTeam").attr('class', "")
        
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
    });
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
        let winWidth = $(window).width()
        com(winWidth)
        niceScrollControl(winWidth)
    })
    scroll(0)
    ////////////////////// Menu \\\\\\\\\\\\\\\\\\\\\\\

    $(".fa-bars").on("click", _=>{
        $("button").fadeIn(400)
        $(".subMenu").fadeIn(400, _=>{
            $(".subMCont").animate({width: "20%"}, 400,_=>{
                $(".subMCont ul").show()
            })
        })
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
            scroll($(window).height()+$(".sec2").height()-210)
        },500)
    })
    $("#sideSubcontacts").on("click", _=>{
        closeSubMen()
        setTimeout(_=>{
            scroll($(window).height()+$(".sec2").height()+65)
        },500)
    })
    $("#toAbout").on("click", _=>{
        console.log(true)
        $("html, body").animate({ scrollTop: $(window).height() }, 700);
    })
    $("#sideHome, #homeMenu").on("click", _=>{
        scroll(0)
    })
    $("#aboutMenu, #sideAbout").on("click", _=>{
        scroll($(window).height()+10)
    })
    $("#teamMenu, #sideTeam").on("click", _=>{
        scroll($(window).height()+$(".sec2").height()-212)

    })
    $("#contactMenu, #sidedContact").on("click", _=>{
        scroll($(window).height()*2+$(".sec2").height()+65)
    })
    $(".fa-times").on("click", _=>{
        $(".cont").fadeOut(400, _=>{
            $(".subscribe").animate({"height": "0"}, 400)
        })
    })

    $("#toTop").on("click", _=>{
        console.log(true)
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
            $(".cont").fadeIn()
        })
    })
    let docState = _=>{
        var state = document.readyState
        if(state == "complete"){
            $(".start").fadeOut()
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
    })

    com($(window).width())
    niceScrollControl($(window).width())
    docState()
    sidedNavBottom(scrollTopVal)
    sidednav()
    toTop(scrollTopVal)
    setTimeout(_=>{
        $(".subscribe").animate({"height": "100vh"}, 400, _=>{
            $(".cont").fadeIn()
        })
    }, 5000)
    setTimeout(_=>{
        console.clear()
    }, 500)
})
