const keyboardInput = document.getElementById("result");

document.addEventListener('keypress',(event)=>{
    // if(event.key =='0'){keyboardInput.value = event.key;}
    // if(event.key =='1'){keyboardInput.value = event.key;}
    // if(event.key =='2'){keyboardInput.value = event.key;}
    // if(event.key =='3'){keyboardInput.value = event.key;}
    // if(event.key =='4'){keyboardInput.value = event.key;}
    // if(event.key =='5'){keyboardInput.value = event.key;}
    // if(event.key =='6'){keyboardInput.value = event.key;}
    // if(event.key =='7'){keyboardInput.value = event.key;}
    // if(event.key =='8'){keyboardInput.value = event.key;}
    // if(event.key =='9'){keyboardInput.value = event.key;}
    // if(event.key =="Backspace"){keyboardInput.value.slice(0,-1)}
    if(event.key>=0||event.key<=9){
        keyboardInput.value = event.key

    }
    else{
        alert(result.value='Only numbers are allowed')
    }

})
function clr(){
    
    document.getElementById('result').value = ''
}
function del(){
    
    result.value = document.getElementById('result').value.slice(0,-1)
}
function show(input){
    
    document.getElementById("result").value += input
}
function calculate(){
   var output=eval(document.getElementById("result").value)
   document.getElementById("result").value=output
}
// function add(){
//     var output=eval(document.getElementById('result').value)
// }
// function sub(){
//     var output=eval(document.getElementById('result').value)
// }
// function mul(){
//     var output=eval(document.getElementById('result').value)
// }
// function div(){
//     var output=eval(document.getElementById('result').value)
// }