//hoisting
//function declaration

movie(){
    function movie(){
        console.log('the matrix')
    }
    
    movie()
    
    
    //function expression
    
    const = car = function () {
        console.log ('tesla')
    }
    
    car()
    
    const truck = car
    truck ()

movie()


//function expression

const = car = function () {
    console.log ('tesla')
}

car()

const truck = car
truck ()