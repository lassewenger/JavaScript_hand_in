

var names = ["kurt","ole","ib"];

//This is my NEW version of forEach
//It does not really make sense here, what does this refer to?
function myforEach(callback){
  for(var i =0; i < this.length; i++){
    callback(this[i]);
  }
};
//myforEach((name)=>console.log(name));

//Now it makes sense, when attached to the Array.prototype
Array.prototype.myforEach = myforEach;

//Observe how it's used exactly as the the original forEach
names.myforEach(function(name){
    console.log(name);
    });

names.forEach((name)=>console.log(name));