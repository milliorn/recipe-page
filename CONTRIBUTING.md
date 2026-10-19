# Contributing

Contributions are welcome.

## Reporting bugs or suggesting enhancements

Open an [issue](https://github.com/milliorn/recipe-page/issues) describing the problem or idea.

## Submitting changes

1. Fork the repository and create a branch for your change.
2. Make your changes and run `npx prettier --check .` to confirm formatting.
3. Confirm the site builds: `npm run build`.
4. Open a pull request against `main`.

Every pull request runs through CI (build + formatting check) and dependency vulnerability scanning before it can be merged. CI's build step needs Contentful credentials to fetch recipe content, and forked pull requests do not have access to this repository's secrets, so the build check may fail for external contributions through no fault of your own. A maintainer will verify the build manually in that case.
