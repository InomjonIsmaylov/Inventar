import { Inventar } from "../Models/Inventar";
import { InventarRepository } from "./InventarRepository";

export class InventarService {
    private inventarRepository: InventarRepository;

    constructor() {
        this.inventarRepository = new InventarRepository();
    }

    public async getInventar() {
        return await this.inventarRepository.getInventar();
    }

    public async getInventarById(id: string) {
        return await this.inventarRepository.getInventarById(id);
    }

    public async createInventar(inventar: Inventar) {
        return await this.inventarRepository.createInventar(inventar);
    }

    public async updateInventar(id: string, inventar: Inventar) {
        return await this.inventarRepository.updateInventar(id, inventar);
    }

    public async deleteInventar(id: string) {
        return await this.inventarRepository.deleteInventar(id);
    }
}