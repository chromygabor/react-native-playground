/* eslint-disable @typescript-eslint/no-unused-vars */
import {HomeStyles} from '../Styles';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Item, {ItemData} from '../components/Item';
import {Data} from '../../Data';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {useEffect} from 'react';

export interface IHomeProps {}

const HomeScreen: React.FC<IHomeProps> = (props: IHomeProps) => {
  useEffect(() => {
    console.log('Setting to fullscreen');
    SystemNavigationBar.fullScreen(true);
    return () => {
      SystemNavigationBar.fullScreen(false);
      console.log('Setting back from fullscreen');
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'pink',
        flex: 1,
        alignContent: 'stretch',
      }}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <Item label={item.label} imageSource={item.imageSource} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
