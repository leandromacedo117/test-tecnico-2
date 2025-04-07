import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!url) return

        const controller = new AbortController()
        const { signal } = controller

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch(url, { signal })
                if (!res.ok) throw new Error(`Error: ${res.status}`)
                const json = await res.json() as T
                setData(json)
            } catch (err) {
                if (!signal.aborted && err instanceof Error) {
                    setError(err.message)
                }
            } finally {
                if (!signal.aborted) setLoading(false)
            }
        }

        fetchData()

        return () => controller.abort()
    }, [url])

    return { data, loading, error }
}

export default useFetch