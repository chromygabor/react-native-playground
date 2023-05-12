export type AffirmationData = {
  id: number;
  label: {
    text: string;
    left: number;
    top: number;
    style: TextStyle;
  };
  image: {
    width: number;
    height: number;
    url: string;
  };
};
