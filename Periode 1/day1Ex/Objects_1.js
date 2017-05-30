function Person(n,b,h,e){
  this.name = n;
  this.birthday = b;
  this.hobby = h;
  this.email = e
}

 var p1 = new Person("Jesus", "24/12","Walking on water", "xXxMLGjesusxXx@gmail.com");

for(var property in p1)
{
    console.log(property);
}

console.log("Does name exist? " + p1.hasOwnProperty("name"));

console.log("Deleting name!");
delete p1.name;

for(var property in p1)
{
    console.log(property);
}
console.log("Does name exist? " + p1.hasOwnProperty("name"));
