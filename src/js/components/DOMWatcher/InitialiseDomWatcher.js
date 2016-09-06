import DOMWatcher from '../DOMWatcher/DOMWatcherController.js';

function InitialiseDomWatcher(initialHTML) {
    window.InitialHTML = initialHTML;
    var domWatcher = new DOMWatcher(InitialHTML);
    domWatcher.DispatchedObserver.observe(document, {
      childList : true,
      attributes : true,
      characterData : true,
      subtree : true,
      attributeOldValue : true,
      characterDataOldValue : true,
      attributeFilter: ["class"]
    });
}

module.exports = InitialiseDomWatcher;