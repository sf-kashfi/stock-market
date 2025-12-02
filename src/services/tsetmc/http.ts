export const BASE_URL = 'https://cdn.tsetmc.com/api'

export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    next: { revalidate: 0 }
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}
