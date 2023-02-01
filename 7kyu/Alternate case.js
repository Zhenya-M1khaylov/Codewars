function alternateCase(s) {
    return s.split("").map(item => item === item.toUpperCase()? item.toLowerCase(): item.toUpperCase()).join('');
}