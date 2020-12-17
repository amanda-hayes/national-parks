import React, { useEffect, useState } from 'react'
import parks from './parks.json'


const ParkInfo = (props) => {
    const [ParkInfo, showPark] = useState(0);

    const getParkFromWeb = async () => {
        const url = `https://developer.nps.gov/api/v1/parks?parkCode=afam&api_key=twt4UjrAFWbW75SvLzyqwozK9pV0doNaFOcxw4Fy`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data[0]);
        showPark(json.data[0]);
    }
    useEffect(() => {
        getParkFromWeb();
    }, []);

    return (
        <div>
            <h1>LOOK AT THIS PARK!{props.id}</h1>
        </div>
    )
}

export default ParkInfo;