import { Observable } from './observable';
import { Monument } from './monument';
import { httpService } from "../services/http";

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

    async loadMonumentById(id: string) {
        const monument = await this.fetchMonumentById(id);
        this.data.monuments = monument;
        this.notify();
    }

    private async fetchMonuments() {
        return httpService.get('monuments');
    }

    async fetchMonumentById(id: string) {
        return httpService.get(`monuments/${id}`);
    }

    async createMonument(data: any) {
        return httpService.post('monuments/', data, {headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Request-Headers": "*",
            "Access-Control-Request-Method": "*"
        }});
    }

    // findMonumentById(id: string) {
    //     return store.data.monuments.find(m => m.id === id);
    // }
}

export const store = new Store();