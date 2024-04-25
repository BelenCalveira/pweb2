//module.import = Math.random;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

num = getRandomInt(5);

function adivinarNum(){

    let sign=0;

    for(var i=0; i<3; i++){
        sign = parseInt(prompt("Adivina el numero"));
        if(sign==num){
            alert("Adivinastee");
            break;
        }

    }

}