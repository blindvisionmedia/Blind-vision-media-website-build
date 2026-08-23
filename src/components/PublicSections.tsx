import Link from 'next/link';
import { capabilities, work } from '@/data/site';

export function Hero({ kicker='BLIND VISION MEDIA', title, text, primary, secondary }: { kicker?: string; title: string; text: string; primary?: [string,string]; secondary?: [string,string] }) {
  return <section className="hero cinematic">
    <div className="grain" />
    <div className="heroCopy">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
      <div className="ctaRow">{primary && <Link className="btn" href={primary[1]}>{primary[0]}</Link>}{secondary && <Link className="btn ghost" href={secondary[1]}>{secondary[0]}</Link>}</div>
    </div>
  </section>
}

export function SplitPathways() {
  return <section className="splitPath">
    <article><span>01 / STUDIO</span><h2>Artists, music and finished records.</h2><p>Recording, direction, production support, mixes, release planning and content around the artist’s world.</p><Link href="/studio">Enter Studio</Link></article>
    <article><span>02 / BUSINESS</span><h2>Creative production for brands that need culture.</h2><p>Photography, video, campaigns, branding and entertainment-led content that gives businesses something people can actually feel.</p><Link href="/business">Enter Business</Link></article>
  </section>
}

export function SelectedWork() {
  return <section className="editorial"><div className="sectionHead"><p className="kicker">SELECTED WORK</p><h2>Project-led, not template-led.</h2></div><div className="workRail">{work.map((item, i)=><article className="workTile" key={item.title}><div className="mediaBlock">{String(i+1).padStart(2,'0')}</div><p>{item.type}</p><h3>{item.title}</h3><span>{item.client}</span><p>{item.summary}</p></article>)}</div></section>
}

export function CapabilityBand() { return <section className="capabilities"><p className="kicker">CAPABILITIES</p>{capabilities.map(c=><span key={c}>{c}</span>)}</section> }

export function CultureSection() { return <section className="culture"><div><p className="kicker">ENTERTAINMENT & CULTURE</p><h2>Brands do not only need content. They need a reason for people to care.</h2></div><p>Blind Vision connects creative production with music, people, location, live moments and campaign ideas. The result is media that belongs to a scene rather than sitting outside it.</p></section> }
