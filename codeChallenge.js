let y = Math.floor(Math.random() *10) +1;
let a = 0;
console.log(y);
function get() {
    let y = document.getElementById("may man");
    let x = a.value;
    if (x>10 || y<0){
        alert("sai nhap lai tu 1 den 10")
    }
    else{
        if(x==m){
            alert("ban du doan dung so may man la")
        }
        else{
            alert("ban du doan sai roi")
        }
    }
let K = 0;
function cout() {
    K++;
    if(K < 3) get();
    if(K>3&&a==0){
        alert("ban da nhap qua 3 lan chuc ban may man lan sau")
    }
}
}