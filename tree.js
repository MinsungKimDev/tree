const line =  5;
for (let i = 0; i<line; i++) {
    for(let j=line-i-1; j>0; j--) {
        process.stdout.write(" ");
    }
    for(let star=0; star<2*i+1; star++) {
        process.stdout.write("*");
    }
    console.log();
    if (i == line-1) {
        for(let j=line-2; j>0; j--) {
            process.stdout.write(" ");
        }
        console.log("|_|");
    } 
}