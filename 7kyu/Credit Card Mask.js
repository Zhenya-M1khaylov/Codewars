function maskify(cc) {
    return cc.slice(0, -4).replace(/["0-9A-Za-z"]/g, '#') + cc.slice(-4)
}

console.log(maskify('4556 3646 0793 5616'))
