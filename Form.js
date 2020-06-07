class Form{
    constructor() {
         this.title = createElement('h2'),
         this.input = createInput("name");
        this. button = createButton('Play');
        this.greeting =createElement('h2');
    }

display(){
    
this.title.html("Street Racers");
this.title.position(displayWidth/2 -50,0);




this.input.position(displayWidth/2 -50,displayHeight/2 -80);
this.button.position(displayWidth/2 +30,displayHeight/2 );
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    var name = this.input.value();
      
playerCount+=1;
player.update(name);
player.updateCount(playerCount);
this.greeting.html("hello"+name);
this.greeting.position(displayWidth/2 -50,displayHeight/2);

});
}
}