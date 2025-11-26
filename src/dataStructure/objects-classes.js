class Soccer {
    constructor(name, worldChamp){
        this.name = name;
        this.worldChamp = worldChamp;
    }

    print(){
        if(this.worldChamp <= 1){
        console.log(`O time ${this.name} tem ${this.worldChamp} mundial.`);
        } else {
            console.log(`O time ${this.name} tem ${this.worldChamp} mundiais.`);

        }
    }
}


let team = new Soccer("São Paulo", 3);
let team2 = new Soccer("Flamengo", 1);


team.print();
team2.print();