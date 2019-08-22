export class Skill{
    constructor(private _id, private _name){}

    get id(){
        console.log('Checking id');
        return this._id
    }
    get name(){
        console.log('Checking name');
        return this._name;
    }
}