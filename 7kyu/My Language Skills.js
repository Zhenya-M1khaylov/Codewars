// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.


function myLanguages(results) {
    let res = [];
    for (let i in results) {
        if (results[i] >= 60) {
            res.push(i);
        }
    }
    return res.sort((a, b) => results[b] - results[a]);
}