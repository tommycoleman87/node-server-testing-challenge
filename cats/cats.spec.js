const request = require('supertest');
const Cats = require('./catsHelpers');
const db = require('../data/dbConfig');

describe('cats model', () => {
    beforeEach(async () => {
        await db('cats').truncate();
    })

    it('should insert a new cat into cats', async () => {
        await Cats.addCat({name: 'Mr. Bigglesworth'})
        const cats = await db('cats')
        expect(cats).toHaveLength(1);
    })

    it('should delete cat from cats table', async () => {
        await Cats.addCat({name: 'Mr. Bojangles'});
        const cat = await Cats.findCatByName('Mr. Bojangles')
        let cats = await db('cats');
        console.log(cat)
        expect(cats).toHaveLength(1);
        await Cats.deleteCat(cat.id);
        cats = await db('cats')
        expect(cats).toHaveLength(0);
    })

    it('', async () => {

    })

    it('', async () => {

    })
})
