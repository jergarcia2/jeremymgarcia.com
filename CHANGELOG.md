# Changelog

All notable changes to this site are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and versions follow [Semantic Versioning](https://semver.org/) in spirit
(MAJOR.MINOR.PATCH — MAJOR for a redesign/rebuild, MINOR for new content
or features, PATCH for bug fixes and small tweaks). This is a static
personal site with no build/release pipeline, so "release" means
"pushed to `main`, deployed via GitHub Pages." Each version below
corresponds to a tagged commit (`git tag`) for easy rollback/diffing.

## [Unreleased]

## [2.1.0] - 2026-11-21

### Changed
- **Content refresh from the November 2026 resume.** Experience
  timeline now lists each role separately with month-level dates:
  current IT Specialist (Information Security / Systems
  Administration) role, a short Lead ISSO stint on an enterprise voice
  system, Cybersecurity Deputy Division Head, Lead ISSO, and Senior
  Cyber Defense Analyst / Master Gunner. Bullets now carry the
  resume's concrete figures (six concurrent ATO packages, 200+ STIGs,
  75 ACAS scans, 300+ endpoints, three-node RHV cluster, five-node
  Security Onion deployment).
- Homepage hero, FOCUS line, featured-work cards, and Person JSON-LD
  updated to match the current role (Splunk, Defender for Endpoint,
  Linux/RHEL) while keeping the cybersecurity headline.
- Expertise page: added Red Hat (RHEL, Satellite, IdM, RHV), VMware
  vSphere, Palo Alto, Zeek/Suricata, ELK, Defender for Endpoint,
  STIG/SCAP and ACAS skills; Ansible and Docker labeled "working
  knowledge" per the honesty convention; added an RHCSA in-progress
  card; Security+ shown as "ce".
- Experience sidebar: training list and core competencies brought in
  line with the resume; added the CS minor and certificate date.

### Added
- Savannah River Nuclear Solutions automation role (2016–2017) on the
  Experience timeline.

### Removed
- Items not on the current resume: SANS FOR500/FOR508/FOR572, GPA,
  scholarship callout, CTF/ACM bullet, and Cisco ISE.
- Kept to the public-site rule: no command, unit, program, or system
  names and no clearance level, even where the resume includes them.

## [2.0.0] - 2026-08-28

### Changed
- **Full visual redesign: "Field Manual."** Moved off the navy/steel/
  amber "space/SaaS" look toward a warm charcoal-olive, amber-accent
  identity with condensed uppercase placard-style headings (Barlow
  Condensed replacing Space Grotesk), Source Sans 3 replacing Inter
  for body text, corner-bracket detailing on cards, dashed schematic
  dividers (status-line, page-header, section divider), and sharper
  corners (radius 4/8px -> 2/3px) across every page. Logo SVG and
  favicon recolored to match. Built and reviewed on a separate branch
  (`theme/field-manual`) before merging, per plan, so the live site
  didn't change until this was approved.

## [1.5.0] - 2026-08-27

### Added
- Favicon (previously none existed on any page).
- Open Graph + Twitter Card meta tags on every page (previously only
  the homepage had them).
- Canonical `<link>` on every page and Person JSON-LD structured data
  on the homepage.
- `sitemap.xml` and `robots.txt`.

### Changed
- Renamed `certifications.html` -> `expertise.html` so the URL matches
  its own nav label ("Expertise"); Home/logo links now point to `/`
  instead of `index.html` for a clean canonical URL, with `nav.js`
  updated to treat `/` as equivalent to index.html for active-link
  detection.
- Moved Google Fonts loading from CSS `@import` to `<link>` tags with
  preconnect hints — `@import` serializes the font request behind the
  stylesheet's own load; a `<link>` lets it start in parallel.

### Security
- **Rewrote git history to remove sensitive information that had been
  committed and later "fixed" in a later commit but was still fully
  recoverable from the public repo's history** — clearance level,
  grade, specific command/unit names, Navy-specific compliance
  references, and a personal email address. Used `git-filter-repo`
  to scrub the strings from every commit's content *and* commit
  messages across all history and all version tags, force-pushed the
  rewritten history, and independently re-cloned from GitHub to
  confirm zero matches remained. Repo had zero forks, so no external
  copies were left unaddressed.

## [1.4.1] - 2026-08-26

### Fixed
- Experience page's timeline+sidebar layout was a fixed
  `grid-template-columns: 1fr 300px` with no responsive override —
  below ~960px wide this caused horizontal overflow and truncated
  text (confirmed broken at 375px and 880px). Added a proper
  breakpoint (900px) that collapses to one column and drops the
  sidebar's sticky positioning. Found while auditing responsiveness
  in response to a Bootstrap-vs-custom-CSS question — this was a
  genuine pre-existing gap, not a framework limitation.

## [1.4.0] - 2026-08-26

### Added
- CompTIA Linux+ certification card (Expertise page); active cert count
  bumped 5 → 6 sitewide.
- Honesty labeling on the skills matrix: pills for skills still being
  built (Cloud Security Architecture, Cloud Compliance, Identity &
  Access Mgmt, Cloud-Native Security Controls — no hands-on experience
  yet; PowerShell, Bash Scripting — working knowledge, not expert) now
  render with a dashed border and an explicit "(learning)" /
  "(working knowledge)" suffix, plus a one-line legend explaining the
  convention. Goal: don't misrepresent skill depth to viewers.
