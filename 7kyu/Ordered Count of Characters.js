const orderedCount = function (text) {
    let res = []
    for (let i = 0; i < text.length; i++) {
        let count = 0;
        for (let j = 0; j < res.length; j++) {
            if (res[j][0] === text[i]) {
                count++;
            }
        }
        if (count === 0) {
            for (let j = i; j < text.length; j++) {
                if (text[j] === text[i]) {
                    count++;
                }
            }
            res.push([text[i], count]);
        }
    }
    return res;
}

console.log(orderedCount('abracadabra'))