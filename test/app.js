const app = require('../src/app')

describe('app', () => {

    it('should make text louder', () => {
        app.louder('hello').should.eql('HELLO!!!1one')
    })

    it('should make text quieter', () => {
        app.quieter('HELLO!!!1one').should.eql('hello')
    })

    it('should 3 + 3 = 6', () => {
        const summary = app.curried((x) => x + x);
        return summary(3).should.eql(6);
    });

    it('should 3 + 3 + 3 = 9', () => {
        const summary = app.curried((x) => x + x + x);
        return summary(3).should.eql(9);
    });

    it('should 3 * 3 = 9', () => {
        const summary = app.curried((x) => x * x);
        return summary(3).should.eql(9);
    });
    it('should 3 * 3 * 3 = 27', () => {
        const summary = app.curried((x) => x * x * x);
        return summary(3).should.eql(27);
    });

})
