# Shell Shock: How Australia Became a Nut Superpower

FIT3179 Data Visualisation 2 (Semester 2, 2026), critique draft.
Author: Shi Lynn Loh. Volume 9: Food, Agriculture & Lifestyle (Australian focus). Topic: Australian nuts.

## View it

Enable GitHub Pages for this repository (Settings → Pages → Deploy from branch → `main` / root).
The page is then served at `https://<your-username>.github.io/<repo-name>/`.

To preview locally, run a local server from this folder (for example the VS Code Live Server extension,
or `python -m http.server`) and open `index.html`. Opening the file directly (`file://`) will not load the data.

## Structure

| Path | Contents |
| --- | --- |
| `index.html` | Single scrolling page (story, layout, metadata) |
| `css/style.css` | Typography (Fraunces + Source Sans 3), colours, layout |
| `js/main.js` | Embeds each chart with `vegaEmbed` |
| `js/*.vg.json` | One human-readable Vega-Lite specification per chart (12 charts) |
| `data/` | CSV and GeoJSON data, plus simplified TopoJSON boundaries |

## Charts and idioms

| # | Chart | Idiom |
| --- | --- | --- |
| 1 | Almond production vs hectares planted per year | Line chart aligned with bar chart |
| 2 | Share of farm-gate value by nut | Waffle chart |
| 3 | Share of each nut's crop by state | Heatmap |
| 4 | Number of nut crops grown by state | Choropleth map (conic equal-area) |
| 5 | Almond and macadamia growing regions | Proportional symbol maps (small multiples) |
| 6 | Almond orchard area by region, 2023 vs 2026 | Dumbbell chart |
| 7 | Macadamia crop by region, 2024 vs 2025 | Slope graph |
| 8 | Macadamia crop 2021–2025 and 2030 forecast | Line chart |
| 9 | Export destinations | Origin–destination flow map (Equal Earth) |
| 10 | Rank of almond export destinations | Bump chart |
| 11 | Imports vs exports as a share of supply and production | Diverging (butterfly) bar chart |
| 12 | World macadamia supply, 2025 and 2030 forecast | Range plot |

## Data sources

- Hort Innovation, *Australian Horticulture Statistics Handbook 2023/24 – Nuts* and *2021/22 – Nuts*.
- Almond Board of Australia, *Almond Insights 2019/20*; 2024/25 crop and LandIQ planting figures as reported by FreshPlaza (2025, 2026).
- Australian Macadamia Society, *2024 Yearbook* and *2025 Yearbook*.
- Natural Earth (world countries, 1:110m); Australian state boundaries (github.com/tonywr71/GeoJson-Data), simplified with Mapshaper.

Notes: almond figures are kernel tonnes and macadamia figures are tonnes in-shell, so the two crops are never
plotted on the same scale. Growing-region coordinates are approximate regional centres. The "Sunraysia (Vic + NSW) & WA"
2023 value is derived as the national total minus the other listed regions.

AI tools (Claude) were used to help prepare data files and chart code, and to check grammar.
