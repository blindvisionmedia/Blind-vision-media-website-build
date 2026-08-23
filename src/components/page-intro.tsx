type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PageIntro({ eyebrow, title, copy }: PageIntroProps) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{copy}</p>
    </section>
  );
}
