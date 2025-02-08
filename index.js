const character = '#';
const count = 8;
const rows = new Array(count);
let inverted = false;


function manualRepeat(char, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result = result + char;
    }
    return result;
}


function padRow(rowNumber, rowCount) {
    const spaces = manualRepeat(' ', rowCount - rowNumber);
    const hashes = manualRepeat(character, 2 * rowNumber - 1);
    return spaces + hashes + spaces;
}


for (let i = 0; i < count; i++) {
    if (inverted) {
        for (let j = count - 1; j > 0; j--) {
            rows[j] = rows[j - 1];
        }
        rows[0] = padRow(i+1,count);
    } else {
        rows[i] = padRow(i+1,count);
    }
}


let result = '';
for (let k = 0; k < count; k++) {
    result = result + rows[k] + '\n';
}

console.log(result);

