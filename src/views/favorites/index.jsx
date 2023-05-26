
import { Text, View } from 'react-native';
import { FlashList, useFlatListBenchmark } from "@shopify/flash-list";
import styles from './styles';
import { useEffect } from 'react';
import { getAssets } from '../../service/request';
import { useDispatch, useSelector } from 'react-redux';
import AssetItem from '../../components/asset-item';
import { setAssets } from '../../redux/action';
import { uniqArray } from '../../utils/helper';

export default function FavoritesScreen(props){
    const favorites = useSelector((store) => store.favorites);
    const dispatch = useDispatch();    

    return (
      <View style={styles.container}>
        <FlashList
        renderItem={({ item }) => {
            return (<AssetItem item={item} />);
        }}
        estimatedItemSize={120}
        data={favorites}
        />
      </View>
    );
}
  