# Contributing

Contributions are welcome.

## Reporting bugs or suggesting enhancements

Open an [issue](https://github.com/milliorn/recipe-page/issues) describing the problem or idea.

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): `<type>[(scope)]: <description>`, e.g. `fix(css): correct spinner border color` or `chore(deps): bump prettier`. Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `ci`.

## Testing

Run `npm test` to run the Jest suite with coverage. Coverage is measured only against the files listed in `jest.config.js`'s `collectCoverageFrom`, not the whole repo, and `coverageThreshold` enforces a separate block per file so one well-covered file can never mask a gap in another. If you add tests for a file not yet in that list, add its path to `collectCoverageFrom` with its own `coverageThreshold` block matching what your new tests achieve, in the same pull request. Never lower an existing file's threshold; the floor only moves up as the measured set grows toward full coverage over time.

## Node version

`.nvmrc` pins Node 20, and CI reads it directly (`setup-node`'s `node-version-file` input), so `nvm use` gives you the exact version CI tests against with one source of truth. `package.json`'s `engines.node` field is deliberately wider (`>=18.0.0 <26`): it mirrors the range Gatsby's own packages declare as actually compatible, not CI's narrower test matrix, so it only warns when a version is genuinely unsupported rather than merely untested. If you hit a build issue specific to a Node version outside CI's, use `.nvmrc` to switch to 20 before assuming it's a bug.

## Submitting changes

1. Fork the repository and create a branch for your change.
2. Make your changes and run `npx prettier --check .` to confirm formatting.
3. Run `npm test` to confirm the test suite and coverage threshold pass.
4. Confirm the site builds: `npm run build`.
5. Open a pull request against `main`.

Every pull request runs through CI (formatting check, dependency check, tests, and build) and dependency vulnerability scanning before it can be merged. CI's build step needs Contentful credentials to fetch recipe content, and forked pull requests do not have access to this repository's secrets, so the build check may fail for external contributions through no fault of your own. A maintainer will verify the build manually in that case.
