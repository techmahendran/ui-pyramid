// Pyramid

const map = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getPyramid(rows) {
    let Pyramid = ''
    for (let i = 0; i < rows; i++) {
        let s1 = ''.repeat(rows - i);

        let s2 = ''

        for (let j = 0; j < Math.round(((i * 2) - 1)/2);j++) {
            s2 += map[j];
        }
        s2 += s2.split('').reverse().join('').slice(1)

         Pyramid += s1 + s2 + s1 + '\n'       
    }

    return Pyramid;
}

console.log(getPyramid(6));

// Remove repeat char string

function removeCharacterStrig(string) {
    return string.split('')
    .filter(function(item,pos,slef){

        return slef.indexOf(item) == pos;

    }).join('');
}

console.log(removeCharacterStrig('remove Character strig'));


