/* for first skills circle progress bar */

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if( counter == 95){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML =counter + "%";
    }
},20);

/* for second skills circle progress bar */

