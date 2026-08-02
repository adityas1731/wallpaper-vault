import { Link } from 'react-router-dom'
import OptimizedImage from '../common/OptimizedImage'
import { createCategorySlug } from '../../utils/categorySlug'

export default function CategoryCard({ category, count, image }) {
  return (
    <Link to={`/categories/${createCategorySlug(category)}`} className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm shadow-[var(--shadow)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
      <div className="aspect-[4/3] overflow-hidden">
        <OptimizedImage src={image} alt={`${category} wallpaper category`} className="size-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]" />
      </div>
      <div className="min-h-22 p-4">
        <h3 className="truncate text-lg font-semibold text-[var(--text-primary)]">{category}</h3>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{count} Wallpapers</p>
      </div>
    </Link>
  )
}
