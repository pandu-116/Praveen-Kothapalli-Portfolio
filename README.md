# Praveen Kothapalli — Professional Portfolio

A responsive website written only in HTML, CSS, and JavaScript. No React requirement, TypeScript, Vite, package installation, build step, server code, or API keys.

## Open locally
Extract the ZIP and open `index.html` in any modern browser. Navigation and project dialogs work directly. An internet connection loads the optional Manrope font; Arial is the offline fallback.

## Publish
Upload this folder to any static host (GitHub Pages, Netlify, or your own hosting). `index.html` must be at the root of the published folder. There is no build command. For GitHub Pages, commit these files to a repository, open Settings → Pages, and select the branch and root folder.

## Add your actual resume
No resume PDF was supplied. The website provides a functional direct-email resume request instead of a broken or invented PDF.
1. Create an `assets` folder here.
2. Add your real PDF as `assets/Praveen-Kothapalli-Resume.pdf`.
3. In `script.js`, change `const RESUME_URL = '';` to `const RESUME_URL = 'assets/Praveen-Kothapalli-Resume.pdf';`.
4. Resume buttons become working download links and a View resume link appears. Test the PDF after deployment. A browser may open a PDF instead of downloading depending on hosting headers.

## Verified links and truthful content
Content is based on the supplied portfolio brief, not an independently supplied resume PDF. The GitHub profile is provided by the owner. Unverified LinkedIn and direct project repository URLs are not guessed. No phone number or job-search availability is published.
- Set `LINKEDIN_URL` in `script.js` only after verifying your real profile.
- Add verified project URLs to the relevant `repository` fields in `script.js`.
- No live demos are linked without verified URLs.
- Edit skills and career details in `index.html`, and case-study text in `script.js`.
- The architecture diagram and project visuals are illustrations, not application screenshots. Inventory sample data is explicitly illustrative. The 91% model accuracy and employment figures are supplied claims, not independent measurements.
- Specific dataset, evaluation and deployment troubleshooting details were not supplied, so case studies do not invent them.

## Website download link
The preview includes a downloadable source ZIP. To keep that link on your own host, place the ZIP beside `index.html` as `portfolio-website.zip`. Otherwise remove the `source-download` link from the footer. The archive is deliberately not nested inside itself.

## Accessibility and maintenance
Semantic sections, labelled navigation, keyboard focus, Escape-to-close native dialogs, reduced-motion support, and mobile navigation are included. Email uses the visitor's configured mail application; no contact-form service is required. Fonts are the only external display dependency.
