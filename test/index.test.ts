import { Person } from '../src/person';
import { CashWallet, ElectronicWallet, VoidWallet } from '../src/wallet';
import { Present } from '../src/present';

describe('Test purchases', () => {
    beforeEach(() => {
    });

    afterEach(() => {
    });

    it('01.Old school: prevent purchase in case of no wallet', () => {
        const Michael = new Person(new VoidWallet());
        if (Michael.wallet) {
            Michael.purchase(Present.Bicycle())
        }
        expect(Michael.hasPurchased).toBeFalsy();
    })
    it('02.New school: nothing blows up even without wallet', () => {
        const Michael = new Person(new VoidWallet());
        Michael.purchase(Present.Bicycle())
        expect(Michael.hasPurchased).toBeFalsy();
    })

    it('03.Further more, passing null reference for wallet will break the app', () => {
        const scenario = () => {
            const Michael = new Person(null);
            if (Michael.wallet) {
                Michael.purchase(Present.Bicycle())
            }
        };
        expect(scenario).toThrow(ReferenceError);
    })

    it('04.With cash wallet.', () => {
        const Michael = new Person(new CashWallet());
        Michael.purchase(Present.Bicycle())
        expect(Michael.hasPurchased).toBeTruthy();
    });

    it('05.With electronic wallet.', () => {
        const Michael = new Person(new ElectronicWallet());
        Michael.purchase(Present.Mobile())
        expect(Michael.hasPurchased).toBeTruthy();
    });
});