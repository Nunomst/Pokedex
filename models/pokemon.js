export class Pokemon{
    #name
    #number
    #type
    #hp
    #attack
    #defense
    #special_attack
    #special_defense
    #speed
    #img
    #gif
    #gif_shiny

    constructor({name, number, type, hp, attack, defense, special_attack, special_defense, speed, img, gif, gif_shiny}){
        this.name = name;
        this.number = number;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.special_attack = special_attack;
        this.special_defense = special_defense;
        this.speed = speed;
        this.img = img;
        this.gif = gif;
        this.gif_shiny = gif_shiny
    }
}