//Script menu
let diagonal = false;
let menu_icon = document.getElementById('menu_icon');
let menu = document.getElementById("menu");
let body = document.body;
console.log('hola');

menu_icon.onclick = function() {
    let line1= document.getElementById('line1');
    let line2= document.getElementById('line2');
    let line3= document.getElementById('line3');
    if(diagonal === false){
        line1.style.transform=' translateX(36px) translateY(-8px) rotate(45deg)';
        line2.style.opacity='0';
        line3.style.transform=' translateX(-36px) translateY(34px) rotate(-45deg)';
        menu.style.display="block";
        menu.style.transform='translateX(0)';
        body.style.overflow= "hidden";
        diagonal = true;
    }else{
        line1.style.transform=' translateX(0px) translateY(0px) rotate(0deg)';
        line2.style.opacity='1';
        line3.style.transform=' translateX(0px) translateY(-0px) rotate(0deg)';
        menu.style.transform='translateX(0px)';
        menu.style.display="none";
        body.style.overflow= "auto";
        diagonal = false; 
    }
}

//Script Full screen button
let boton1 = document.getElementById("fullScreenButton");

let arIzq = document.getElementById("arIzq");
let arDer = document.getElementById("arDer");
let abIzq = document.getElementById("abIzq");
let abDer = document.getElementById("abDer");
let naranja = document.getElementById("naranja");
let CL_content = document.getElementById("CL_content");

let originalStyles = {
    position: '',
    top: '',
    height: '',
    borderRadius: ''
};

let incompleta = true;
fullScreenButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (incompleta) {
        originalStyles.position = naranja.style.position || getComputedStyle(naranja).position;
        originalStyles.top = naranja.style.top || getComputedStyle(naranja).top;
        originalStyles.height = naranja.style.height || getComputedStyle(naranja).height;
        originalStyles.borderRadius = naranja.style.borderRadius || getComputedStyle(naranja).borderRadius;

        requestAnimationFrame(() => {
            naranja.style.position = "fixed";
            naranja.style.top = '0px';
            naranja.style.left = '0px';
            naranja.style.width = '100%';
            naranja.style.height = '100vh';
            naranja.style.borderRadius = '0px';

            arIzq.setAttribute('points', "10,70 70,70 70,10");
            arDer.setAttribute('points', "130,10 130,70 190,70");
            abIzq.setAttribute('points', "10,130 70,130 70,190");
            abDer.setAttribute('points', "130,190 130,130 190,130");
            
            body.style.overflow = "hidden";
            
            CL_content.style.animation = "muestraParrafo 0.3s ease-in-out forwards";
            
            incompleta = false;
        });
    } else {
        requestAnimationFrame(() => {
            naranja.style.position = originalStyles.position;
            naranja.style.top = originalStyles.top;
            naranja.style.height = originalStyles.height;
            naranja.style.borderRadius = originalStyles.borderRadius;
            naranja.style.width = '';
            naranja.style.left = '';

            arIzq.setAttribute('points', "10,70 10,10 70,10");
            arDer.setAttribute('points', "130,10 190,10 190,70");
            abIzq.setAttribute('points', "10,130 10,190 70,190");
            abDer.setAttribute('points', "130,190 190,190 190,130");

            body.style.overflow = "auto";

            CL_content.style.animation = "ocultaParrafo 0.3s ease-in-out forwards";

            incompleta = true;
        });
    }
});


//Script parallax effect on load
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    
    function animateBoxes() {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
                box.style.transform = 'translateY(0)';
                box.style.opacity = '1';
            }, index * 200);
        });
    }


    boxes.forEach((box, index) => {
        box.style.transform = 'translateY(100px)';
        box.style.opacity = '0';
    });


    setTimeout(animateBoxes, 100);
});
