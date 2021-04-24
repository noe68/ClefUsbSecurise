// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
 

    document.getElementById('serialport-version').innerText = require('serialport/package').version

})