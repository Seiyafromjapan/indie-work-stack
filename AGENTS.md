# Indie Work Stack: AI Agent Operating Instructions

These instructions apply to the entire repository. Follow the user's current instructions when they override this file.

## Business purpose and authority

Indie Work Stack is an English-language SaaS affiliate website for English-speaking freelancers, solo business owners, independent consultants, and small agencies.

The primary objective is sustainable affiliate revenue earned by helping readers choose and use useful SaaS products. Optimize for commercial usefulness, reader trust, search intent, and realistic monetization potential, not traffic alone.

The user is the CEO and final approver. Agents should complete as much authorized research, production, QA, implementation, and analysis as practical. Major strategic decisions and final publishing approval remain with the user. Prepare concrete, reviewable work before requesting final approval; do not interpret approval to draft or edit as approval to publish.

## Content and research principles

- Publish site content in English.
- Be helpful first; affiliate revenue comes second. Preserve reader trust.
- Never fabricate features, pricing, affiliate terms, commissions, evidence, or hands-on experience.
- Verify time-sensitive SaaS facts before publishing whenever possible, using official pricing pages, documentation, and affiliate terms. Record sources and relevant verification dates. If an important fact cannot be verified, identify the uncertainty and omit or qualify the claim rather than presenting it as current fact.
- Clearly distinguish documentation-based research from actual hands-on testing. Claim testing only when supported by work actually performed.
- Avoid exaggerated marketing claims and unsupported promises of results.
- Prefer useful evergreen SEO content with commercial relevance. Match the page to a clear search intent.
- Review existing coverage to avoid duplication and search-intent cannibalization. Add relevant internal links in both directions where useful.
- Include appropriate affiliate disclosures near commercial recommendations and links, and use appropriate link attributes such as `rel="sponsored"` for affiliate links.
- Never recommend a product solely because it has an affiliate program.

## Choosing content opportunities

When otherwise reasonable opportunities compete, generally prioritize:

1. A strong reader problem and clear search intent.
2. Relevant SaaS with realistic monetization potential.
3. Proximity to a software buying or adoption decision.
4. Evergreen usefulness.
5. Opportunities to build useful internal-link clusters.
6. Traffic volume alone.

Do not turn every article into a sales page. Informational content should support trust, topical authority, email acquisition, internal linking, or future commercial conversion. Surface major changes in audience, positioning, monetization strategy, or editorial direction for the user's decision.

## Article workflow

For substantial new commercial content, prefer this sequence:

1. Define search intent and business purpose.
2. Research the topic and product.
3. Verify important current facts.
4. Review existing Indie Work Stack content for duplication and cannibalization.
5. Create an outline.
6. Draft.
7. Fact-check the draft against its sources.
8. Review SEO, metadata, and structured data.
9. Review internal links and discovery from relevant existing pages.
10. Review affiliate destinations, link attributes, and disclosures.
11. Check mobile layout, readability, and accessibility implications.
12. Update `sitemap.xml` and `feed.xml` where appropriate.
13. Test relevant links and page structure.
14. Present completed work, checks, remaining uncertainties, and any publishing action for final approval.

Scale the workflow to the task. Small, clearly requested edits do not require unnecessary planning or approval checkpoints.

## Email strategy

Kit may be used for email capture and audience building. Treat subscribers as a long-term business asset, rather than maximizing short-term signup volume. Lead magnets and email CTAs must relate clearly to the article topic and accurately describe what readers will receive. Keep privacy wording and measurement aligned with the actual signup flow when changing it.

## Repository and publishing model

The current site is static HTML, CSS, and JavaScript intended for GitHub Pages. The checked-in HTML files are the site; there is no existing framework, package manager configuration, or build pipeline in the repository.

