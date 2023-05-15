import express, {Request, Response} from 'express';
import {join} from 'path';
import {getAffirmations} from './affirmations';

const app = express();
const port = 4001;
const host = '0.0.0.0';

const assetsFolder = join(__dirname, '../public/assets');
app.use('/assets', express.static(assetsFolder));

// Handle requests for JSON data using json-server
app.get('/affirmations', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query._page as string) || 1;
    const pageSize = parseInt(req.query._limit as string) || 10;

    const affirmations = await getAffirmations(page, pageSize);
    res.json(affirmations);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send(e);
  }
});
app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Server is serving public/assets via /assets');
});
