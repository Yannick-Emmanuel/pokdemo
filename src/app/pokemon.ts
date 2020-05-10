export class Pokemon {
    constructor(public id : number = 0, public name : string = '', public stats : string[] = [], public logo : string [] = []){}

    getId() : number {
        return this.id;
    }

    getName() : string {
        return this.name;
    }

    getStats() : string[] {
        return this.stats;
    }

    getLogo() : string[] {
        return this.logo;
    }

    toString() : string {
        return this.name;
    }
}