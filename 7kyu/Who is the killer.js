function killer(obj, arr) {
    for (const key in obj){
        let same = 0;
        for(let i = 0;i<arr.length;i++){
            if(obj[key].includes(arr[i])){
                same++
            }
            if(same === arr.length){
                return key
            }
        }
    }
}

// function killer(suspectInfo, dead) {
//     return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
// }

console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))