export type Role = 'artist' | 'business' | 'admin';
export function roleLanding(role: Role) {
  if (role === 'artist') return '/portal/artist';
  if (role === 'business') return '/portal/business';
  return '/admin';
}
export const demoAccounts = [
  { role: 'artist', email: 'artist@blindvision.local', path: '/portal/artist' },
  { role: 'business', email: 'business@blindvision.local', path: '/portal/business' },
  { role: 'admin', email: 'admin@blindvision.local', path: '/admin' }
];
