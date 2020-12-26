import { Present } from './present';
import { IWallet } from './wallet';

export class Person {
    private readonly _wallet:IWallet
    private _hasPurchased: boolean;

    constructor(wallet: IWallet) {
        this._wallet = wallet;
        this._hasPurchased = false;
    }

    get wallet(): IWallet {
        return this._wallet;
    }

    get hasPurchased(): boolean {
        return this._hasPurchased;
    }

    purchase(present: Present) {
        this._hasPurchased = this._wallet.pay(present);
    }
}