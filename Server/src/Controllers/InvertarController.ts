import { InventarService } from "../Services/InventarService";
import { Request, Response } from "express";

export class InventarController
{
    private inventarService: InventarService;

    constructor()
    {
        this.inventarService = new InventarService();
    }

    public async getInventar(req: Request, res: Response)
    {
        try
        {
            const inventar = await this.inventarService.getInventar();
            res.status(200).json(inventar);
        } catch (error: any)
        {
            res.status(500).json({ message: error.message });
        }
    }

    public async getInventarById(req: Request, res: Response)
    {
        try
        {
            const inventar = await this.inventarService.getInventarById(req.params.id);
            res.status(200).json(inventar);
        } catch (error: any)
        {
            res.status(500).json({ message: error.message });
        }
    }

    public async createInventar(req: Request, res: Response)
    {
        try
        {
            const inventar = await this.inventarService.createInventar(req.body);
            res.status(201).json(inventar);
        } catch (error: any)
        {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateInventar(req: Request, res: Response)
    {
        try
        {
            const inventar = await this.inventarService.updateInventar(req.params.id, req.body);
            res.status(200).json(inventar);
        } catch (error: any)
        {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteInventar(req: Request, res: Response)
    {
        try
        {
            const inventar = await this.inventarService.deleteInventar(req.params.id);
            res.status(200).json(inventar);
        } catch (error: any)
        {
            res.status(500).json({ message: error.message });
        }
    }
}