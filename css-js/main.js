// function main(){
//     navbar();
// }
// main();




// function navbar(){
//     let b = document.querySelectorAll(".nav-cont b");
//     let nav_svg = document.querySelectorAll(".nav-cont svg");
//     let display = document.querySelectorAll(".dis");

//     let selected=0;

//     for(let i=0; i<=3; i++){

//         nav_svg[i].addEventListener("click", ()=> {
//             nav_svg[selected].style.cssText = "background-color: rgb(236, 236, 236); color: black;";
//             b[selected].style.cssText = "margin-top: 0%; color: white";
//             display[selected].style.cssText = "z-index: -1; display: none;";

//             selected = i;

//             nav_svg[i].style.cssText = "background-color: blue; color: white;";
//             b[i].style.cssText = "margin-top: 37%; color: black";
//             display[i].style.cssText = "z-index: 0; display: block;";
//         });


//         nav_svg[i].addEventListener("mouseover", ()=> {
//             if (i !== selected) {
//                 b[i].style.cssText = "margin-top: 37%; color: black";
//                 nav_svg[i].style.cssText = "background-color: rgb(223, 223, 223); color: black;";
//             }
//         });
//         nav_svg[i].addEventListener("mouseout", ()=> {
//             if (i !== selected) {
//                 b[i].style.cssText = "margin-top: 0%; color: white";
//                 nav_svg[i].style.cssText = "background-color: rgb(238, 238, 238); color: black;";
//             }   
//         });
//     }
// }









function main() {
    navbar();
}
main();

function navbar() {
    let navItems = document.querySelectorAll(".nav-cont");
    let displaySections = document.querySelectorAll(".dis");

    let selected = 0;

    navItems.forEach((navItem, i) => {
        let navSvg = navItem.querySelector("svg");
        let navB = navItem.querySelector("b");

        navSvg.addEventListener("click", () => {
            navItems[selected].querySelector("svg").style.cssText = "background-color: rgb(236, 236, 236); color: black;";
            navItems[selected].querySelector("b").style.cssText = "margin-top: 0%; color: white";
            displaySections[selected].style.cssText = "z-index: -1; display: none;";

            selected = i;

            navSvg.style.cssText = "background-color: blue; color: white;";
            navB.style.cssText = "margin-top: 37%; color: black";
            displaySections[i].style.cssText = "z-index: 0; display: block;";
        });

        navSvg.addEventListener("mouseover", () => {
            if (i !== selected) {
                navB.style.cssText = "margin-top: 37%; color: black";
                navSvg.style.cssText = "background-color: rgb(223, 223, 223); color: black;";
            }
        });

        navSvg.addEventListener("mouseout", () => {
            if (i !== selected) {
                navB.style.cssText = "margin-top: 0%; color: white";
                navSvg.style.cssText = "background-color: rgb(236, 236, 236); color: black;";
            }
        });
    });
}

