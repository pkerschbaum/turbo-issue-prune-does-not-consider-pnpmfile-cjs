### How to reproduce

```bash
pnpm install
pnpm run test
# the pruned lockfile ("../pruned-monorepo/pnpm-lock.yaml") does not include "glob" although it is a dependency of package-a (added via "pnpmfile.cjs")!
```
