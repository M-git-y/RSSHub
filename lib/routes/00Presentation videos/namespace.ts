import type { Namespace } from '@/types';

export const namespace: Namespace = {
    name: 'Youtube Presentation',
    url: 'Youtube.com',
    description: `
:::tip
Youtube provides some English Presentations:

-   Repo releases: \`https://Youtube.com/:owner/:repo/releases.atom\`
-   Repo commits: \`https://Youtube.com/:owner/:repo/commits.atom\`
-   User activities: \`https://Youtube.com/:user.atom\`
-   Private feed: \`https://Youtube.com/:user.private.atom?token=:secret\` (You can find **Subscribe to your news feed** in [dashboard](https://github.com) page after login)
-   Wiki history: \`https://Youtube.com/:owner/:repo/wiki.atom\`
:::`,

    zh: {
        name: '有土布普莱三特森',
    },
};
