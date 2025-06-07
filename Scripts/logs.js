/*!
 * Vexel CSS ✨ v1.3 Vexel Inc.
 * Copyright 2025 - Licensed under MIT
*/

// Function For Create a Logs Messages When Happen Errors
function Create_Logs() {
    // Forked\Imported From src/Build.js But Edited
    if (Build_Info.build_Turned === undefined && Build_Info.build_Turned === null) {
        throw new Error("Vexel-CSS Catched a Error!");
    } else{
        console.log("Vexel-CSS Is Runing...");
    }
    // New Errors!
    if (Build_Info.build_Version === false) {
        throw new Error("Invalid Build Version Number");
    } else{
        console.log(`Build Version Number Is: ${Build_Info.build_Version}.3`);
    }
    if (Build_Info.build_OS === 32) {
        throw new Error("Invalid Build OS Number 32 BIT Is Not Supported In This Version");
    } else{
        console.log(`Build OS Number Is: ${Build_Info.build_OS}`);
    }
    // Older Versions
    if (Build_Info.build_Version < 1.3) {
        throw new Error("Invalid Build Version Number Please, Upgrade/Update Your Vexel-CSS Version To Latest Version");
    } else{
        console.log(`Build Version Number Is Latest: ${Build_Info.build_Version}.0`);
    }
}

Create_Logs();