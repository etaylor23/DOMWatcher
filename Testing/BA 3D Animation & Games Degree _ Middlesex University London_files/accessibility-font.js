$(document).ready(function() {
//var $ = jQuery.noConflict();
if(window.location.href.indexOf('/support-services/disability-support') > 0){

   $('.wrap nav').prepend('<div id="text_size"><!-- --></div>');
   $('div#text_size').html('<p>Change font size & colours on this site: <a id="small">A</a> | <a id="medium">A</a> | <a     id="large">A</a></p>'); 
   readTextSize();           /* reads text size from cookie */


   $('div#text_size a').each(function(){             /* on clicking text size menu */
       $(this).click(function(){
          var id = $(this).attr('id');

          resizeTxt(id);                              /*resizing function */


		//alert();

       });
    });

 $(window).scroll(function() {
        if($(window).scrollTop() > 20) {
            $("#text_size, #high_con").css("display","none");
        } else {
            $("#text_size, #high_con").css("display","block");
        }
    });

}
});



/* *************************** FUNCTIONS ******************************************* */

/* resizing function */

function resizeTxt(id) {            
    if(id=='small') {  
      small_size(); 
      setTextSize("small")
    }

    if(id=='medium') { 
      medium_size(); 
      setTextSize("medium")
    }

    if(id=='large') { 
      large_size(); setTextSize("large")
    }
};

/* this 3 functions changes letter colors and changes body font size */

function small_size(){
   $('.main-container .content-container .content').css('font-size','13px'); 
   $('#small').css('color','#EB212E');  
   $('#medium').css('color','#ffffff');
   $('#large').css('color','#ffffff');

};


function medium_size(){
   $('.main-container .content-container .content').css('font-size','15px'); 
   $('#small').css('color','#ffffff'); 
   $('#medium').css('color','#EB212E'); 
   $('#large').css('color','#ffffff');

};


function large_size(){   
   $('.main-container .content-container .content').css('font-size','18px');
   $('#small').css('color','#ffffff');
   $('#medium').css('color','#ffffff');
   $('#large').css('color','#EB212E');

};

/* ************************************* Cookies text size scripts ******************** */
/* saveCookie */

 function saveCookie(name,value,days) {
 	 if (days) {
		 var date = new Date();
		 date.setTime(date.getTime()+(days*24*60*60*1000))
		 var expires = "; expires="+date.toGMTString()
	 }
	 else expires = ""
	 document.cookie = name+"="+value+expires+"; path=/"
 }

/* readCookie */

 function readCookie(name) {
	 var nameEQ = name + "="
	 var ca = document.cookie.split(';')
	 for(var i=0;i<ca.length;i++) {
		 var c = ca[i];
		 while (c.charAt(0)==' ') c = c.substring(1,c.length)
		 if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)
	 }
	 return null
 }

/* deleteCookie */

 function deleteCookie(name) {
	 saveCookie(name,"",-1)
 }


/* ********** Text size stuff ******* */

/* saving text size to cookie */
 function setTextSize(TextID) {
     saveCookie("TextSize", TextID, "10");
 };


/* reading text size form cookie */
  function readTextSize() {
     var CookieTextSize = readCookie("TextSize");

     if (CookieTextSize == 'small')  { resizeTxt('small');} 

     if (CookieTextSize == 'medium')  { resizeTxt('medium');}

     if (CookieTextSize == 'large')   { resizeTxt('large');}

  };
