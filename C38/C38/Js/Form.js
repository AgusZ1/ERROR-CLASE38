class Form{
    constructor(){
    this.welcome = createElement("h3")
    this.input = createInput("Como te llamas?")
    this.title = createElement("h2")
    this.button = createButton("Preparate")
    }
     display(){
        
         this.title.html("Tokyo Drift")
         this.title.position(width/3,height/6)
         this.input.position(width/2,height/2)
         this.button.position(width/2,height/6)
         this.button.mousePressed(()=>{
             this.input.hide()
             this.button.hide()
             player1.name = this.input.value()
             playerCount  =+1
             player1.index = playerCount
                player1.update()
                player1.updateCount(playerCount)
                this.welcome.html("hola "+ player1.name )
                this.welcome.position(width/2,height/3)
         })

         
     }
}