
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import styles from './styles';
import { useEffect, useState } from 'react';
import { chartData, marketData } from '../../utils/mockdata';
import { useSelector } from 'react-redux';
import { getAssetMetrics, getAssetTimeSeries } from '../../service/request';

export default function AssetViewScreen(props){

    const asset = useSelector(store => store.asset);
    const [isLoading, setIsLoading] = useState(true);

    const [chartInfo, setChartInfo] = useState({
        label: [],
        data: []
    })
    const [marketInfo, setMarketInfo] = useState({});

    useEffect(() => {

    }, [asset])

    useEffect(() => {
        Promise.all([getDatasetInfo(), getMarketInfo()]);
    }, [])

    const getDatasetInfo = async () => {

        try{
            const response = await getAssetTimeSeries(asset?.symbol);
            const result = await response.json();
            let dataset = {};
            if(result.data){
                dataset = result.data;
            }else{
                // dataset = chartData;                
            }

            const chartLabels = dataset?.values?.map((item) => item[0]?.split('T')[1]?.replace(':00:00Z', '')).splice(0,15);
            const chartValues = dataset?.values?.map((item) => item[1]).splice(0,15);
            setChartInfo({
                data: chartValues,
                label: chartLabels
            });
            setIsLoading(false);
        }catch(e){
            setIsLoading(false);
        }

    }

    const getMarketInfo = async () => {
        try{
            const response = await getAssetMetrics(asset?.symbol);
            const result = await response.json();

            if(result.data){
                setMarketInfo(result.data)
            }else{
                // setMarketInfo(marketData)                
            }
        }catch(e){

        }
    }

    if(isLoading){
        return <ActivityIndicator/>
    }

    return (
      <View style={styles.container}>
        <Text style={styles.symbol}>{marketInfo?.Asset?.symbol}</Text>
        <Text style={styles.name}>{marketInfo?.Asset?.name}</Text>
        <Text style={styles.price}>${marketInfo?.market_data?.price_usd?.toFixed(2)}</Text>
        {
        chartInfo.data?.length > 0 &&
        <LineChart
        data={{
        labels: [...chartInfo?.label],
        datasets: [
            {
            data: chartInfo.data
            }
        ]
        }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />}
      </View>
    );
}
  