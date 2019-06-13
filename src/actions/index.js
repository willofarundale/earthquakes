import axios from 'axios';

export const fetchEarthquakes = () => {
    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';
    return async dispatch => {
        const response = await axios.get(url);
    
        dispatch({ type: 'FETCH_EARTHQUAKES', payload: response.data.features })

    }
};