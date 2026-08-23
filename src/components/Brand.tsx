import Image from 'next/image';

export function BrandMark({ compact=false }: { compact?: boolean }) {
  return (
    <div className="brandmark">
      <Image src="/assets/bv-logo-outline.png" alt="Blind Vision Media logo" width={compact ? 42 : 64} height={compact ? 42 : 64} priority />
      {!compact && <span>BLIND VISION<br/><em>MEDIA</em></span>}
    </div>
  );
}
