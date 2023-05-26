
import { Text, View } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import { getAssets } from '../../service/request';
import { useSelector } from 'react-redux';

export default function AssetsScreen(props){
    const assets = useSelector((store) => store.assets);
    useEffect(() => {
        // getData();
    }, []);

    const getData = async () => {
        const response = await getAssets();
        const result = await response.json();
        console.log('qwe')
        console.log(JSON.stringify(result.data))
    }
    

    return (
      <View style={styles.container}>
        <Text>Assets</Text>
      </View>
    );
}
  