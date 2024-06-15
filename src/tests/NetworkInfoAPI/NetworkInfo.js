import React, { useState } from 'react'

const NetworkInfo = () => {
    const [netInfo, setNetInfo] = useState('')
    const handleNetwork = () => {
        const connection =
            navigator.connection ||
            navigator.mozConnection ||
            navigator.webkitConnection
        const info = `effectiveType: ${connection?.effectiveType}\ndownlink: ${connection?.downlink}Mb/s\nrtt: ${connection?.rtt}ms\nsaveData: ${connection?.saveData}`;
        setNetInfo(info)

    }

    return (
        <div>
            <button onClick={handleNetwork}
                id="getNetworkInfo">Get Network Info</button>
            <div id="networkInfoContainer">{netInfo}</div>
        </div>
    )
}

export default NetworkInfo