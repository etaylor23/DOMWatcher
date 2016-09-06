import Differ from "../Differ.js";
import DMPBuilder from "../DMPBuilder.js";
import CreateCORSRequest from '../helpers/CreateCORSRequest.js';


function DOMWatcher(OriginalDOM) {
  this.OriginalDOM = OriginalDOM;
  this.DispatchedObserver = this.dispatchObserver(this.DMP);
  return this;
}

DOMWatcher.prototype = {

  createCustomObserver: function(DMP) {
    var observer = new MutationObserver((mutations, event) => {
      mutations.forEach(mutation => {
        var target = mutation.target;
        switch (mutation.type) {
          case "attributes":
            console.log(`The attribute ${mutation.attributeName} of the node ${target.nodeName} changed from ${mutation.oldValue} to ${target.getAttribute(mutation.attributeName)}`);
                var DMPConfig = new DMPBuilder();
                var diffs = DMPConfig.DMP.diff_main(mutation.oldValue || "No original class available", target.className || "No class to update to"),
                makePatch = DMPConfig.DMP.patch_make(mutation.oldValue || "No original class available", diffs),
                applyPatches = DMPConfig.DMP.patch_apply(makePatch, mutation.oldValue);

                /*
                 *  Posts the applied patches to a local server
                 */
                var xhr = new CreateCORSRequest('POST', 'http://localhost:3000/endpoint');
                if(target.className) {
                  var intro = `${target.nodeName} with class: ${target.className} has been updated to: ${applyPatches[0]}`
                } else {
                  var intro = `No class to update to...`
                }
                  
                xhr.send(intro)
                
          break;
          case "childList":
            if(mutation.addedNodes.length < 10) {
                Array.prototype.forEach.call(mutation.addedNodes, (node) => {
                  var runDiffer = new Differ(node, target);
                });
            } else {
              console.log(`${mutation.addedNodes.length} is too many DOM Manipulations to patch in!`)
            }
            if(mutation.removedNodes.length < 10) {
              Array.prototype.forEach.call(mutation.removedNodes, (node) => {
                  var runDiffer = new Differ(node, target);
              });
            } else {
              console.log(`${mutation.removedNodes.length} is too many DOM Manipulations to remove!`)
            }
          break;
          case "characterData":
            console.log(`Content of ${target.nodeName} changed from ${mutation.oldValue} to ${target.data}`);
            console.log(diff_match_patch.prototype.diff_main(mutation.oldValue, target.data))
            console.log(diff_match_patch.prototype.patch_toText(mutation.oldValue, target.data))
          break;
        }
        console.log(mutation);
      });
    });

    return observer;
  },
  dispatchObserver: function(DMPInstance) {
    var customObserver = new this.createCustomObserver(DMPInstance);
    return customObserver;
  }
}


module.exports = DOMWatcher;