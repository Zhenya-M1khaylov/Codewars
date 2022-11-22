function openOrSenior(data){
    function categoryOfMember(member) {
        return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open'
    }
    return data.map(categoryOfMember)
}

console.log(openOrSenior([59, 12], [44, 8]))