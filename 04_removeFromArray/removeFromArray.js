function removeFromArray() {
    let args = [...arguments]
    let array = args[0];
    let indexedRemove = array.indexOf(args.length);
    return array.splice(indexedRemove, 1)
};
// Do not edit below this line
module.exports = removeFromArray;
