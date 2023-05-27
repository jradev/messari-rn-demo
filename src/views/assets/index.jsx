
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { FlashList, useFlatListBenchmark } from "@shopify/flash-list";
import styles from './styles';
import { useEffect, useState } from 'react';
import { getAssets } from '../../service/request';
import { useDispatch, useSelector } from 'react-redux';
import AssetItem from '../../components/asset-item';
import { setAssets } from '../../redux/action';
import { uniqArray } from '../../utils/helper';
import { assetsMockData } from '../../utils/mockdata';

export default function AssetsScreen(props){
    const assets = useSelector((store) => store.assets);
    const favorites = useSelector((store) => store.favorites);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // dispatch(setAssets([]))
        getData(currentPage);
    }, []);

    useEffect(() => {

    },[assets, favorites])

    const getData = async (page = 1) => {
        setIsLoading(true);
        try{
            const response = await getAssets({ 'page': page });
            const result = await response.json();
            
            if(result.data){
                let newSet = uniqArray(assets.concat(result.data));
                if(page === 1){
                    newSet = result.data;
                }
                dispatch(setAssets(newSet))
            }else{
                // dispatch(setAssets(assetsMockData.data))
            }
            setIsLoading(false)
            console.log(JSON.stringify(result.data))
        }catch(e){
            setIsLoading(false)
        }
        
    }

    const onEndReached = async () => {
        const newPage = currentPage + 1;
        setCurrentPage(e => newPage);
        getData(newPage);
    }

    const onRefresh = async () => {
        setCurrentPage(1);
        getData(1);
    }
    

    return (
      <View style={styles.container}>
        <FlashList
        renderItem={({ item }) => {
            return (<AssetItem item={item} />);
        }}
        estimatedItemSize={120}
        keyExtractor={(item) => `${item.id}`}
        data={assets}
        onEndReached={() => onEndReached()}
        onRefresh={() => onRefresh()}
        refreshing={isLoading}
        onEndReachedThreshold={0.6}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
        />
      </View>
    );
}
  