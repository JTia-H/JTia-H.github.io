/**
 * Design reminder — Minimal Academic CV:
 * Follow the gyx-gloria.github.io reference: a white, narrow, document-like academic
 * homepage with a left-text/right-portrait introduction and plain vertical sections.
 */
const scholarProfile =
  "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&user=z0qx-qMAAAAJ";
const advisorChen =
  "https://scholar.google.com/citations?user=rODiYsoAAAAJ&hl=en";
const advisorLi =
  "https://scholar.google.com/citations?user=x_z7k4QAAAAJ&hl=zh-CN&oi=ao";

const publications = [
  {
    title:
      "Taming Two-Dimensional Polymerization by a Machine-Learning Discovered Crystallization Model",
    authors: <><strong>J. Tian</strong>, K. A. Treaster, L. Xiong, Z. Wang, A. M. Evans, H. Li</>,
    venue: "Angewandte Chemie, 136(39), e202408937",
    year: "2024",
    citations: "15 citations",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ&citation_for_view=z0qx-qMAAAAJ:d1gkVwhDpl0C",
  },
  {
    title:
      "Intrinsic Mechanical Properties of Two-Dimensional Covalent Organic Frameworks",
    authors: <>L. Xiong, C. Fu, <strong>J. Tian</strong>, Y. Geng, L. Han, H. Zhang, H. Li</>,
    venue: "Chemical Science, 16(35), 15913–15925",
    year: "2025",
    citations: "12 citations",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ:u5HHmVD_uO8C",
  },
  {
    title:
      "MlCOFSyn: A Machine Learning Framework To Facilitate the Synthesis of 2D Covalent Organic Frameworks",
    authors: <>Y. Shi*, <strong>J. Tian</strong>*, H. Li</>,
    venue: "Journal of Chemical Information and Modeling, 65(12), 6027–6037",
    year: "2025",
    citations: "4 citations",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ:u-x6o8ySG0sC",
  },
  {
    title:
      "Atomistic Structure, Motion, and Thermal Conductivity of van der Waals Grain Boundaries in Two-Dimensional Covalent Organic Frameworks",
    authors: <>L. Xiong, Z. Wang, <strong>J. Tian</strong>, K. Du, J.-L. Brédas, H. Li</>,
    venue: "Advanced Functional Materials, e22089",
    year: "2026",
    citations: "",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ:2osOgNQ5qMEC",
  },
];

export default function Home() {
  return (
    <div className="academic-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" className="content-column">
        <section className="profile" aria-labelledby="profile-name">
          <div className="profile__text">
            <div className="profile__name-row">
              <h1 id="profile-name">Jiaxin Tian</h1>
              <div className="profile__photos">
                <img
                  className="profile__image"
                  src="/assets/jiaxin-calico.jpg"
                  alt="Jiaxin Tian’s calico cat"
                />
                <img
                  className="profile__image"
                  src="/assets/jiaxin-cat-avatar.png"
                  alt="Jiaxin Tian’s tuxedo cat"
                />
              </div>
            </div>
            <p>
              I am a Ph.D. student in Chemical &amp; Biological Engineering at
              The Hong Kong University of Science and Technology, advised by{" "}
              <a href={advisorChen} target="_blank" rel="noreferrer">Prof. Shensheng Chen</a>.
            </p>
            <p>
              My research focuses on physics-informed AI for Science, intrinsically
              disordered proteins, liquid–liquid phase separation, and coarse-grained
              force-field development.
            </p>
            <p>
              I work with all-atom and coarse-grained molecular dynamics, as well as
              Transformer, graph neural network, and diffusion architectures.
            </p>
            <div className="profile__links" aria-label="Academic links">
              <a href="mailto:jtianaq@connect.ust.hk">Email</a>
              <span>/</span>
              <a href={scholarProfile} target="_blank" rel="noreferrer">Google Scholar</a>
            </div>
          </div>
        </section>

        <section className="cv-section" id="education" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <ul className="cv-list">
            <li>
              <span className="cv-list__main"><strong>Ph.D.</strong> @ The Hong Kong University of Science and Technology, 2023–present</span>
              <span>Department of Chemical &amp; Biological Engineering · Advisor: <a href={advisorChen} target="_blank" rel="noreferrer">Prof. Shensheng Chen</a></span>
            </li>
            <li>
              <span className="cv-list__main"><strong>M.Sc.</strong> @ Shanghai University</span>
              <span>School of Microelectronics · Advisor: <a href={advisorLi} target="_blank" rel="noreferrer">Prof. Haoyuan Li</a></span>
            </li>
            <li>
              <span className="cv-list__main"><strong>B.Eng.</strong> @ Beijing Institute of Technology</span>
              <span>School of Computer Science &amp; Technology · Dual Degree in Economics</span>
            </li>
          </ul>
        </section>

        <section className="cv-section" id="research" aria-labelledby="research-title">
          <h2 id="research-title">Research Interests</h2>
          <ul className="cv-list cv-list--compact">
            <li>
              <span className="cv-list__main"><strong>Intrinsically Disordered Proteins and LLPS</strong></span>
              <span>Conformational ensembles, collective biomolecular behavior, and physics-informed sequence modeling.</span>
            </li>
            <li>
              <span className="cv-list__main"><strong>Coarse-Grained Force Fields</strong></span>
              <span>Developing coarse-grained molecular dynamics models and ML-based coarse graining.</span>
            </li>
            <li>
              <span className="cv-list__main"><strong>Scientific Machine Learning</strong></span>
              <span>Transformer, graph neural network, and diffusion approaches for molecular systems.</span>
            </li>
          </ul>
        </section>

        <section className="cv-section publications" id="publications" aria-labelledby="publications-title">
          <div className="section-heading-row">
            <h2 id="publications-title">Publications</h2>
            <a href={scholarProfile} target="_blank" rel="noreferrer">Google Scholar ↗</a>
          </div>
          <p className="section-note">* indicates equal contribution. Citation counts are linked to the public Scholar record.</p>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-item" key={publication.title}>
                <div className="publication-item__year">{publication.year}</div>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  <p className="publication-item__venue">{publication.venue}</p>
                  <a href={publication.url} target="_blank" rel="noreferrer">
                    Google Scholar{publication.citations ? ` · ${publication.citations}` : ""} ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="page-footer">© {new Date().getFullYear()} Jiaxin Tian</footer>
    </div>
  );
}
