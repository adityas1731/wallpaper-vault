const REQUEST_TIMEOUT_MS = 8000

function getConfiguration() {
  const url = import.meta.env.VITE_SUPABASE_URL?.trim()
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

  return { url, anonKey }
}

export function hasSupabaseConfiguration() {
  const { url, anonKey } = getConfiguration()
  return Boolean(url && anonKey)
}

export async function supabaseGet(path, { timeout = REQUEST_TIMEOUT_MS } = {}) {
  const { url, anonKey } = getConfiguration()

  if (!url || !anonKey) {
    throw new Error('Supabase is not configured.')
  }

  const controller = new AbortController()
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(`${url.replace(/\/$/, '')}/rest/v1/${path.replace(/^\//, '')}`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Supabase request failed with status ${response.status}.`)
    }

    return response.json()
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error('Supabase request timed out.', { cause: error })
    }

    throw new Error('Supabase request failed.', { cause: error })
  } finally {
    globalThis.clearTimeout(timeoutId)
  }
}
