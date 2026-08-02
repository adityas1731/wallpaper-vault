export default function PageLoader() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-center text-zinc-300">
      <div>
        <span aria-hidden="true" className="mx-auto block size-8 animate-pulse rounded-full border-2 border-zinc-600 border-t-white" />
        <p className="mt-4 text-sm font-medium">Loading Wallpaper Vault...</p>
      </div>
    </div>
  )
}
