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

    it('should insert a new cat into cats and return id', async () => {
        await Cats.addCat({name: 'Mr. Bigglesworth'}).then(res => {
            expect(res).toBe(1)
        })
        const cats = await db('cats')
        expect(cats).toHaveLength(1);
    })

    

    it('should return the new cat from cats', async () => {
        await Cats.addCat({name: 'Mrs. Norris'})
        let cats = await db('cats');
        expect(cats).toHaveLength(1);
        const cat = await Cats.findCatByName('Mrs. Norris')
        console.log(cat)
        expect(cat.name).toBe('Mrs. Norris')
    })

    it('should delete cat from cats table', async () => {
        await Cats.addCat({name: 'Mr. Bojangles'});
        const cat = await Cats.findCatByName('Mr. Bojangles')
        let cats = await db('cats');
        expect(cats).toHaveLength(1);
        await Cats.deleteCat(cat.id);
        cats = await db('cats')
        expect(cats).toHaveLength(0);
    })

    it('should delete cat from table and return 1', async () => {
        await Cats.addCat({name: 'Mr. Bojangles'});
        const cat = await Cats.findCatByName('Mr. Bojangles')
        let cats = await db('cats');
        expect(cats).toHaveLength(1);
        await Cats.deleteCat(cat.id).then(res => {
            expect(res).toBe(1);
        });
        cats = await db('cats')
        expect(cats).toHaveLength(0);

    })

    
})
