class hero{
	constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
    this.weapon = ""
    }
    
    item(){
    	if(this.type === "mago"){
        	this.weapon = "magia"
        }
        else if(this.type === "guerreiro"){
        	this.weapon = "espada"
        }
        else if(this.type === "monge"){
        	this.weapon = "artes marciais"
        }
        else if(this.type === "ninja"){
        	this.weapon = "shuriken"
        }
    }
    
    attack(){
    	console.log(`O ${this.type} atacou usando ${this.weapon}`)
    }
}



let mago = new hero("Mason", 115, "mago")
let guerreiro = new hero("Jasper", 32, "guerreiro")
let monge = new hero("Oscar", 89, "monge")
let ninja = new hero("Felipe", 17, "ninja")

//armando a galera
mago.item()
guerreiro.item()
monge.item()
ninja.item()

//atacando
mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()