import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import milkData from './milk.json'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//get all
app.get('/api/milks', (req: Request, res: Response) => {
	return res.location('/api/milks')
  	.status(200)
  	.json(milkData);
});

//get by id
app.get('/api/milks/:id', (req: Request, res: Response) => {
	const id = req.params.id
  const milk = milkData.results.filter(milk => milk.id === id)

  if (milk.length !== 0) {
    return res.location('/api/milks/:id')
    .status(200)
    .json(milk);
  }
  return res.status(404)
  .json({
    error: 404,
    msg: 'Milk not found'
  });
});

//get all by type
app.get('/api/milks/type/:type', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});