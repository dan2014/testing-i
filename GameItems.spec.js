const enhancer = require("./GameItems.js");

const item = {name:"sword",type:"weapon",durability:100,enhancement:0}

describe("enhancer library",() => {
    describe("createItem() method",() => {
        test("creates an item", () => {
            expect(enhancer.createItem("sword","weapon",100,0));
        })
    })
    describe("enhancer method",() => {
        it("Method to attempt enhancement on an item",() => {
            expect(enhancer.enhance(item));
        }) 
    })
})
