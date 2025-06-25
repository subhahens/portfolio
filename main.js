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
    console.log(n);
    
}

