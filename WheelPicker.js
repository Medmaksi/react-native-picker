import React, {useState} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import Data from '../data/WheelData';
import Tick from '../../assets/img/tick-circle.svg';

const {width, height} = Dimensions.get('window');

const WheelPicker = () => {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({title, style}) => (
    <View style={styles.optionWrapper}>
      <TouchableOpacity
        style={[styles.touchable, style]}
        onPress={() => setSelectedId(title)}>
        <View style={{...styles.tickContainer}}>
          <Tick />
        </View>
        <Text
          style={{
            ...styles.optionText,
            color: selectedId === title ? '#FFFFFF' : '#402B2B',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        title={item.text}
        style={{
          backgroundColor: selectedId === item.text ? '#1DA1F2' : '#FFFFFF',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={Data}
        keyExtractor={(item) => item.text}
        renderItem={renderItem}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  flatList: {
    height: 250,
  },
  touchable: {
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontFamily: 'Gilroy-Regular',
    alignItems: 'center',
    fontWeight: '600',
    textAlign: 'center',
  },
  optionWrapper: {
    marginVertical: 5,
    borderRadius: 5,
  },
  tickContainer: {
    alignSelf: 'flex-start',
  },
});

export default WheelPicker;
