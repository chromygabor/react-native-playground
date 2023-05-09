/* eslint-disable @typescript-eslint/no-unused-vars */
import AffirmationList from '../components/AffirmationList';

export interface IHomeProps {}

const HomeScreen: React.FC<IHomeProps> = (props: IHomeProps) => {
  return <AffirmationList />;
};

export default HomeScreen;
