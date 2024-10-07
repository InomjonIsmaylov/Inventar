import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { InventarController } from './Controllers/InvertarController';

//For env File 
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req: Request, res: Response, next) =>
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use((req: Request, res: Response, next) =>
{
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(async (req: Request, res: Response) =>
{
  const url = new URL(req.url);
  if (url.pathname.startsWith('inventar'))
  {
    const inventarController = new InventarController();
    if (req.method === 'GET')
    {
      await inventarController.getInventar(req, res);
    }
    else if (req.method === 'POST')
    {
      inventarController.createInventar(req, res);
    }
    else if (req.method === 'PUT')
    {
      inventarController.updateInventar(req, res);
    }
    else if (req.method === 'DELETE')
    {
      inventarController.deleteInventar(req, res);
    }
  }
});

app.listen(port, () =>
{
  console.log(`Server is Fire at http://localhost:${port}`);
});