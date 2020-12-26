import { Present } from './present';

export interface IWallet {
    pay(present:Present): boolean;
}

export class CashWallet implements IWallet {
    pay(present: Present):boolean {
        console.log(`You've paid for following present in cash:${ present.name }`);
        return true;
    }
}

export class ElectronicWallet implements IWallet {
    pay(present: Present): boolean {
        console.log(`You've paid for following present with credit card:${ present.name }`);
        return true;
    }
}

export class VoidWallet implements IWallet {
    pay(present: Present): boolean {
        return false; // Represents no wallet, so nothing is paid
    }
}
