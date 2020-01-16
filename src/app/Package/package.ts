export class Package {
    private _Niveau: string;
    private _id: number;
    private _duree: number;
    private _prix: number;




    constructor(Niveau: string, id: number, duree: number, prix: number) {
        this._Niveau = Niveau;
        this._id = id;
        this._duree = duree;
        this._prix = prix;


    }
    public get Niveau(): string {
        return this._Niveau;
    }
    public set Niveau(value: string) {
        this._Niveau = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get duree(): number {
        return this._duree;
    }
    public set duree(value: number) {
        this._duree = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
}