class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }
    getCount(){
        var getCountRef = database.ref("playerCount")
        getCountRef.on("value",(data)=>{
            playerCount = data.val()
        })
    }
    
    updateCount(count){
        database.ref("/").update({playerCount:count})
    }
    update(name){
        var playerIndex = "players/player "+ this.index
        database.ref(playerIndex).set({name : this.name,distance:this.distance})

    }
    



























}





  