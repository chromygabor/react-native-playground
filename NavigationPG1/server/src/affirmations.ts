/* eslint-disable @typescript-eslint/no-unused-vars */
import fs, {watch} from 'fs';
import {join} from 'path';
import {Affirmation, Database, QueryResult} from '.';
import {inspect} from 'util';

const path = join(__dirname, '../db.json');

function getRandomIndex(array: any[]): number {
  return Math.floor(Math.random() * array.length);
}

let database: Promise<Database> = reloadDatabase();

async function reloadDatabase(): Promise<Database> {
  console.log(`Reloading database: ${path}`);
  const r = await fs.promises.readFile(path, 'utf-8');

  return JSON.parse(r);
}

watch(path, (event, filename) => {
  database = reloadDatabase();
});

export async function getAffirmations(
  page: number,
  pageSize: number,
): Promise<QueryResult<Affirmation>> {
  const db = await database;

  const startIndex = ((page ?? 1) - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  console.log({startIndex, endIndex});

  if (!db.affirmationImages || !db.affirmationLabels) {
    return {
      totalRecord: 0,
      result: [],
      page,
      pageSize,
    };
  }

  const neededItemsToGenerate = endIndex - (db.affirmations?.length ?? 0);

  if (neededItemsToGenerate) {
    console.log('needsTobeGenerated');

    const result: Affirmation[] = Array(neededItemsToGenerate)
      .fill(0)
      .map((input, index) => {
        const image =
          db.affirmationImages![getRandomIndex(db.affirmationImages!)];
        const text =
          db.affirmationLabels![getRandomIndex(db.affirmationLabels!)];
        return {
          id: index + (db.affirmations?.length ?? 0),
          label: {
            text,
            left: 0,
            top: 30,
            style: {
              fontFamily: 'Montserrat, Medium Italic',
              fontSize: 450,
              color: 'white',
              textShadowColor: 'black',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 20,
            },
          },
          image: {
            ...image,
            url: '/assets/' + image.url,
          },
        };
      });

    const db2: Database = {
      ...db,
      affirmations: [...(db.affirmations ?? []), ...result],
    };

    await fs.promises.writeFile(path, JSON.stringify(db2));
    return {
      totalRecord: db2.affirmations?.length ?? 0,
      result: db2.affirmations?.slice(startIndex, endIndex) ?? [],
      page,
      pageSize,
    };
  } else {
    return {
      totalRecord: db.affirmations?.length ?? 0,
      result: db.affirmations?.slice(startIndex, endIndex) ?? [],
      page,
      pageSize,
    };
  }
}
