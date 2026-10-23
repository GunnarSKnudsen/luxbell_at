/**
 * Inline SVG icons.
 *
 * Replaces the three icon PNGs of the old site: these scale to any size, take
 * their colour from `currentColor`, and cost no extra HTTP requests.
 *
 * All icons share a 24×24 box and a 1.6px stroke so they sit together evenly.
 */

import { svg } from '../core/dom.js';

/** Path data only — everything else is identical across icons. */
const PATHS = {
  phone: [
    'M6.5 3h3l1.5 4-2 1.2a12 12 0 0 0 5.8 5.8L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z',
  ],
  mail: ['M3 6.5h18v11H3z', 'm3 7 9 6 9-6'],
  pin: ['M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  download: ['M12 3v12', 'm7.5 10.5 4.5 4.5 4.5-4.5', 'M4 20h16'],
  file: ['M13 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V8.5Z', 'M13 3v5.5h5.5'],
  search: ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'm20 20-4-4'],
  close: ['m6 6 12 12', 'm18 6-12 12'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  chevronDown: ['m6 9.5 6 6 6-6'],
  chevronRight: ['m9.5 6 6 6-6 6'],
  arrowRight: ['M4 12h15', 'm13 6 6 6-6 6'],
  external: ['M14 4h6v6', 'M20 4 11 13', 'M18 14v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5h5'],
  check: ['m5 12.5 4.5 4.5L19 7.5'],
};

/**
 * @param {keyof typeof PATHS} name
 * @param {object} [options]
 * @param {number} [options.size=24]
 * @param {string} [options.class]
 */
export function icon(name, { size = 24, class: className } = {}) {
  const paths = PATHS[name];
  if (!paths) throw new Error(`Unknown icon: ${name}`);

  return svg(
    'svg',
    {
      class: ['icon', className],
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 1.6,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true',
      focusable: 'false',
    },
    paths.map((d) => svg('path', { d })),
  );
}
