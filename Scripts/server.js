/*!
 * Vexel CSS ✨ v1.3 Vexel Inc.
 * Copyright 2025 - Licensed under MIT
*/

// Variables For External Local Server 
const serverIP = 'http://127.0.0.1:5500/' || 'http://127.0.0.1:5500/index.html' || location.hostname(); // New!
const serverName = 'index.html';

// Variables For Browsers
let Browsers = {
   chromeOS: 'Chrome', // Most Users Use This Browser.
   firefoxOS: 'Firefox',
   operaOS: 'Opera',
   safariOS: 'Safari',
   edgeOS: 'Edge',
   internet_exploreOS: 'Internet Explore' // Not Supported Now!
}

// Variables For Browsers OS
let browsers_OS = {
    OS_64: 64,
    OS_32: 32,
    OS_64x: '64x',
    OS_32x: '32x',
}

// If Server IP = [http://127.0.0.1:5500/] Print In Console Server IP Is: [http://127.0.0.1:5500/], Else This Print In Console Server IP Is Not Starting
if (serverIP === 'http://127.0.0.1:5500/' || serverIP === 'http://127.0.0.1:5500/index.html' || serverIP === location.hostname()) {
    if (serverName === 'index.html') {
        console.log(`Server IP Is: ${serverIP}`);
    } else {
        console.error("Server IP Is Not Starting");
    }
} else {
    console.error("Server IP Is Not Starting");
}

// If "WebSocket" Starting In This Window Print In Console WebSocket Is Starting, Else This Print In Console WebSocket Is Not Starting
if ('WebSocket' in window) {
    console.log('WebSocket Is Starting');
} else {
    console.error('WebSocket Is Not Starting');
}

// If Using Google Chrome Print In Console Opening On Chrome 64 & 64x, Else All This Print In Console undefined
Browsers.chromeOS === 'Chrome' && browsers_OS.OS_64 === 64 && browsers_OS.OS_64x === '64x' ? console.log(`Opening On ${Browsers.chromeOS} ${browsers_OS.OS_64} & ${browsers_OS.OS_64x}`) : console.log(undefined);

// If Using Firefox Print In Console Opening On Chrome 64 & 64x, Else All This Print In Console undefined
// Browsers.firefoxOS === 'Firefox' && browsers_OS.OS_64 === 64 && browsers_OS.OS_64x === '64x' ? console.log(`Opening On ${Browsers.firefoxOS} ${browsers_OS.OS_64} & ${browsers_OS.OS_64x}`) : console.log(undefined);