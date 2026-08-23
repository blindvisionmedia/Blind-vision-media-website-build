export const nav = [
  { label: 'HOME', href: '/' },
  { label: 'STUDIO', href: '/studio', children: [
    ['About the Studio','/studio/about'], ['Pricing / Packages','/studio/pricing'], ['Recent Projects','/studio/projects'], ['Studio Availability','/studio/availability'], ['Book a Session','/studio/book'], ['Artist Login','/login?role=artist']
  ]},
  { label: 'BUSINESS', href: '/business', children: [
    ['About','/business/about'], ['Business Services','/business/services'], ['Case Studies','/business/case-studies'], ['Packages','/business/packages'], ['Request Consultation','/business/consultation'], ['Business Login','/login?role=business']
  ]},
  { label: 'WORK', href: '/work' }, { label: 'ABOUT', href: '/about' }, { label: 'CONTACT', href: '/contact' }, { label: 'LOGIN', href: '/login' }
];

export const capabilities = ['Recording','Production','Mixing','Video','Photography','Content','Creative Direction','Campaigns','Branding','Entertainment','Events','Artist Development'];

export const work = [
  { title: 'For Real', client: 'PARDYSZN', type: 'MUSIC / VIDEO', summary: 'Release support, visuals and campaign structure for an emerging Brisbane artist.', tags: ['Music','Video','Campaigns'] },
  { title: 'Studio Sessions', client: 'Blind Vision Studio', type: 'MUSIC', summary: 'Recording environment for artists who need direction, delivery and finish.', tags: ['Music','Recording'] },
  { title: 'Business Creative System', client: 'Commercial Clients', type: 'BUSINESS', summary: 'Content, visual direction and entertainment-led campaign architecture for businesses.', tags: ['Business','Content'] }
];

export const studioPackages = [
  { name: 'Recording Session', category: 'Recording', description: 'Hourly studio recording with engineering and vocal direction.', price: 'Editable in admin' },
  { name: 'Complete Song Package', category: 'Song Build', description: 'Recording, production support, mix prep and release-ready direction.', price: 'Editable in admin' },
  { name: 'Release Package', category: 'Campaign', description: 'Audio, artwork, photos, short-form content and release strategy in one workflow.', price: 'Editable in admin' }
];

export const businessServices = [
  { category: 'Content', items: ['Photography','Video','Short-form content','Social content'] },
  { category: 'Creative', items: ['Creative direction','Campaign concepts','Branding','Visual identity','Art direction'] },
  { category: 'Marketing', items: ['Content strategy','Campaign strategy','Social strategy','Advertising creative'] },
  { category: 'Entertainment & Experiences', items: ['Events','Entertainment','Artist partnerships','Brand activations','Live experiences','Cultural collaborations'] }
];
