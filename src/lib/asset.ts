/**
 * Resolve a path inside `public/` against the app's configured base URL.
 * Keeps assets working both at the site root (Lovable hosting) and under a
 * sub-path such as `/coplex-machine/` (GitHub Pages).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.endsWith("/") ? base : `${base}/`}${path.replace(/^\/+/, "")}`;
}
