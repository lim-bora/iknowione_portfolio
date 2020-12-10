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