import {StyleSheet, Text, TextStyle, View} from 'react-native';
import Image from 'react-native-scalable-image';
import TypeWriter from 'react-native-typewriter';
import {ItemStyles} from '../Styles';
import {Avatar} from 'react-native-paper';

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
  width: number;
};

const containerPadding = {
  paddingTop: 10,
  paddingLeft: 20,
  paddingBottom: 10,
  paddingRight: 20,
};

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {item} = props;

  const ratio = props.width / item.image.width;

  const [width, height, left, top, fontSize] = [
    item.image.width * ratio -
      containerPadding.paddingLeft -
      containerPadding.paddingRight,
    item.image.height * ratio -
      containerPadding.paddingTop -
      containerPadding.paddingBottom,
    item.label.left * ratio,
    item.label.top * ratio,
    item.label.style.fontSize
      ? Math.ceil(item.label.style.fontSize * ratio)
      : undefined,
  ];

  console.log({
    ratio,
    width,
    height,
    left,
    top,
    style: {...item.label.style, fontSize},
  });

  return (
    <View style={{...containerPadding}}>
      <View style={styles.itemHeader}>
        <Avatar.Text size={36} label="CG" />
        <View style={styles.itemHeaderTextContainer}>
          <Text style={styles.itemHeaderTextPrimary}>Chromy Gábor</Text>
          <Text style={styles.itemHeaderTextSecondary}>2 perccel ezelőtt</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.image.url}}
          width={width}
          style={ItemStyles.imageStyle}
        />
        <View style={{...ItemStyles.viewTextStyle, top, left}}>
          <TypeWriter style={{...item.label.style, fontSize}} typing={1}>
            {item.label.text}
          </TypeWriter>
        </View>
      </View>
    </View>
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
