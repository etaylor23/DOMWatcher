import DOMWatcherView from "./components/DomWatcher/DOMWatcherView.js";
import Config from "./components/helpers/Config.js";

/* 
 * ------------------------------
 * \/\/ DomWatcher \/\/
 * We create mostly silence here
 * ------------------------------
 */

var config = new Config(); 
var domWatcherView = new DOMWatcherView(config);

/*
*
* - Recent actions:
* - - Changed all callbacks to fat arrows
* - - Changed DMPBuild to ES6 class - Come back and change the rest to classes
* - - Changed CORS arg to have default - Change other args to defaults as well :)
*
*/

/*
*
* - Presentation Items:
* - Technology Involved: ES6, Webpack, Babel and NodeJS
* - No runtime dependencies
* - What does it do?
* - Environment configuration - Production vs Development, HTTP vs HTTPS and Online vs Offline
* - - ES6
* - - Why ES6?
* - - Benefits:
* - - - ES6 Syntax
* - - - - Fat Arrows (All Callbacks)
* - - - - ES6 Classes (DMPBuild)
* - - - - Template Strings (Differ)
* - - - - Default Args (CreateCORSRequest)
* - - - The module patterns better lend themselves towards modern application standards which would make it far easier to convert to a JS framework if needed
* - - Drawbacks
* - - - Requires a transpiler like Babel as most browsers don't natively support ES6
* - - - Harder to Debug -> Requires knowledge of the module bundler to configure Source Mapping
* - Manual Testing -
* - - Inject the script via dev tools on multiple different sites and activate source maps so you can test with the original source
* - Automated Testing -
* - - Split the script up into smaller classes or functions to clearly distinguish different modules
* - - Make as many of the functions as 'pure' as possible
* - What I've found out... (DOM Manipulation Intensity)
*/


/*
 Next Steps:
 - Productisation:
 - - Database to hold client's preferences around Match_Threshold and Match_Distance
 - - Additional security layer so only authenticated sites can hit the endpoint
 - - Increased efficiency in submmitting data to server
 - - Queuing of requests and filtering of noisy requests
 - Functionality:
 - - Administrators UI to track interaction
 - - Use of PhantomJS to generate a visual version of the user's page at a particular time
 - - OR
 - - A diff
 */