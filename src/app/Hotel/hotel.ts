export class Hotel {
    private _Nom: string;
    private _id: number;
    private _nbrEtoile: number;
    private _photo: string;
    private _ville: string;
    private _typePension: string;



    constructor(Nom: string, id: number, nbrEtoile: number, photo: string, ville: string, typePension: string) {
        this._Nom = Nom;
        this._id = id;
        this._nbrEtoile = nbrEtoile;
        this._photo = photo;
        this._ville = ville;
        this._typePension = typePension;

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
    public get nbrEtoile(): number {
        return this._nbrEtoile;
    }
    public set nbrEtoile(value: number) {
        this._nbrEtoile = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get ville(): string {
        return this._ville;
    }
    public set ville(value: string) {
        this._ville = value;
    }
    public get typePension(): string {
        return this._typePension;
    }
    public set typePension(value: string) {
        this._typePension = value;
    }


}