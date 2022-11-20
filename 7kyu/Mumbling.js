function accum(s) {
    return [...s].map((s, index) => (s.toUpperCase() + s.toLowerCase().repeat(index))).join("-")
}