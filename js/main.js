inputDelSymbols()
function inputDelSymbols(){
    let inputs = document.querySelectorAll('input[type="number"]');
    let invalidChars = [
                        "-",
                        "+",
                        "e",
                        ];

    inputs.forEach( e=>{
        e.addEventListener('keydown', el =>{
            e.addEventListener("input", function() {
                this.value = this.value.replace(/[e\+\-]/gi, "");
            });
            if(invalidChars.includes(el.key)){
                el.preventDefault()
            }
        
        })
    })

}

var input = document.querySelector('.input-flex-size'); // get the input element
if(input){
    input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
    resizeInput.call(input); // immediately call the function
    
    function resizeInput() {
        if(this.value.length == '0'){
            this.style.width = '1.5ch'
        }else{
            this.style.width = this.value.length + 0.5 + "ch";
            if(this.offsetWidth > 350)
            this.style.width = `350px`
        }
    }
}
