/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ImageBackground,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import Image from 'react-native-scalable-image';
import TypeWriter from 'react-native-typewriter';
import {ItemStyles} from '../Styles';
import {Avatar} from 'react-native-paper';
import {useState} from 'react';

export type ItemData = {
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

type ItemProps = {
  item: ItemData;
};

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {item} = props;

  const [dimensions, setDimensions] = useState<
    [number, number, number, number, number | undefined]
  >([]);

  const onLayout = (event: LayoutChangeEvent) => {
    const {width: viewWidth} = event.nativeEvent.layout;
    const ratio = viewWidth / item.image.width;
    const [width, height, left, top, fontSize] = [
      item.image.width * ratio,
      item.image.height * ratio,
      item.label.left * ratio,
      item.label.top * ratio,
      item.label.style.fontSize
        ? Math.ceil(item.label.style.fontSize * ratio)
        : undefined,
    ];
    setDimensions([width, height, top, left, fontSize]);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginVertical: 20,
        }}>
        <View style={styles.itemHeader}>
          <Avatar.Text size={36} label="CG" />
          <View style={styles.itemHeaderTextContainer}>
            <Text style={styles.itemHeaderTextPrimary}>Chromy Gábor</Text>
            <Text style={styles.itemHeaderTextSecondary}>
              2 perccel ezelőtt
            </Text>
          </View>
        </View>

        <View onLayout={onLayout}>
          <ImageBackground
            source={{uri: item.image.url}}
            style={{width: dimensions[0], height: dimensions[1]}}>
            <View
              style={{
                width: dimensions[0],
                height: dimensions[1],
              }}>
              <TypeWriter
                style={{
                  ...item.label.style,
                  fontSize: dimensions[4],
                  top: dimensions[2],
                  left: dimensions[3],
                }}
                typing={1}>
                {item.label.text}
              </TypeWriter>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemHeader: {flex: 1, flexDirection: 'row', marginVertical: 10},
  itemHeaderTextContainer: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemHeaderTextPrimary: {color: 'black'},
  itemHeaderTextSecondary: {color: 'black', fontSize: 10},
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Item;
