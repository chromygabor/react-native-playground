export type AffirmationData = {
  id: string;
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
