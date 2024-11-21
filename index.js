const character = "#";
const count = 8;
let inverted = false;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
}

for(let i=1;i<=count;i++) {
    if(inverted){
        rows.unshift(padRow(i,count));
    }
    else{
        rows.push(padRow(i,count));
    }
}

/*while(rows.length<count){
    rows.push(padRow(rows.length+1, count));
}*/
let result = "";

for(const row of rows) {
    result += row + "\n";
}
console.log(result);