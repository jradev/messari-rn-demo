import { API_URL } from "../utils/constant";


export const getAssets = async (data = {}) => (
    fetch(`${API_URL}/assets?${new URLSearchParams(data).toString()}`)
);