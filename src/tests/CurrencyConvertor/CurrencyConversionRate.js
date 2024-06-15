import { useState } from 'react'

export default function CurrencyConversionRate() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const convertRates = () => {
        fetch(`https://open.er-api.com/v6/latest/${from}`)
            .then((response) => response.json())
            .then((data) => {
                const rate = data.rates[to] // Assuming EUR is the target currency
                const convertedValue = 1 * rate // Convert 1 unit of USD to EUR
                document.getElementById('currencyValue').innerText =
                    convertedValue
            })
    }

    return (
        <>
            <h1>Hello there!</h1>
            <input
                type="text"
                id="from"
                maxLength={3}
                placeholder="From: e.g., USD"
                value={from}
                onChange={(e) => setFrom(e.target.value.toUpperCase())}
            />
            <input
                type="text"
                id="to"
                maxLength={3}
                placeholder="To: e.g., EUR"
                value={to}
                onChange={(e) => setTo(e.target.value.toUpperCase())}
            />
            <button id="convert" onClick={convertRates}>
                Convert
            </button>
            <div id="currencyValue"></div>
        </>
    )
}
