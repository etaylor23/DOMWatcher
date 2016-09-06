import CreateCORSRequest from '../helpers/CreateCORSRequest.js';
import InitialiseDomWatcher from './InitialiseDomWatcher.js'
import InitialHTMLBuilder from '../InitialHTMLBuilder/InitialHTMLBuilderController.js'


function DOMWatcherView(config) {
  /*
   *  A check to see if the script is running inside an https window
   */

  console.log("Beginning DOM Watcher");
  config.online === true ? console.log("DOM Watcher running in online mode") : console.log("DOM Watcher offline")
  config.production === true ? console.log("Shhhh") : console.log("Running in development mode")

  if(!config.isHTTPS) {
    /*
     *  If this script is to be run in the console for development or testing purposes then request the
     *  initial page's HTML and post it to a local server as initial page load HTML.
     *  Then store it as initial HTML to diff later on
     */  
    if(config.production) {
        var InitialHTML = new InitialHTMLBuilder();
        InitialiseDomWatcher(InitialHTML);
    } else {
      if(config.online) {
      var xhr = CreateCORSRequest("GET", window.location, (data, err) => {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = data;
        var initialXHR = new CreateCORSRequest('POST', 'http://localhost:3000/endpoint', (res, wrapper) => {
          InitialiseDomWatcher(wrapper);
        }, wrapper);
        initialXHR.send(wrapper.innerHTML)
      })
      xhr.send()
      } else {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = "<div></div>";
        InitialiseDomWatcher(wrapper);
      }
    }
  } else {
    console.log(window.location.hostname + " site is HTTPS, the localhost configured to accept requests can only handle them from http")
  }
}

module.exports = DOMWatcherView;