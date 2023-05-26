
import React from 'react';
import { Text, View } from 'react-native';

function Item(props){
    return (
      <View style={styles.container}>
        <Text>Asset View</Text>
      </View>
    );
}

const AssetItem = React.memo(Item);

export default AssetItem;
  