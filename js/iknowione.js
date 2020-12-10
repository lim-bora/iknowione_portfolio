if (!(matchMedia("screen and (max-width: 768px)").matches)) {
$(window).scroll(function(cateUnderBar){
        var scrollT =  $(this).scrollTop(); 
        if(scrollT != 0) {
            $('#header').css("padding","0");
            $('#header').css("height","95px");
            $('#header').css("transition","0.3s");
            $('.cate').css("line-height","80px");
            $('.subnav').css("line-height","80px");
        }else{
            $('#header').css("padding","10px 0");
            $('#header').css("height","115px");
            $('.cate').css("line-height","95px");
            $('.subnav').css("line-height","95px");
            $('#header').css("transition","0.3s");
        }
});

$('#shoppingCate').mouseover(function(){
    $('.nav_bg').css('visibility','visible');
    $('.nav_bg').css('height','160px');
})
$('#shoppingCate').mouseout(function(){
    $('.nav_bg').css('visibility','hidden');
    $('.nav_bg').css('height','0px');
})
$('#communityCate').mouseover(function(){
    $('.nav_bg').css('visibility','visible');
    $('.nav_bg').css('height','100px');
})
$('#communityCate').mouseout(function(){
    $('.nav_bg').css('visibility','hidden');
    $('.nav_bg').css('height','0px');
})

const mainSlide = document.querySelector('.mainSlide');
const mainimg_box01 = document.querySelector('.mainimg_box01');
const mainimg_box02 = document.querySelector('.mainimg_box02');
const mainSlide_txt = document.querySelectorAll('.mainSlide_txt p');

function MainSlide() { 
    let imgIndex = 0;

    $(function(){
		
		var imgIndex = 0;
		
		setInterval(function(){
			
			imgIndex++;
			if(imgIndex==5){
				imgIndex=0;
			}
			
			$(".mainimg_box01 img").stop().fadeOut();
			$(".mainimg_box01 img").eq(imgIndex).stop().fadeIn();
			$(".mainimg_box02 img").stop().fadeOut();
            $(".mainimg_box02 img").eq(imgIndex).stop().fadeIn();
            $(".mainSlide_txt p").stop().fadeOut();
            $(".mainSlide_txt p").eq(imgIndex).stop().fadeIn();

            $('.mainslide_pager span').removeClass('on');
            $('.mainslide_pager span').eq(imgIndex).addClass('on');

            $(".mainslide_pager span").click(function(){ 
                var i = $(this).index(); 
                
                if(i==5){
                    i=0;
                }
                $(".mainimg_box01 img").stop().fadeOut();
                $(".mainimg_box01 img").eq(i).stop().fadeIn();
                $(".mainimg_box02 img").stop().fadeOut();
                $(".mainimg_box02 img").eq(i).stop().fadeIn();
                $(".mainSlide_txt p").stop().fadeOut();
                $(".mainSlide_txt p").eq(i).stop().fadeIn();
                
                $('.mainslide_pager span').removeClass('on');
                $('.mainslide_pager span').eq(i).addClass('on');
                i++;
            });
		},3000);		
	});
}
MainSlide();

const productName = document.querySelectorAll('.productName');
const productExplanation = document.querySelectorAll('.productExplanation');
const retailPrice = document.querySelectorAll('.retailPrice');
const salePrice = document.querySelectorAll('.salePrice');
const small_product_img = document.querySelectorAll(".small_product_img img");
const small_productTop = document.querySelectorAll('.small_productTop');
const big_productImg = document.querySelectorAll('.big_product img');
const big_product = document.querySelectorAll('.big_product');
const blackBg = document.querySelectorAll('.blackBg');

blackBg[0].onmouseover = function(){
    big_productImg[0].style.transform = "scale(1.1)"
    big_productImg[0].style.transition = "all 0.6s"
}
blackBg[0].onmouseout = function(){
    big_productImg[0].style.transform = "scale(1)"
    big_productImg[0].style.transition = "all 0.6s"
}
$(big_product[0]).mouseover(function(){
    $(blackBg).css('display','block');
});
$(big_product[0]).mouseout(function(){
    $(blackBg).css('display','none');
});
blackBg[1].onmouseover = function(){
    big_productImg[1].style.transform = "scale(1.1)"
    big_productImg[1].style.transition = "all 0.6s"
}
blackBg[1].onmouseout = function(){
    big_productImg[1].style.transform = "scale(1)"
    big_productImg[1].style.transition = "all 0.6s"
}
$(big_product[1]).mouseover(function(){
    $(blackBg).css('display','block');
});
$(big_product[1]).mouseout(function(){
    $(blackBg).css('display','none');
});

    var allprne = 0;

    $('.Allnext').click(function(){
        $('.productBg').stop().animate({
            'margin-left':-100+'%'
        })
    });
    $('.Allprev').click(function(){
        $('.productBg').stop().animate({
            'margin-left': 0+'%'
        })
    });




const product_box01 = document.querySelector('#product_box01');
const product_box02 = document.querySelector('#product_box02');

const mainvisual_img = document.querySelectorAll(".mainvisual_img img");
for (let i = 0; i < mainvisual_img.length; i++) {
    mainvisual_img[i].onmouseover = function(){
        mainvisual_img[i].style.transform = 'scale(1.1)';
        mainvisual_img[i].style.transition = 'all 0.6s';
    } 
    mainvisual_img[i].onmouseout = function(){
        mainvisual_img[i].style.transform = 'scale(1.0)';
        mainvisual_img[i].style.transition = 'all 0.6s';
    }   
}

var tabON = $("#tabCategory_center .tabs li.tabOn").index();
var tab1 = document.querySelectorAll('.tab1 li');
var tab2 = document.querySelectorAll('.tab2 li');
var tab3 = document.querySelectorAll('.tab3 li');
var tab4 = document.querySelectorAll('.tab4 li');
var tab5 = document.querySelectorAll('.tab5 li');
let tabSelectNum = 0;
var prdImg = document.querySelectorAll('.prdImg');

var prdImgTab1 = document.querySelectorAll('#tab01 .prdImg img');
var prdImgTab2 = document.querySelectorAll('#tab02 .prdImg img');
var prdImgTab3 = document.querySelectorAll('#tab03 .prdImg img');
var prdImgTab4 = document.querySelectorAll('#tab04 .prdImg img');
var prdImgTab5 = document.querySelectorAll('#tab05 .prdImg img');
var hashTitle = document.querySelectorAll('.tabs li'); 
var tabBox = document.querySelectorAll('.tabBox');
var cateTxt = document.querySelectorAll('.cateTxt');

var cateTxt1 = document.querySelectorAll('.Text1');
var cateTxt2 = document.querySelectorAll('.Text2');
var cateTxt3 = document.querySelectorAll('.Text3');
var cateTxt4 = document.querySelectorAll('.Text4');
var cateTxt5 = document.querySelectorAll('.Text5');

var cateSelectIndex = 0;


$('#tabCategory_center .tabs li').click(function(){
    for (let p = 0; p < hashTitle.length; p++) {
        $(hashTitle[p]).not(this).removeClass('tabOn');
        $(this).addClass("tabOn");
    }
});
    
    $(".tab2").hide();
    $(".tab3").hide();
    $(".tab4").hide();
    $(".tab5").hide();
    $(".tab1").show();
    $(prdImg[0]).show();
    $(prdImg[1]).hide();
    $(prdImg[2]).hide();
    $(prdImg[3]).hide();
    $(prdImg[4]).hide();
        
    $(tabBox).removeClass("tabBoxOn");

    $(".tabs .need").click(function(){
        $(cateTxt).css('display','none');
        $(cateTxt[0]).css('display','block');
        $(".tab1").show();
        $(prdImg).hide();
        $(prdImg[0]).show(); 
        cateSelectIndex = 0;
        
        $(tab1).removeClass('txtOn');
        $(tab1[0]).addClass('txtOn');
        
        $(prdImgTab1).removeClass('ImgOn');
        $(prdImgTab1[0]).addClass('ImgOn');
        tabSelectNum=0;
    })

    $(".tabs .love").click(function(){
        $(cateTxt).css('display','none');
        $(cateTxt[1]).css('display','block');
        $(".tab2").show();
        $(prdImg).hide();
        $(prdImg[1]).show();
        cateSelectIndex = 1;
        
        $(tab2).removeClass('txtOn');
        $(tab2[0]).addClass('txtOn');
        
        $(prdImgTab2).removeClass('ImgOn');
        $(prdImgTab2[0]).addClass('ImgOn');
        tabSelectNum=0;
    })
    $(".tabs .touch").click(function(){
        $(cateTxt).css('display','none');
        $(cateTxt[2]).css('display','block');
        $(".tab3").show();
        $(prdImg).hide();
        $(prdImg[2]).show();
        cateSelectIndex = 2;

        $(tab3).removeClass('txtOn');
        $(tab3[0]).addClass('txtOn');
        
    3
        $(prdImgTab3).removeClass('ImgOn');
        $(prdImgTab3[0]).addClass('ImgOn');
        tabSelectNum=0;
    })
    $(".tabs .like").click(function(){
        $(cateTxt).css('display','none');
        $(cateTxt[3]).css('display','block');
        $(".tab4").show();
        $(prdImg).hide();
        $(prdImg[3]).show();
        cateSelectIndex = 3;

        $(tab4).removeClass('txtOn');
        $(tab4[0]).addClass('txtOn');
        
        
        $(prdImgTab4).removeClass('ImgOn');
        $(prdImgTab4[0]).addClass('ImgOn');
        tabSelectNum=0;
    })
    $(".tabs .wish").click(function(){
        $(cateTxt).css('display','none');
        $(cateTxt[4]).css('display','block');
        $(".tab5").show();
        $(prdImg).hide();
        $(prdImg[4]).show();
        cateSelectIndex = 4;

        $(tab5).removeClass('txtOn');
        $(tab5[0]).addClass('txtOn');
        
        
        $(prdImgTab5).removeClass('ImgOn');
        $(prdImgTab5[0]).addClass('ImgOn');
        tabSelectNum=0;
    })

$('.btnprdby').mouseover(function(){
    $(this).css("background-color","#000");
    $(this).css("color","#fff");
});
$('.btnprdby').mouseout(function(){
    $(this).css("background-color","#fff");
    $(this).css("color","#000");
});

var tabBoxOn = $(".cateBox #cateBoxTxt div.tabBoxOn").index();
var txtOn = $("#cateBoxTxt .tabBox .cateTxt li.txtOn").index();
var ImgOn = $(".thumbnail .prdImg img.ImgOn").index();


$('.next').click(function(){
    switch (cateSelectIndex) {
        case 0:
            if(tabSelectNum < tab1.length - 1)
            {
                $(tab1[tabSelectNum]).removeClass('txtOn');
                $(tab1[tabSelectNum]).next(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab1[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab1[tabSelectNum]).next(ImgOn).addClass('ImgOn');
                tabSelectNum++;
            }        
            break;
        case 1:
            if(tabSelectNum < tab2.length - 1)
            {
                $(tab2[tabSelectNum]).removeClass('txtOn');
                $(tab2[tabSelectNum]).next(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab2[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab2[tabSelectNum]).next(ImgOn).addClass('ImgOn');
                tabSelectNum++;
            }   
            break;
        case 2:
            if(tabSelectNum < tab3.length - 1)
            {
                $(tab3[tabSelectNum]).removeClass('txtOn');
                $(tab3[tabSelectNum]).next(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab3[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab3[tabSelectNum]).next(ImgOn).addClass('ImgOn');
                tabSelectNum++;
            }   
            break;
        case 3:
            if(tabSelectNum < tab4.length - 1)
            {
                $(tab4[tabSelectNum]).removeClass('txtOn');
                $(tab4[tabSelectNum]).next(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab4[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab4[tabSelectNum]).next(ImgOn).addClass('ImgOn');
                tabSelectNum++;
            }   
            break;
        case 4:
            if(tabSelectNum < tab5.length - 1)
            {
                $(tab5[tabSelectNum]).removeClass('txtOn');
                $(tab5[tabSelectNum]).next(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab5[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab5[tabSelectNum]).next(ImgOn).addClass('ImgOn');
                tabSelectNum++;
            }   
            break;
        default:
            break;
    }
});

$('.prev').click(function(){
    switch (cateSelectIndex) {
        case 0:
            if(tabSelectNum > 0)
            {
                $(tab1[tabSelectNum]).removeClass('txtOn');
                $(tab1[tabSelectNum]).prev(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab1[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab1[tabSelectNum]).prev(ImgOn).addClass('ImgOn');
                tabSelectNum--
            }        
            break;
        case 1:
            if(tabSelectNum > 0)
            {
                $(tab2[tabSelectNum]).removeClass('txtOn');
                $(tab2[tabSelectNum]).prev(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab2[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab2[tabSelectNum]).prev(ImgOn).addClass('ImgOn');
                tabSelectNum--
            }   
            break;
        case 2:
            if(tabSelectNum > 0)
            {
                $(tab3[tabSelectNum]).removeClass('txtOn');
                $(tab3[tabSelectNum]).prev(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab3[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab3[tabSelectNum]).prev(ImgOn).addClass('ImgOn');
                tabSelectNum--
            }   
            break;
        case 3:
            if(tabSelectNum > 0)
            {
                $(tab4[tabSelectNum]).removeClass('txtOn');
                $(tab4[tabSelectNum]).prev(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab4[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab4[tabSelectNum]).prev(ImgOn).addClass('ImgOn');
                tabSelectNum--
            }   
            break;
        case 4:
            if(tabSelectNum > 0)
            {
                $(tab5[tabSelectNum]).removeClass('txtOn');
                $(tab5[tabSelectNum]).prev(txtOn).addClass('txtOn');
        
                        
                $(prdImgTab5[tabSelectNum]).removeClass('ImgOn');
                $(prdImgTab5[tabSelectNum]).prev(ImgOn).addClass('ImgOn');
                tabSelectNum--
            }   
            break;
        default:
            break;
    }
});

} 
else {
    var tabON = $("#tabCategory_center .tabs li.tabOn").index();
    var tab1 = document.querySelectorAll('.m_tab1 li');
    var tab2 = document.querySelectorAll('.m_tab2 li');
    var tab3 = document.querySelectorAll('.m_tab3 li');
    var tab4 = document.querySelectorAll('.m_tab4 li');
    var tab5 = document.querySelectorAll('.m_tab5 li');
    let tabSelectNum = 0;
    let cateSelectIndex = 0;
    var prdImg = document.querySelectorAll('.prdImg');
    
    var prdImgTab1 = document.querySelectorAll('#m_tab01 .prdImg img');
    var prdImgTab2 = document.querySelectorAll('#m_tab02 .prdImg img');
    var prdImgTab3 = document.querySelectorAll('#m_tab03 .prdImg img');
    var prdImgTab4 = document.querySelectorAll('#m_tab04 .prdImg img');
    var prdImgTab5 = document.querySelectorAll('#m_tab05 .prdImg img');
    var hashTitle = document.querySelectorAll('.tabs li'); 
    var tabBox = document.querySelectorAll('.tabBox');
    var cateTxt = document.querySelectorAll('.cateTxt');
    
    var cateTxt1 = document.querySelectorAll('.m_Text1');
    var cateTxt2 = document.querySelectorAll('.m_Text2');
    var cateTxt3 = document.querySelectorAll('.m_Text3');
    var cateTxt4 = document.querySelectorAll('.m_Text4');
    var cateTxt5 = document.querySelectorAll('.m_Text5');
    
    $(".m_tab1").show();
    $(".m_tab2").hide();
    $(".m_tab3").hide();
    $(".m_tab4").hide();
    $(".m_tab5").hide();
    $(prdImgTab1).show();
    $(prdImgTab2).hide();
    $(prdImgTab3).hide();
    $(prdImgTab4).hide();
    $(prdImgTab5).hide();
    
    
    $('#tabCategory_center .tabs li').click(function(){
        for (let p = 0; p < hashTitle.length; p++) {
            $(hashTitle[p]).not(this).removeClass('tabOn');
            $(this).addClass("tabOn");
        }
    });
    
        $(tabBox).removeClass("tabBoxOn");
    
        $(".tabs .need").click(function(){
            $(tab1).hide();
            $(tab1[0]).show();
            $(".m_tab1").show();
            $(".m_tab2").hide();
            $(".m_tab3").hide();
            $(".m_tab4").hide();
            $(".m_tab5").hide();
    
            $(prdImgTab1).show();
            $(prdImgTab2).hide();
            $(prdImgTab3).hide();
            $(prdImgTab4).hide();
            $(prdImgTab5).hide();
    
            cateSelectIndex = 0;     
            tabSelectNum=0;
        })
    
        $(".tabs .love").click(function(){
            $(tab2).hide();
            $(tab2[0]).show();
            $(".m_tab1").hide();
            $(".m_tab2").show();
            $(".m_tab3").hide();
            $(".m_tab4").hide();
            $(".m_tab5").hide();
    
            $(prdImgTab1).hide();
            $(prdImgTab2).show();
            $(prdImgTab3).hide();
            $(prdImgTab4).hide();
            $(prdImgTab5).hide();
    
            cateSelectIndex = 1;     
            tabSelectNum=0;
        })
        $(".tabs .touch").click(function(){
            $(tab3).hide();
            $(tab3[0]).show();
            $(".m_tab1").hide();
            $(".m_tab2").hide();
            $(".m_tab3").show();
            $(".m_tab4").hide();
            $(".m_tab5").hide();
    
            $(prdImgTab1).hide();
            $(prdImgTab2).hide();
            $(prdImgTab3).show();
            $(prdImgTab4).hide();
            $(prdImgTab5).hide();
    
            cateSelectIndex = 2;     
            tabSelectNum=0;
        })
        $(".tabs .like").click(function(){
            $(tab4).hide();
            $(tab4[0]).show();
            $(".m_tab1").hide();
            $(".m_tab2").hide();
            $(".m_tab3").hide();
            $(".m_tab4").show();
            $(".m_tab5").hide();
    
            $(prdImgTab1).hide();
            $(prdImgTab2).hide();
            $(prdImgTab3).hide();
            $(prdImgTab4).show();
            $(prdImgTab5).hide();
    
            cateSelectIndex = 3;     
            tabSelectNum=0;
        })
        $(".tabs .wish").click(function(){
            $(tab5).hide();
            $(tab5[0]).show();
            $(".m_tab1").hide();
            $(".m_tab2").hide();
            $(".m_tab3").hide();
            $(".m_tab4").hide();
            $(".m_tab5").show();
    
            $(prdImgTab1).hide();
            $(prdImgTab2).hide();
            $(prdImgTab3).hide();
            $(prdImgTab4).hide();
            $(prdImgTab5).show();
    
            cateSelectIndex = 4;     
            tabSelectNum=0;
        })
    
    $('.btnprdby').mouseover(function(){
        $(this).css("background-color","#000");
        $(this).css("color","#fff");
    });
    $('.btnprdby').mouseout(function(){
        $(this).css("background-color","#fff");
        $(this).css("color","#000");
    });
    
    var tabBoxOn = $(".cateBox #cateBoxTxt div.tabBoxOn").index();
    var txtOn = $("#cateBoxTxt .tabBox .cateTxt li.txtOn").index();
    var ImgOn = $(".thumbnail .prdImg img.ImgOn").index();
    
    
    $('.next').click(function(){
        switch (cateSelectIndex) {
            case 0:
                if(tabSelectNum < tab1.length - 1)
                {
                    $(tab1[tabSelectNum]).hide();
                    $(tab1[tabSelectNum + 1]).show();
                    
                    
                    $(prdImgTab1[tabSelectNum]).hide();
                    $(prdImgTab1[tabSelectNum + 1]).show();
                    tabSelectNum++;
                }        
                break;
            case 1:
                if(tabSelectNum < tab2.length - 1)
                {
                    $(tab2[tabSelectNum]).hide();
                    $(tab2[tabSelectNum + 1]).show();
                    
                    
                    $(prdImgTab2[tabSelectNum]).hide();
                    $(prdImgTab2[tabSelectNum + 1]).show();
                    tabSelectNum++;
                }   
                break;
            case 2:
                if(tabSelectNum < tab3.length - 1)
                {
                    $(tab3[tabSelectNum]).hide();
                    $(tab3[tabSelectNum + 1]).show();
                    
                    
                    $(prdImgTab3[tabSelectNum]).hide();
                    $(prdImgTab3[tabSelectNum + 1]).show();
                    tabSelectNum++;
                }   
                break;
            case 3:
                if(tabSelectNum < tab4.length - 1)
                {
                    $(tab4[tabSelectNum]).hide();
                    $(tab4[tabSelectNum + 1]).show();
                    
                    
                    $(prdImgTab4[tabSelectNum]).hide();
                    $(prdImgTab4[tabSelectNum + 1]).show();
                    tabSelectNum++;
                }   
                break;
            case 4:
                if(tabSelectNum < tab5.length - 1)
                {
                    $(tab5[tabSelectNum]).hide();
                    $(tab5[tabSelectNum + 1]).show();
                    
                    
                    $(prdImgTab5[tabSelectNum]).hide();
                    $(prdImgTab5[tabSelectNum + 1]).show();
                    tabSelectNum++;
                }   
                break;
            default:
                break;
        }
    });
    
    $('.prev').click(function(){
        switch (cateSelectIndex) {
            case 0:
                if(tabSelectNum > 0)
                {
                    $(tab1[tabSelectNum]).hide();
                    $(tab1[tabSelectNum - 1]).show();
                    
                    
                    $(prdImgTab1[tabSelectNum]).hide();
                    $(prdImgTab1[tabSelectNum - 1]).show();
                    tabSelectNum--
                }        
                break;
            case 1:
                if(tabSelectNum > 0)
                {
                    $(tab2[tabSelectNum]).hide();
                    $(tab2[tabSelectNum - 1]).show();
                    
                    
                    $(prdImgTab2[tabSelectNum]).hide();
                    $(prdImgTab2[tabSelectNum - 1]).show();
                    tabSelectNum--
                }   
                break;
            case 2:
                if(tabSelectNum > 0)
                {
                    $(tab3[tabSelectNum]).hide();
                    $(tab3[tabSelectNum - 1]).show();
                    
                    
                    $(prdImgTab3[tabSelectNum]).hide();
                    $(prdImgTab3[tabSelectNum - 1]).show();
                    tabSelectNum--
                }   
                break;
            case 3:
                if(tabSelectNum > 0)
                {
                    $(tab4[tabSelectNum]).hide();
                    $(tab4[tabSelectNum - 1]).show();
                    
                    
                    $(prdImgTab4[tabSelectNum]).hide();
                    $(prdImgTab4[tabSelectNum - 1]).show();
                    tabSelectNum--
                }   
                break;
            case 4:
                if(tabSelectNum > 0)
                {
                    $(tab5[tabSelectNum]).hide();
                    $(tab5[tabSelectNum - 1]).show();
                    
                    
                    $(prdImgTab5[tabSelectNum]).hide();
                    $(prdImgTab5[tabSelectNum - 1]).show();
                    tabSelectNum--
                }   
                break;
            default:
                break;
        }
    });
}



        