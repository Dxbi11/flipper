const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
export function random(){
    const finalHex = [];
    for (let i = 0; i < 6; i++) { 
        const grabbedNumberPosition = Math.floor(Math.random() * 16);
        const number = hex[grabbedNumberPosition];
        finalHex.push(number);
    }
    return finalHex.join('');

}