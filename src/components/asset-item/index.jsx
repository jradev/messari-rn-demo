
import React from 'react';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, selectAsset, setAssets } from '../../redux/action';
import { uniqArray } from '../../utils/helper';

function Item(props){
    const {  item } = props;
    const { id, name, symbol, metrics, favorite = false } = item;
    const dispatch = useDispatch();
    const assets = useSelector(store => store.assets);
    const favorites = useSelector(store => store.favorites);

    const sourceImage = favorite ? require('../../assets/favorite-active.png') : require('../../assets/favorite-inactive.png');

    const onFavoriteItem = () => {
        if(!favorite){
            let refactorData = assets.map((e) => ({
                ...e,
                favorite: item.id === id
            }));
            dispatch(addFavorite(favorites.concat([item])))
            dispatch(setAssets(refactorData));
            
        }
    }

    const onSelectAsset = () => {
        dispatch(selectAsset(item));
    }

    return (
        <TouchableOpacity onPress={() => onSelectAsset()}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => onFavoriteItem()}>
                    <Image 
                        style={styles.image}
                        source={sourceImage}
                    />
                    </TouchableOpacity>
                    <View style={styles.col}>
                        <Text style={styles.symbol}>{symbol}</Text>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.price}>${parseFloat(metrics?.market_data?.price_usd)?.toFixed(2)}</Text>
                </View>
        </View>
        </TouchableOpacity>
    );
}

const AssetItem = React.memo(Item);

export default AssetItem;
  