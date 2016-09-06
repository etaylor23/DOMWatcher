import DMPBuilder from "./DMPBuilder.js";
import createCORSRequest from "./helpers/createCORSRequest.js";

function Differ(node, target) {
    /*
     *  Creates a new DiffMatchPatch instance
     */
    var DMPConfig = new DMPBuilder();

    console.log(`Node ${node.nodeName} added to ${target.nodeName}`);

    /*
     *  checkEl = The DOM's target HTML
     *  original = Page load HTML
     *  firstClass = Gets the first class value of the target
     *  updatedEl = Gets the inner HTML of the target
     */
    var checkEl = target.className,
    original = window.InitialHTML,
    firstClass = checkEl.split(" ")[0] || checkEl,
    updatedEl = target.innerHTML;

    if (checkEl == "") {
      console.log(`No class available, cant diff without a class`)
      return false;
    }

    try {
        var originalEl = original.getElementsByClassName(firstClass)[0].innerHTML
    }
    catch(err) {
        var originalEl = "<div></div>";
    }
    debugger;
    /*
     *  diffs = The difference between the page load target element's HTML and the new/updated element's HTML
     *  makePatch = Creates a patch between the page load target element's HTML and the differences from the updated element's HTML
     *  applyPatches = Applies the patch made in previous steps
     */
    var diffs = DMPConfig.DMP.diff_main(originalEl, updatedEl),
    makePatch = DMPConfig.DMP.patch_make(originalEl, diffs),
    applyPatches = DMPConfig.DMP.patch_apply(makePatch, originalEl);

    /*
     *  checkDOM = The target's DOM
     *  checkDiff = Runs another diff to ensure that all previous patches have been applied with no issues, if they have then that can be confirmed below
     */
    var checkDOM = document.getElementsByClassName(checkEl)[0];
    var checkDiff = DMPConfig.DMP.diff_main(checkDOM.innerHTML, applyPatches[0])


    if(checkDiff.length === 1) {
      console.log(`DOM HTML and Patched HTML is identical`)
    }

    /*
     *  Posts the applied patches to a local server
     */
    var xhr = new createCORSRequest('POST', 'http://localhost:3000/endpoint');
    xhr.send(applyPatches[0])
}

module.exports = Differ;