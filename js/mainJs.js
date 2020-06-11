$(function() {
    var scrollTopVal = $(document).scrollTop()

    let niceScrollControl = (width)=>{
        if (width >= 800){
            $("body, .memCont").niceScroll({
                cursorwidth: '6px',
                cursorcolor: 'rgb(219, 171, 131)',
                cursorborder: 'none',
                cursorborderradius: 0,
                zindex: 2000,
                horizrailenabled: false
            })
        } else{
            $(".memCont").niceScroll({
                cursorwidth: '6px',
                cursorcolor: 'rgb(219, 171, 131)',
                cursorborder: 'none',
                cursorborderradius: 0,
                zindex: 1000,
                horizrailenabled: false
            })
        }
    }
    let com = (width)=>{
        if(width <= 500){
            $(".sidedNav").hide()
            $("header").css({position: "fixed", height: "60px"})
        } else{
            $(".sidedNav").show()
            $("header").css({position: "relative", height: "auto"})
        }
    }
    let toTop =(val)=>{
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
    }
    let sidedNavBottom = (vals)=>{
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
    }
    let scroll = (value)=>{
        $("html, body").animate({scrollTop: value}, 1000)
    }
    let closeSubMen = _=>{
        $(".subMCont ul").hide()
        $(".subMCont").animate({width: "0px"}, 400, _=>{
            $(".subMenu").fadeOut()
        })
        $("button").hide()
    }
    $(document).scroll(_=>{
        let scrollValue = $(document).scrollTop()
        toTop(scrollValue)
        sidednav(scrollValue)
        sidedNavBottom(scrollValue)
    })
    let sidednav = (val)=>{
        if(val <= $(window).height()){
            $("#sideHome").attr("class", "circleNav")
            $("#sideAbout, #sideTeam, #sidedContact").attr("class", "")
        } else if(val > $(window).height() && val < $(window).height() +$(".sec2").height()){
            $("#sideHome, #sideTeam, #sidedContact").attr("class", "")
            $("#sideAbout").attr("class", "circleNav")
        } else if(val>= $(window).height()+ $(".sec2").height()){
            $("#sideHome, #sideAbout, #sidedContact").attr("class", "")
            $("#sideTeam").attr("class", "circleNav")
        }
    }
    $(window).resize(_=>{
        let winWidth = $(window).width()
        com(winWidth)
        niceScrollControl(winWidth)
    })
    scroll(0)
    //////////////////////Menu\\\\\\\\\\\\\\\\\\\\\\\

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
            scroll($(window).height()+$(".sec2").height()+40)
        },500)
    })
    $("#sideSubcontacts").on("click", _=>{
        closeSubMen()
        setTimeout(_=>{
            scroll($(window).height()*2+$(".sec2").height()+65)
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
        scroll($(window).height()+$(".sec2").height()+40)
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
            animation:'bounce',
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
    console.log(scrollTopVal)
    sidednav(scrollTopVal)
    toTop(scrollTopVal)
})
