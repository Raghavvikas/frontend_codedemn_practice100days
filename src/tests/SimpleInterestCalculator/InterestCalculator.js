import React, { useEffect, useState } from 'react'

const InterestCalculator = () => {

    const [principal, setPrincipal] = useState(1000)
    const [rate, setRate] = useState(7)
    const [time, setTime] = useState(5)
    const [simpleInterest, setSimpleInterest] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        const interest = parseInt(principal * rate * time) / 100
        const amount = parseInt(principal) + interest
        setSimpleInterest(interest.toFixed(2))
        setTotalAmount(amount.toFixed(2))
    }, [time, rate, principal])
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="p-6 bg-white rounded shadow-lg">
                    <h2 className="text-2xl mb-4">Simple Interest Calculator</h2>

                    <div className="mb-3">
                        <label htmlFor="principal" className="block mb-2 text-sm font-medium text-gray-700">
                            {' '}
                            Principal Amount ($):
                        </label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full"
                            value={principal}
                            type="number"
                            name="principal"
                            id="principal"
                            onChange={(e) => setPrincipal(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">

                        <label
                            htmlFor="rate"
                        >
                            {' '}
                            Rate:
                        </label>

                        <input
                            className="border border-gray-300 p-2 rounded w-full"
                            value={rate}
                            name="rate"
                            type="number"
                            id="rate"
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time">
                            Time :
                        </label>

                        <input
                            className="border border-gray-300 p-2 rounded w-full"
                            value={time}
                            type="number"
                            name="time"
                            id="time"
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <span>Simple Interest</span>
                        <div id="simpleInterest" className="p-2 bg-gray-200 rounded">{simpleInterest}</div> </div>
                    <div className="mb-3">
                        <span>Total Amount</span><div id="totalAmount" className="p-2 bg-gray-200 rounded">{totalAmount}</div></div>

                </div>
            </div>
        </>
    )
}

export default InterestCalculator