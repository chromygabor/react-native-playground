/* eslint-disable @typescript-eslint/no-unused-vars */
import {HomeStyles} from '../Styles';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Item, {ItemData} from '../components/Item';
import {Data} from '../../Data';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {useEffect} from 'react';

export interface IHomeProps {}

const screenWidth = Dimensions.get('screen').width;

const HomeScreen: React.FC<IHomeProps> = (props: IHomeProps) => {
  // useEffect(() => {
  //   console.log('Setting to fullscreen');
  //   SystemNavigationBar.fullScreen(true);
  //   return () => {
  //     SystemNavigationBar.fullScreen(false);
  //     console.log('Setting back from fullscreen');
  //   };
  // }, []);

  return (
    <>
      <ScrollView style={{padding: 10}}>
        {Data.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
