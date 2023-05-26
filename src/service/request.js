import { API_URL } from "../utils/constant";


export const getAssets = async (data = {}) => (
    fetch(`${API_URL}/assets?${new URLSearchParams(data).toString()}`)
);

export const getAssetMetrics = async (assetKey) => (
    fetch(`${API_URL}/assets/${assetKey}/metrics/market-data`)
);

export const getAssetTimeSeries = async (assetKey) => (
    fetch(`${API_URL}/assets/${assetKey}/metrics/price/time-series?order=descending&timestamp-format=rfc3339`)
);