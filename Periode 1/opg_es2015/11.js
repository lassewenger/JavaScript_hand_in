function* makeNames() {
    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];
    while (true) {
        yield { "firstName": firstNames[Math.floor(Math.random() * 5)], "lastName": lastNames[Math.floor(Math.random() * 5)] };
    }
}

var g = makeNames();

let index = 0;
for (let name of makeNames()) {
    console.log(g.next().value);
    if (index++ === 50) {
        break;
    }
}