//fetch is inbuild function used in js to fetch data from url , it is promise based , so it can give result in two states and we can use them using then andd catch


fetch("https://randomuser.me/api")
.then((raw)=> raw.json())
.then((data)=> console.log(data.resuts[0]));
