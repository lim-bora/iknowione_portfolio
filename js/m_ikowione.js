
if ((matchMedia("screen and (max-width: 768px)").matches)) {
	
	function MBmainSlide() { 

		$(function(){
			
			var imgIndex = 5;

			setInterval(function(){

				imgIndex++;
				if(imgIndex==10){
					imgIndex= 5;
				}
				$(".mainimg_box01 img.first").show();
				$(".mainimg_box01 img").stop().fadeOut();
				$(".mainimg_box01 img").eq(imgIndex).stop().fadeIn();
				$(".mainimg_box02 img").stop().fadeOut();
				$(".mainimg_box02 img").eq(imgIndex).stop().fadeIn();
				$(".mainSlide_txt p").stop().fadeOut();
				$(".mainSlide_txt p").eq(imgIndex).stop().fadeIn();
				
			},3000);		
		});
	}
	MBmainSlide();
}

var giMenuDuration = 700;

		function ShowMenu(){
			$('.menu_bg' ).css( { 'display' : 'block' } );
			$('.menu' ).css( { 'left' : '-100%' } );
			$('.menu' ).animate( { left: '0px' }, { duration: giMenuDuration } );
		}

		function HideMenu(){
			$('.menu' ).animate( { left: '-100%' }, { duration: giMenuDuration, complete:function(){ $('.menu_bg' ).css( { 'display' : 'none' } ); } } );
        }
        
        function ShowSubMenu( strId ){
			var lySubMenu = $( strId );

			if( lySubMenu.first().is( ":hidden" ) ){
				$( strId ).slideDown( 300 );
			}
			else{
				$( strId ).slideUp( 300 );
            }
        }
        function ShowSubHidden(){
            $('.subtxt1').click(function(){
                $('#sub2').slideUp( 300 );
            });
            $('.subtxt2').click(function(){
                $('#sub1').slideUp( 300 );
            });
        }
        ShowSubHidden();

var giSearchDuration = 700;

		$( document ).ready( function()
		{
			$('.menu_2' ).hide();
		} );

        function Showsearch(){
			$('.search_bg' ).css( { 'display' : 'block' } );
			$('.search' ).css( { 'right' : '-100%' } );
			$('.search' ).animate( { right: '0px' }, { duration: giSearchDuration } );
		}

		function Hidesearch(){
			$('.search' ).animate( { right: '-100%' }, { duration: giSearchDuration, complete:function(){ $('.search_bg' ).css( { 'display' : 'none' } ); } } );
		}
		


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