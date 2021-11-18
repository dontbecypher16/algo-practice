
let nameMatch = require('./name_match')

describe('nameMatch', () => {
    it('should be exact match', () => {
        const knownAliases = ['Alphonse Gabriel Capone', 'Al Capone']
        expect(nameMatch(knownAliases, 'Alphonse Gabriel Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Al Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Alphonse Francis Capone')).toBe(false)
    })

    it('should match even with alias middle name missing', () => {
        const knownAliases = ['Alphonse Capone']
        expect(nameMatch(knownAliases, 'Alphonse Gabriel Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Alexander Capone')).toBe(false)
        expect(nameMatch(knownAliases, 'Alphonse Francis Capone')).toBe(true)
    })

    it('should match even with record middle name missing', () => {
        const knownAliases = ['Alphonse Gabriel Capone']
        expect(nameMatch(knownAliases, 'Alphonse Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Alexander Capone')).toBe(false)
        expect(nameMatch(knownAliases, 'Alphonse Francis Capone')).toBe(false)
    })


    it('more middle name tests', () => {
        const knownAliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']
        expect(nameMatch(knownAliases, 'Alphonse Gabriel Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Alphonse Edward Capone')).toBe(false)
        expect(nameMatch(knownAliases, 'Alphonse Francis Capone')).toBe(true)
    })

    it('should be matching the middle initial to middle name', () => {
        const knownAliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone']
        expect(nameMatch(knownAliases, 'Alphonse G Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Alphonse E Capone')).toBe(false)
        expect(nameMatch(knownAliases, 'Alphonse Francis Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Alphonse Edward Capone')).toBe(false)
        expect(nameMatch(knownAliases, 'Alphonse Gregory Capone')).toBe(false)
    })

    it('should be matching first and last names in transpositon', () => {
        const knownAliases = ['Alphonse Gabriel Capone']
        expect(nameMatch(knownAliases, 'Gabriel Alphonse Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Gabriel A Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Gabriel Capone')).toBe(true)
        expect(nameMatch(knownAliases, 'Gabriel Francis Capone')).toBe(false)
    })



    // else if (
    //     (rMiddle.length === 1 || kMiddle.length === 1) &&
    //     rFirst === kFirst &&
    //     rLast === kLast
    //   ) {
    //     return rMiddle === kMiddle[0] || rMiddle[0] === kMiddle;
    //   }









})