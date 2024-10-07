import { Inventar } from "../Models/Inventar";

export class InventarRepository {
    private inventar: Inventar[] = [];

    public async getInventar() {
        return this.inventar;
    }

    public async getInventarById(id: string) {
        return this.inventar.find(i => i.id === id);
    }

    public async createInventar(inventar: Inventar) {
        this.inventar.push(inventar);
        return inventar;
    }

    public async updateInventar(id: string, inventar: Inventar) {
        const index = this.inventar.findIndex(i => i.id === id);
        this.inventar[index] = inventar;
        return inventar;
    }

    public async deleteInventar(id: string) {
        const index = this.inventar.findIndex(i => i.id === id);
        const inventar = this.inventar[index];
        this.inventar.splice(index, 1);
        return inventar;
    }
}