- Root HTML files contain the homepage, guides, supporting pages, and custom `404.html`.
- `index.html` is the main guide directory; `start-here.html` provides onboarding; `resources.html` lists downloads and signup options.
- `styles.css` contains shared styling and responsive rules.
- `analytics.js` handles analytics consent and click/download events; HTML pages also contain inline consent initialization and load Google Analytics.
- `assets/` contains images and downloadable TXT/CSV resources. A second email-marketing checklist TXT file also exists at the root.
- `sitemap.xml`, `feed.xml`, and `robots.txt` support discovery.
- Canonical URLs currently use `https://seiyafromjapan.github.io/indie-work-stack/`.
- The inspected checkout used `main` tracking `origin/main`, with remote `https://github.com/Seiyafromjapan/indie-work-stack.git`. Recheck actual Git state before work.
- No GitHub Actions workflow, `CNAME`, `_config.yml`, or `.nojekyll` was present during initial inspection. Publishing from `main` at the repository root is an inference, not a verified GitHub Pages setting.

Do not claim that hosting settings, deployment, or live behavior were verified unless they actually were. Distinguish local validation from live verification.

## Technical implementation rules

- Inspect existing patterns and relevant pages before editing.
- Preserve the visual identity unless the user explicitly requests a redesign.
- Preserve existing pages and URLs. Consider links, downloads, canonical URLs, and the GitHub Pages project subpath when changing paths.
- Keep pages mobile responsive and consider accessibility, including semantic structure, keyboard use, labels, contrast, and table overflow.
- Prefer simple, maintainable HTML/CSS/JS. Reuse existing styles and patterns where practical.
- Avoid frameworks, dependencies, build systems, and unnecessary complexity without a strong reason. Explain any proposed architectural change before implementing it within the authorized scope.
- Keep titles, descriptions, canonical URLs, social metadata, author information, dates, and structured data consistent and accurate. Do not change freshness dates merely to make content appear newer.
- Maintain `sitemap.xml` and `feed.xml` when relevant; check that intended public content remains discoverable.
- Test internal links after meaningful changes, including asset/download destinations and fragment targets. Account for nested missing URLs when working on the 404 page.
- Run checks appropriate to the change, such as HTML structure, XML/JSON parsing, link checks, and responsive/browser review. Report what was actually checked and any limits.

## Git safety and approval

- Inspect Git status before substantial work.
- Preserve unrelated existing changes; never discard or overwrite them to simplify the task.
- Do not commit unless the user explicitly requests a commit.
- Before a requested commit, summarize the files changed and checks performed.
- Never push to GitHub unless explicitly requested. A commit request alone does not authorize a push.
- Never force-push.
- Never rewrite history unless explicitly requested and the consequences have been explained.
- The user is the final approval authority for publishing. A push may trigger GitHub Pages deployment; consider that effect before acting. Existing explicit authorization need not be requested again for the same scope.

## Known areas to consider

The initial inspection identified the following possible maintenance work. These are review candidates, not instructions to fix everything automatically. Recheck current behavior and prioritize changes by business impact, task scope, and user approval.

- Privacy wording predates the site's current Kit signup and affiliate usage.
- Kit signup links match both partner-click and lead-magnet tracking conditions, mixing those categories in reporting.
- There is no visible way to revisit saved analytics consent without using browser settings.
- Relative URLs on the 404 page may fail for nested missing paths.
- Navigation, footers, metadata, and consent setup are duplicated across pages.
- Some older pages have inconsistent navigation; newer topics are not fully represented in onboarding.
- RSS coverage is incomplete: the free-CRM-versus-spreadsheet guide was missing from the feed during inspection.
- The email-marketing launch checklist exists as identical downloads at two paths.
- Metadata conventions need review, including sitemap versus article modification dates and metadata coverage on the Terms page.
- Some newer content, including Coursera and ClickUp guides, has limited internal discovery beyond the homepage.
- Automated maintenance checks and repository documentation were absent during initial inspection.

Do not bundle unrelated remediation into a requested edit. Surface worthwhile follow-up work separately.

## Working style and completion reports

For larger tasks, inspect first, explain the proposed approach, implement carefully, run relevant checks, and summarize exactly what changed. Identify remaining uncertainties and anything requiring human approval. Continue independently with work already authorized; ask only when missing information or a decision materially blocks progress.

Keep small edits lightweight. Be candid about limitations and failed checks. Completion reports should identify changed files, the resulting behavior or content, validation performed, and any outstanding publishing or strategic approval.
