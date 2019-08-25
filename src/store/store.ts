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

  private async fetchMonuments() {
    return httpService.get('monuments');
  }
}

export const store = new Store();