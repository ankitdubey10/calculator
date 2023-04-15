let input = document.getElementById('inputbox');
console.log(input);
// let buttons = document.getElementsByClassName("operator");
//  more efficient is get by query selector
let buttons = document.querySelectorAll('button');
console.log(buttons);
let string = "";
let arr = Array.from(buttons);
console.log(arr);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=' ){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'X<sup>2</sup>'){
            let x = input.value;
            x = Math.pow(x,2);
            input.value = x;
        }
        else if(e.target.innerHTML == 'X<sup>y</sup>'){
            let x = input.value;
            let a = prompt("Enter the power number");
            x = Math.pow(x, a);
            input.value = x;
        }
        else if(e.target.innerHTML == '<math><msqrt><mi></mi></msqrt></math>'){
            let x = input.value;
            let a = Math.sqrt(x);
            input.value = a; 
        }
        else if(e.target.innerHTML == 'log<sub>10</sub>'){
            let x = input.value;
            let y = Math.log10(x);
            input.value = y;
        }
        else if(e.target.innerHTML == 'log<sub>2</sub>'){
            let x = input.value;
            let y = Math.log2(x);
            input.value = y;
        }
        else if (e.target.innerHTML == '1' || e.target.innerHTML == '6' || e.target.innerHTML == '7' ||
        e.target.innerHTML == '3' || e.target.innerHTML == '5' || e.target.innerHTML == '8' || 
        e.target.innerHTML == '2' || e.target.innerHTML == '4' || e.target.innerHTML == '9' || 
        e.target.innerHTML == '%' || e.target.innerHTML == '/' || e.target.innerHTML == '*' ||
        e.target.innerHTML == '-' || e.target.innerHTML == '+' || e.target.innerHTML == '0' ||
        e.target.innerHTML == '.' || e.target.innerHTML == '00' 
        ){
            string += e.target.innerHTML;
            input.value = string;
        }
        if(input.value.length >= 18)   {
            let x = input.value.length;
            let y = Math.ceil(x/15);
            input.style.fontSize = `${y*10}px`;
        }     
        })
})
