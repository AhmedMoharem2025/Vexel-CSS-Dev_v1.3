/*!
 * Vexel CSS ✨ v1.3 Vexel Inc.
 * Copyright 2025 - Licensed under MIT
*/


// Informations Variables Of Vexel-CSS
let Build_Info = {
    build_Name: "Vexel-CSS",
    build_Version: 1.2,
    build_OS: 64,
    build_Turned: true,
    build_Folders: [
        "src",
        "Scripts",
        "Assets -- ['Icons','Images','Wallpapers']",
        "Examples"
    ],
    build_Lang_State: "HTML",
    build_Lang_Styles: ["CSS","SASS"], // Vexel-CSS Now Supported & Used SASS Framework/Language.
    build_Lang_Scripts: "Javascript(JS)",
}
const Welcome_Message = [
    "Coder",
    "Designer",
    "User",
    "Friend",
    "Bro!",
];

// Print Informations In Console
console.log(Build_Info);



// When Page Fishned Reloaded Show a Random Names Of "Welcome_Message" Array In Console
window.addEventListener('load', () => {
    const randomMess = Math.floor(Math.random() * Welcome_Message.length);
    console.log(`HI ${randomMess}`);
})

// 

// If Vexel-CSS Is = "True" Print In Console [Runing...], Else If Vexel-CSS Is = "False" Print In Console [Disable...]
Build_Info.build_Turned ? console.log("Vexel-CSS Is Runing...") : console.log("Vexel-CSS Is Disable...");

// If Build_Info.build_Turned Is = "undefined" Print In Console [Stoped...], Else If Build_Info.build_Turned Is = Other Values Print In Console [Runing...]
if (Build_Info.build_Turned === undefined) {
    throw new Error("Vexel-CSS Is Stoped...");
} else {
    console.log("Vexel-CSS Is Runing...");
}

// For More Information See Browser Console

// let myReguest = new XMLHttpRequest();
// myReguest.open("GET", "/Scripts/package.json");
// myReguest.send();


// myReguest.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//         let myJSobject = JSON.parse(this.responseText)
//         console.log(myJSobject.description);
//     }
// }