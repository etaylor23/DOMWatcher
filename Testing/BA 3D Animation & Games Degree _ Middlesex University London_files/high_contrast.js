$(document).ready(function() {

if(window.location.href.indexOf('/support-services/disability-support') > 0){

$('.wrap nav').prepend('<div id="high_con"><!-- --></div>');
 $('div#high_con').html('<p><a id="colourA"><img src="http://www.mdx.ac.uk/__data/assets/image/0023/209462/Green-icon.png"/></a> <a id="colourB"><img src="http://www.mdx.ac.uk/__data/assets/image/0025/209464/Yellow-icon.png"/></a> <a id="colourC"><img src="http://www.mdx.ac.uk/__data/assets/image/0022/209461/Blue-icon.png"/></a> <a id="colourD"><img src="http://www.mdx.ac.uk/__data/assets/image/0021/209460/black_icon.png"/></a> <a id="colourE"><img src="http://www.mdx.ac.uk/__data/assets/image/0023/208193/high-contrast-icon.png"/></p>'); 
   readScreenColour();         

   $('div#high_con a').each(function(){             
       $(this).click(function(){
          var id = $(this).attr('id');

          if($("body").hasClass(id)) {
            $("body").removeClass(id);
            setScreenColour("");

           }  
           else {
              $('body').removeClass (function (index, css) {
                return (css.match (/\bcolour\S+/g) || []).join(' ');
              });
             colorContrast(id);
           }
                               
       });
    });
}
});



/* *************************** FUNCTIONS ******************************************* */



function colorContrast(id) {            
    if(id=='colourA') {  
      colourA();
      setScreenColour("colourA");
    }         
    if(id=='colourB') {  
      colourB();
      setScreenColour("colourB");
    }
    if(id=='colourC') {  
      colourC();
      setScreenColour("colourC");
    }
    if(id=='colourD') {  
      colourD();
      setScreenColour("colourD");
    }
    if(id=='colourE') {  
      colourE();
      setScreenColour("colourE");
    }

};


function colourA(){
   $('body').addClass("colourA");
};
function colourB(){
   $('body').addClass("colourB");
};
function colourC(){
   $('body').addClass("colourC");
};
function colourD(){
   $('body').addClass("colourD");
};
function colourE(){
   $('body').addClass("colourE");
};


/* ************************************* Cookies ******************** */
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


 function setScreenColour(colourID) {
     saveCookie("ScreenColour", colourID, "10");
 };


  function readScreenColour() {
     var CookieScreenColour = readCookie("ScreenColour");
      if (CookieScreenColour == 'colourA')  { 
        colorContrast('colourA');
      }
      if (CookieScreenColour == 'colourB')  { 
        colorContrast('colourB');
      } 
      if (CookieScreenColour == 'colourC')  { 
        colorContrast('colourC');
      } 
      if (CookieScreenColour == 'colourD')  { 
        colorContrast('colourD');
      } 
      if (CookieScreenColour == 'colourE')  { 
        colorContrast('colourE');
      } 

  };
