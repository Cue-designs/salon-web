import type { ReactNode } from "react";

export default function PageIntro({
  number,
  eyebrow,
  title,
  description,
  className = "",
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  className?: string;
}) {
  return (
    <section className={`page-intro ${className}`}>
      <div className="page-intro-copy">
        <div className="section-kicker">
          <span>{number}</span>
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="page-intro-orbit" aria-hidden="true">
        <span>{number}</span>
        <i>✳</i>
      </div>
    </section>
  );
}
