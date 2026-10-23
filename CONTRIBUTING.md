# Contributing

Contributions are welcome.

## Reporting bugs or suggesting enhancements

Open an [issue](https://github.com/milliorn/recipe-page/issues) describing the problem or idea.

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): `<type>[(scope)]: <description>`, e.g. `fix(css): correct spinner border color` or `chore(deps): bump prettier`. Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `ci`.

## Testing

Run `npm test` to run the Jest suite with coverage. Coverage is measured only against the files listed in `jest.config.js`'s `collectCoverageFrom`, not the whole repo, and `coverageThreshold` is set to match what that scoped set currently achieves. If you add tests for a file not yet in that list, add its path to `collectCoverageFrom` and update `coverageThreshold` to match the new baseline in the same pull request, so the floor never regresses and the measured set grows toward full coverage over time.

## Submitting changes

1. Fork the repository and create a branch for your change.
2. Make your changes and run `npx prettier --check .` to confirm formatting.
3. Run `npm test` to confirm the test suite and coverage threshold pass.
4. Confirm the site builds: `npm run build`.
5. Open a pull request against `main`.

Every pull request runs through CI (build + formatting check) and dependency vulnerability scanning before it can be merged. CI's build step needs Contentful credentials to fetch recipe content, and forked pull requests do not have access to this repository's secrets, so the build check may fail for external contributions through no fault of your own. A maintainer will verify the build manually in that case.
