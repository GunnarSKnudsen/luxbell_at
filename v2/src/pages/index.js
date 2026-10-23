/**
 * Page registry.
 *
 * `ROUTES` in `content/site.js` names a `page` per route; this maps that name
 * to the module that renders it. `notFound` and `error` are used by the router
 * directly and have no route of their own.
 */

import { contentPage } from './content-page.js';
import { referencesPage } from './references.js';
import { errorPage, notFoundPage } from './status-pages.js';

export const pages = {
  content: contentPage,
  references: referencesPage,
  notFound: notFoundPage,
  error: errorPage,
};
