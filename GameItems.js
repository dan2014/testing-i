module.exports = {
    createItem:function(name,type,durability,enhancement){
        const item = {name,type,durability,enhancement}
        return item
    },
    enhance:function(item){
        return item
    },
    success:function(item){
        return item
    },
    fail:function(item){
        return item
    },
    repair:function(item){
        return item
    }
}
