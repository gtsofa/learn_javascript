/* create array with names*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G", "Tupac"];

/* log "And if you don't know, now you know." if it's notorious big*/
for(i =0; i < rapperArray.length(); i++){
    console.log(rapperArray[i])
    if (rapperArray[i] === 'Notorious B.I.G'){
        break;
    }
}
console.log("And if you don't know, now you know.")