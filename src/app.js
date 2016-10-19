module.exports = {
    louder(text) {
        return text.toUpperCase() + '!!!1one'
    },
    curried(fn) {
        const args = Array.prototype.slice.call(arguments, 1);

        return function () {
            return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
        }
    },
    quieter(text) {
        return text.toLowerCase().replace(/!.*/,'')
    }
}
