import type { MetadataRoute } from 'next';
const routes=['','studio','studio/about','studio/pricing','studio/projects','studio/availability','studio/book','business','business/about','business/services','business/case-studies','business/packages','business/consultation','work','about','contact','login'];
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blindvisionmedia.com.au'; return routes.map(r=>({url:`${base}/${r}`,lastModified:new Date(),changeFrequency:'monthly',priority:r===''?1:.7})); }
