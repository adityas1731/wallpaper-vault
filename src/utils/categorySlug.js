export function createCategorySlug(categoryName) {
  return String(categoryName ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function categoryMatchesSlug(categoryName, slug) {
  return createCategorySlug(categoryName) === createCategorySlug(slug)
}
