// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let first = args.sort((a, b) => a - b);
        return first[0]
    }
}
