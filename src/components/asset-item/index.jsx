
import React, { useEffect } from 'react';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, selectAsset, setAssets } from '../../redux/action';
import { uniqArray } from '../../utils/helper';
import { useNavigation } from '@react-navigation/native';

function Item(props){
    const {  item } = props;
    const { id, name, symbol, slug, metrics } = item;
    const dispatch = useDispatch();
    const assets = useSelector(store => store.assets);
    const favorites = useSelector(store => store.favorites);
    const navigation = useNavigation();

    const favorite = favorites?.filter(i => i.slug === slug)?.length > 0;

    const sourceImage = favorite ? require('../../assets/favorite-active.png') : require('../../assets/favorite-inactive.png');
    
    const onFavoriteItem = () => {
        let refactorData = assets.map((e) => ({
            ...e,
            favorite: !favorite
        }));
        if(favorites?.filter(i => i.slug === slug)?.length < 1){
            dispatch(addFavorite(favorites.concat([item]).filter(i => i && i !== null)))
            
        }else{
            dispatch(addFavorite([...favorites.filter(i => i.slug !== slug)]));
        }
        dispatch(setAssets([...refactorData]));
    }

    const onSelectAsset = () => {
        dispatch(selectAsset(item));
        navigation.push('AssetViewScreen');
    }

    return (
        <TouchableOpacity onPress={() => onSelectAsset()}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => onFavoriteItem()}>
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

const AssetItem = Item;

export default AssetItem;
  