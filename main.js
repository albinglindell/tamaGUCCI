const inputValue = document.getElementById("name")
const typeValue = document.getElementById("type")
const gucciBtn = document.getElementById("createPet")
const playwrapper = document.querySelector(".playwrapper")

const eatBtn = document.getElementById("eat")
const sleepBtn = document.getElementById("sleep")
const playBtn = document.getElementById("play")

let cardDiv = document.createElement("div")


let liComponent = (newPet)=> 
`<h1>${newPet.petName}</h1>
<img class="cardImage" src="${newPet.image}">
<p>Tiredness:</p>
<progress id="tiredness" value="${newPet.tiredness}" max="100"></progress>
<p>Hunger:</p>
<progress id="hunger" value="${newPet.hunger}" max="100"></progress>
<p>loneliness:</p>
<progress id="loneliness" value="${newPet.loneliness}" max="100"></progress>
<p>happyness:</p>
<progress id="happiness" value="${newPet.happiness}" max="100"></progress>`

class pet {
    constructor(petName, type){
        this.petName = petName;
        this.type = type;
        this.tiredness = 50
        this.hunger = 50
        this.loneliness = 50
        this.happiness = 50
        this.image
        if(type=="flexboxfroggy"){
            this.image="http://tympanus.net/codrops/wp-content/uploads/2015/12/Collective197_Froggy.png"
        }else if(type== "dog"){
            this.image = "https://i.pinimg.com/474x/1d/7a/bb/1d7abbca56d491a9425586ca9eaf4918.jpg"
        }else if(type== "cat"){
            this.image="https://mpng.subpng.com/20190130/vi/kisspng-cat-royalty-free-vector-graphics-stock-photography-5c513364bd0d57.4103695515488254447744.jpg"
        }
        }
        
        nap(){
            if(this.tiredness <=0){
                this.tiredness = 0
            }else{
                this.tiredness = this.tiredness -50
              }
              if(this.loneliness>=100){
                  this.loneliness=100
              }else{
                  this.loneliness= this.loneliness + 10
              }
              if(this.happiness<= 0){
                  this.happiness=0
            }else{
                this.happiness = this.happiness -20
            }
            cardDiv.innerHTML= liComponent(this)
            console.log(`you made ${this.petName} sleep`)

        }
        play(){
            if(this.happiness>=100){
                this.happiness=100
            }else{
                this.happiness = this.happiness +50
            }
            if(this.tiredness>= 100){
                this.tiredness= 100
            }else{
                this.tiredness = this.tiredness +20
            }if(this.hunger>=100){
                this.hunger=100
            }else{
                this.hunger = this.hunger +10
            }if(this.loneliness<=0){
                this.loneliness =0
            }else{
                this.loneliness= this.loneliness - 10
            }
            cardDiv.innerHTML= liComponent(this)
            console.log(`you played with ${this.petName}!`)
        }
        eat(){
            if(this.hunger<=0){
                this.hunger=0
            }else{    
                this.hunger = this.hunger -60
            }if(this.tiredness>=100){
                this.tiredness=100
            }else{
                this.tiredness = this.tiredness +10
            }
            cardDiv.innerHTML= liComponent(this)
            console.log(`you gave ${this.petName} food`)
        }


}
gucciBtn.addEventListener("click",()=>{
    let newPet = new pet(inputValue.value, typeValue.value)
cardDiv.innerHTML= liComponent(newPet)
cardDiv.classList="card"
playwrapper.appendChild(cardDiv)
inputValue.style.display = "none"
typeValue.style.display = "none"
gucciBtn.style.display = "none"

// eatBtn.classList="block"
// sleepBtn.classList="block"
// playBtn.classList="block"


// eatBtn.addEventListener("click", ()=>{
    
//     newPet.eat()

// })
eatBtn.addEventListener("click",()=>{newPet.eat()})
sleepBtn.addEventListener("click", ()=>{newPet.nap()})

playBtn.addEventListener("click", ()=>{newPet.play()})
})




