import React from 'react';
import {styles} from './styles';
import {View, Text, TouchableOpacity,} from 'react-native';

const RenderItem = ({item, onPress}) => {
    return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
    )
}

export default RenderItem;