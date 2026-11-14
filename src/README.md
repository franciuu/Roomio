# Structura codului Fiki

```
src/
  main.jsx                 pornește aplicația
  app/                     layout-ul: bara de sus, navigarea între milestone-uri, tema
  shared/                  componente folosite de mai multe milestone-uri (ex. Placeholder: câmp de completat)
  styles/global.css        culorile, tipografia și stilurile comune
  milestones/
    m1-idea/               M1: ideea, echipa, piața, modelul de business
    m2-validation/         M2: confirmarea problemei (problem/), validarea soluției (solution/)
    m3-wireframe-landing/  M3: wireframe-ul (wireframe/), landing page-ul (landing/)
    m4-ux/                 M4: interviuri, persona, user stories și fluxuri, wireframe actualizat
```

Fiecare milestone are aceeași organizare:

- `M<n>Page.jsx`: antetul paginii și tab-urile cu părțile;
- `m<n>-content.js`: părțile milestone-ului și secțiunile lor (meniul de sus);
- `m<n>.css`: stilurile milestone-ului;
- câte un folder pentru fiecare parte (tab), cu:
  - `<Nume>Part.jsx`: pagina părții;
  - `<nume>-content.js`: toate textele părții (aici se modifică conținutul);
  - `components/`: componentele folosite doar de partea respectivă;
- `components/`: componentele folosite de mai multe părți ale milestone-ului.

Un milestone nou se adaugă în `app/navigation.js` (lista `MILESTONES` și, dacă are părți, `PARTS`) și în `app/App.jsx`.
