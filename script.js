const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
const qr = document.getElementById('qr');
qr.style.visibility="hidden";

btn.addEventListener('click',()=>{
    let txt_val= txt.value;

    if(txt_val===""){
        alert('Put Url or Text in the input field');
    }else{
        let url = `https://quickchart.io/qr?text=${txt_val}&dark=751fff&ecLevel=H&size=500`;
        qr.src = url;
        qr.style.visibility="visible";
    }




})
