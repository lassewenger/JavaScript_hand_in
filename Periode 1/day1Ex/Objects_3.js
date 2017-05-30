function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

function Car(color, make)
{
    this.color = color;
    this.make = make;
}

car1 = new Car("Red", "Audi");

console.log("Does color exist? " + car1.hasOwnProperty("color"));

delete car1.color;

console.log("Does color exist? " + car1.hasOwnProperty("color"));

console.log(listAllProperties(new Car()));

