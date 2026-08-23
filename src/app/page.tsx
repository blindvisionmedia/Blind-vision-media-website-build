import { Nav, Footer } from '@/components/Nav';
import { Hero, SplitPathways, SelectedWork, CapabilityBand, CultureSection } from '@/components/PublicSections';
export default function Home(){return <><Nav/><main><Hero title="SEE THE VISION BEFORE IT EXISTS." text="Blind Vision Media is a Brisbane creative company built across studio, artists, content, business production and culture." primary={['STUDIO','/studio']} secondary={['BUSINESS','/business']}/><SplitPathways/><SelectedWork/><CapabilityBand/><CultureSection/></main><Footer/></>}
