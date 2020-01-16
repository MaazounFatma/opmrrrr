export class Branche {
    private _Nom: string;
    private _id: number;
    private _tel1: number;
    private _tel2: number;
    private _adresse: string;





    constructor(Nom: string, id: number, tel1: number, tel2: number, adresse: string) {
        this._Nom = Nom;
        this._id = id;
        this._tel1 = tel1;
        this._tel2 = tel2;
        this._adresse = adresse;


    }
    public get Nom(): string {
        return this._Nom;
    }
    public set Nom(value: string) {
        this._Nom = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get tel1(): number {
        return this._tel1;
    }
    public set tel1(value: number) {
        this._tel1 = value;
    }
    public get tel2(): number {
        return this._tel2;
    }
    public set tel2(value: number) {
        this._tel2 = value;
    }
    public get adresse(): string {
        return this._adresse;
    }
    public set adresse(value: string) {
        this._adresse = value;
    }


}