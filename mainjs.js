
// ------------------- header  --------------------------- // 

let nav =document.querySelectorAll('.header .nav a');
let menuLayOut = document.querySelector('.layout');
let menuBtn = document.querySelector('.info2 .main');
let menuSpans = menuBtn.children;
let navContainer = document.querySelector('.info2 ul');
let isOpen = true ;

nav.forEach( link => {
    link.onclick = (el) =>{
        el.preventDefault('none');
        window.scrollTo({
            top : document.querySelector(`.${link.dataset.url}`).offsetTop - 155 ,
            behavior : 'smooth' ,
        })
        if(!isOpen) {
            menuBtn.click() ;
        }
    }
});

// open navpar in screen  phone
menuBtn.onclick = () => {
    isOpen = ( isOpen ? false :  true ) ;
    fixedNav() 
}

// fixed the navbar 
function fixedNav() {
    for( let i = 0 ; i < menuSpans.length ; ++ i ) {
        menuSpans[i].classList.toggle('open') ;
    }
    if( isOpen ) {
        menuLayOut.style.cssText = 'transform: scale(0)'
        navContainer.style.cssText = 'transform: scale(0)'
    }else {
        menuLayOut.style.cssText = 'transform: scale(1)'
        navContainer.style.cssText = 'transform: scale(1)'
    }
}




// -------------------------- landing ------------------------- // 

let leftBtn = document.querySelector('#left') ,
    rightBtn = document.querySelector('#right') ,
    landing = document.querySelector('.landing') ,
    allImags = ['./img/pexels-gustavo-fring-4173239.jpg' ,'./img/pexels-rdne-stock-project-6129207.jpg','./img/pexels-kampus-production-8636601.jpg'] ,
    current = 0 ;

// Set Background Image 
landing.style.cssText = `background-image: url(${allImags[current]});`
rightBtn.onclick = () => {
    current = ( current + 1 ) % allImags.length ;
    landing.style.cssText = `background-image: url(${allImags[current]});`
}
leftBtn.onclick = () => {
    current = ( current - 1 + allImags.length ) % allImags.length ;
    landing.style.cssText = `background-image: url(${allImags[current]});`;
}

// ---------------------------- about ------------------------------- // 

let dropContainer =document.querySelector('.about .container .drop-box') ,
    moveButton = document.querySelector('.about .container .asleh h3') ,
    closeButton =document.querySelector('.about .container .drop-box .info h3') ;

moveButton.onclick = () => {
    dropContainer.style.cssText = `transform: translateY(0);`
}
closeButton.onclick = () => {
    dropContainer.style.cssText = `transform: translateY(-200%);`
}
// ---------------------------- skills ---------------------------- //

let allProgreas = document.querySelectorAll('.skil .skills .skill .the-progress span') ,
    progreasContainer = document.querySelector('.skil') ,
    isrun = false ;

// ------------------------------ numcber ------------------------------ // 

let mainNumber = document.querySelectorAll('.number .container .box h1') ,
    numberContainer = document.querySelector('.number') ,
    run = false ;

window.onscroll = () => {
    // --------- numcber ---------// 
    if( !run && window.scrollY >= numberContainer.offsetTop - 400 ) {
        run = true ;
        mainNumber.forEach( num => {
            increasNumber(num);
        })
    } else if ( run && window.scrollY < numberContainer.offsetTop - 400) {
        run = false  ;
        mainNumber.forEach( num => {
            num.innerHTML = '0';
        })
    }
    // --------- skills ---------// 
    if( !isrun && window.scrollY >= progreasContainer.offsetTop - 300) {
        allProgreas.forEach( span => {
            span.style.width = span.dataset.wid ;
        })
        isrun = true ;
    } else if( isrun && window.scrollY < progreasContainer.offsetTop - 300 ) {
        allProgreas.forEach( span => {
            span.style.width = '0' ;
        })
        isrun = false ;
    }
}
function increasNumber(num) {
    let goal = num.dataset.num ;
    let count = setInterval(() => {
        num.innerHTML = parseInt(num.innerHTML) + 1 ;
        if( parseInt(num.innerHTML) >= goal ) {
            clearInterval(count) ;
        }
    }, 2000 / goal  );
}

// ------------------------------ doctore ---------------------------- //

let allImage = document.querySelectorAll('.doctor .container .imgs .img img') ;

setInterval(()=> {
    removeColor();
    addColor();
},1000)

function removeColor() {
    allImage.forEach( (img,i) => {
        setInterval(() => {
            img.style.cssText = `outline-color:#9e9b9bb3`;
        },500 * (i+1) )
    })
}
function addColor() {
    allImage.forEach( (img,i) => {
        setInterval(() => {
            img.style.cssText = `outline-color:#fe4e59`;
        },1000 * (i+1) )
    })
}

// -------------------------- information --------------------- //

let readMoreButton = document.querySelector('.information .container h3') ,
    textContentToAdd = document.querySelector('.information .container p') ;

readMoreButton.onclick = () => {
    readMoreButton.remove();
    let textNode = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat culpa incidunt minus nisi animi inventore doloremque iusto quia tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat culpa incidunt minus nisi animi inventore doloremque .') ;
    textContentToAdd.appendChild(textNode);
    textContentToAdd.style.width = '68%';
}

