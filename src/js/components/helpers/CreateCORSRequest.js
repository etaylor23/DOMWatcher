function CreateCORSRequest(method = "POST", url = "http://localhost:3000/endpoint", done, data) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'text/html; charset=UTF-8');
  } else if (typeof XDomainRequest != "undefined") {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'text/html; charset=UTF-8');
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  xhr.onload = function(resolve, reject) {
     var responseText = xhr.responseText;
      console.log(responseText);
      if(done) {
        done(responseText, data)  
      }    
  }
  return xhr;
}

module.exports = CreateCORSRequest;