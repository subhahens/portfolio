let n=0;
function openNav() {
    
    n++;
    if(n%2 != 0) {
        //open menu
        document.getElementById("open_mobile_menu").style.display = "flex";
    }else {
        //return close menu
        document.getElementById("open_mobile_menu").style.display = "none";
    }
    
}
function startAnima() {
    const Body = document.querySelector('body');
    const DIV = document.createElement('div');
    const span = document.createElement('span');
    DIV.appendChild(span);
    DIV.className = '.start-animation';
    Body.append(DIV);
    
}
document.addEventListener('DOMContentLoaded',()=>{
    
    document.querySelector('#openNav').onclick = () => {
        openNav();
    }
})

