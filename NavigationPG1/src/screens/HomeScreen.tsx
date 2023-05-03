/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyles} from '../Styles';
import {FlatList, Text, View} from 'react-native';
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
      console.log('Setting back fromr fullscreen');
    };
  }, []);

  return (
    // <SafeAreaView style={HomeStyles.backgroundStyle}>
    <FlatList
      data={Data}
      renderItem={({item}) => (
        <Item label={item.label} imageSource={item.imageSource} />
      )}
      keyExtractor={item => item.id}
    />
    // </SafeAreaView>
  );
};

export default HomeScreen;
