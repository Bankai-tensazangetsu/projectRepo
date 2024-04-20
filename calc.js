let input = document.getElementById("inp");
function show(num){
    input.value += num;
}
function calc(){
    let result = eval(input.value);
    input.value = result;
}
function clearinput(){
    input.value = '';
}