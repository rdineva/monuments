import { Observable } from './observable';
import { Monument } from './monument';
import { getData } from '../../monuments-data';

interface StoreData {
    monuments: Monument[];
}

class Store extends Observable<void> {
    readonly data: StoreData = {
        monuments: [],
    };

    async loadMonuments() {
        const monuments = await this.fetchMonuments();
        this.data.monuments = monuments;
        this.notify();
    } 

    private async fetchMonuments() {
        return new Promise<Monument[]>(resolve => {
            setTimeout(() => {
                resolve(getData());
            }, 1000);
        });
    }
}

export const store = new Store();