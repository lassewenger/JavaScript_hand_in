
console.log(this)//global window

var myCar = {
    name: 'fast',
    speed: 100,
    print: function(){
        console.log(this); //objectet myCar
    }
};

myCar.print();