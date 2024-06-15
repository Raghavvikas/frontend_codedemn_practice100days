import { useEffect } from 'react'
import { useState } from 'react'

export default function TableData() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const limit = 10
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
            )
            const newData = await response.json()
            const startIndex = (page - 1) * limit

            setData((prevData) => {
                const updatedData = [...prevData]
                prevData.splice(startIndex, newData.length, ...newData)
                return updatedData
            })
        }

        fetchData()
    }, [page])

    const handleNext = () => {
        setPage((page) => page + 1)
    }

    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3" id="ID">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3" id="title">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3" id="body">
                                Body
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, index) => {
                            return (
                                <>
                                    <tr
                                        key={index}
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td>{value.id}.</td>
                                        <td>{value.title}</td>
                                        <td>{value.body}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
                <div className="flex justify-center items-center">
                    <button
                        id="previous"
                        className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Previous
                    </button>
                    <button
                        className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        id="next"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
