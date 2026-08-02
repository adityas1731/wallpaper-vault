export default function PageLoader() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-screen items-center justify-center bg-[var(--page-bg)] px-6 text-center text-[var(--text-secondary)]">
      <div>
        <span aria-hidden="true" className="mx-auto block size-8 animate-pulse rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
        <p className="mt-4 text-sm font-medium">Loading Wallpaper Vault...</p>
      </div>
    </div>
  )
}
