class Game{
    constructor(){
     
    }

    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val()
            
        })
    }

    update(state){
        database.ref("/").update({gameState:state})
    }

    async start(){
        if(gameState === 0){
            player1 = new Player()
        var playerCountRef = await database.ref("playerCount").once("value")
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val()
            player1.getCount()
        }
        form1 = new Form()
        form1.display()
        }
    }

    play(){
    form1.hide()
    textSize(30)
    text("Iniciando",width/2,height/6)
    Player.getPlayerInfo()

        if(allplayers !== undefined ){
        var index = 0 
        var display_position = 150

            for(var plr in allplayers){
            index += 1
                if(index === player.index){
                    fill("red")
                }

                else{fill("black")}
                display_position += 20
                text(allplayers[plr].name+": "+ allplayer[plr].distance,width/3,display_position )
            }
        }
        if(keyIsDown(UP_ARROW)&&player1.index !== null){
            player1.distance+=20
            player1.update()
        }
    }
}