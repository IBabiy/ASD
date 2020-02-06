//Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
//Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).
//В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

main(1)

// Function Expression
let func = function(a,b){

    a *= b;
    console.log(a);
}
func(3,4)


//Function Declaration
function main(d,c = 2){

    d += c;
    console.log(d)
}


let age = prompt("Сколько Вам лет?", 18);

// в зависимости от условия объявляем функцию
if (age < 18) {

  function welcome() {
    alert("Привет!");
  }

} else {

  function welcome() {
    alert("Здравствуйте!");
  }

}

// ...не работает
welcome()



// Arguments
function solve(q,w,e){

    let count = 0;
    let count1 = 0;
    let masiv =[];

    if (arguments.length > 0 ){
        console.log('Arguments consist!')
    }
    else{
        
        console.log('Arguments doesnt exist!')
    };
    
    for (let i = 0; i<arguments.length; i++){

        masiv.push(typeof(arguments[i]))
    }

    for (let i1 = 0; i1<arguments.length; i1++){

        if (arguments[0] == arguments[i1]){
            count1++;
        }
    
    }

    console.log(count1, arguments.length)

    if (count1 == arguments.length){
        console.log('All argument 1 type: ', masiv[0])
    }
    else{
        console.log('not 1 type array: ', masiv);

    }

}

solve(1,2,3)