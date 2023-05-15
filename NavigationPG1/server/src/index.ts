export type QueryResult<T> = {
  result: T[];
  totalRecord: number;
  page: number;
  pageSize: number;
};

export type Affirmation = {
  id: number;
  image: AffirmationImage;
  label: AffirmationLabel;
};
export type Database = {
  affirmations?: Affirmation[];
  affirmationImages?: AffirmationImage[];
  affirmationLabels?: string[];
};

export type AffirmationImage = {
  width: number;
  height: number;
  url: string;
};

export type AffirmationLabel = {
  text: string;
  left: number;
  top: number;
  style: {
    fontFamily: string;
    fontSize: number;
    color: string;
    textShadowColor: string;
    textShadowOffset: {width: number; height: number};
    textShadowRadius: number;
  };
};