- This changelog.

### Changed
- Sitewide spacing pass, round 2: base `section` padding 56px → 40px,
  page-header padding 48/32 → 40/24, footer margin-top 56 → 40,
  empty-state padding 56 → 40, mobile breakpoint values scaled to
  match. Prior rounds (see 1.1.0–1.3.0) were incremental trims that
  kept reading as "still too much" — this pass commits to a
  meaningfully leaner baseline instead of nudging again.
- Expertise page: collapsed the double-padding around the
  Credentials/Skills divider (was ~208px stacked gap, now ~56–70px)
  by zeroing the adjacent section paddings and letting the divider's
  own margin do the work.

### Fixed
- Removed a duplicate "Vulnerability Management" skill pill
  (Expertise page).
- Removed a duplicate "Aviation Maintenance" tag on the Experience
  page's military timeline entry; replaced the second occurrence with
  "Flight Operations" (matches the role title, was previously just
  a copy-paste duplicate).

## [1.3.0] - 2026-08-26

### Changed
- Sitewide padding tightening, round 1: base `section` padding
  80px → 56px (propagates to Experience, Expertise, Projects, Contact
  via the shared rule), `section-subtitle` margin-bottom 3rem → 2rem,
  footer margin-top 80 → 56, empty-state padding 80 → 56, divider
  margin 3rem → 1.5rem, mobile breakpoints scaled to match.
- Directly fixes the homepage Background→Featured Work gap
  (80px → 56px) flagged after the 1.2.0 hero work made the rest of
  the page's spacing look inconsistent by comparison.

## [1.2.1] - 2026-08-26

### Fixed
- Trimmed padding around the homepage metrics strip (status-line→metrics
  and metrics→Background gaps, 80px → 40px) — leftover default section
  spacing that stood out once the hero above it was tightened.

## [1.2.0] - 2026-08-26

### Changed
- Hero block compacted further: top padding 56 → 40px, and every
  internal margin (eyebrow/name/tagline/mission/buttons) tightened.
  Mission paragraph column widened (56ch → 64ch) and line-height
  reduced so it wraps to fewer lines. A first-round 24px trim (see
  1.1.0) wasn't visually meaningful on wide viewports; this is the
  decisive cut.
- Homepage section order changed: the "Background" narrative card now
  sits between the metrics strip and "Featured Work," so the personal
  story reads before the project/role tiles instead of after.

## [1.1.0] - 2026-08-26

### Added
- Homepage FOCUS status-line item now names the target career
  direction ("Security Engineering · Cloud · Cyber Defense") instead
  of generic ops terms, per repositioning strategy (see 1.0.0).

### Fixed
- Hero block padding reduced (80 → 56px top, 64 → 40px CTA-to-status
  gap) — first pass at addressing "hero feels oversized" feedback.
- Status-line text no longer clips off-screen on mobile — long items
  (e.g. Expertise page's DOMAINS line) now wrap instead of being cut
  off by `overflow: hidden`.

## [1.0.0] - 2026-08-26

First hardened release after merging the local working copy with the
GitHub-hosted site history.

### Added
- CompTIA Linux+ noted in repositioning pass (see Changed).
- Honest, non-oversold line about pursuing cloud security / detection
  engineering and evaluating graduate coursework.

### Changed
- Homepage and meta copy reframed to lead with security engineering /
  infrastructure / Zero Trust rather than DoD compliance, per career
  repositioning strategy (technical security engineering vs.
  RMF/GRC-first market positioning).
- Homepage "Featured Work" cards reordered so infrastructure/cyber
  defense/home lab lead and ISSO/RMF/leadership roles settle lower as
  background context.
- "Years in field" updated 7+ → 8+ (June 2018 start).

### Fixed
- **Contact form was completely broken.** An unescaped apostrophe in
  the success-message JS string (`'...I'll be in touch...'`) was a
  syntax error that broke parsing of the entire `<script>` block, so
  `handleSubmit` never existed and the AJAX submit handler silently
  never ran.
- Removed OPSEC leaks: [REDACTED] grade (Contact page meta description),
  and Navy-identifying compliance references — [REDACTED], Fleet
  Cyber Command — (Experience page).
- Fixed a homepage CSS bug: `section:first-of-type { padding-top: 0 }`
  was firing on the first section of *every* container on the page,
  not just the true page-top hero, creating a ~160px dead gap between
  "Featured Work" and the "Background" card. Replaced with
  `section + section { padding-top: 0 }`, which only collapses
  padding between genuinely stacked sections.
- Page-header banner (Experience/Expertise/Projects/Contact) padding
  reduced (~112px of dead space below the subtitle → ~72px).

### Infrastructure
- Local `Documents/Website` copy merged with the GitHub-hosted
  history at `jergarcia2/jeremymgarcia.com` (previously an unlinked
  local copy).
- Confirmed DNS/hosting: `jeremymgarcia.com` is registered at
  Squarespace but served via GitHub Pages (A-records point to GitHub;
  Squarespace's "problem with this domain" banner is a false positive
  from Squarespace not recognizing its own hosting preset — do not
  apply it, it would break the working GitHub Pages config).
