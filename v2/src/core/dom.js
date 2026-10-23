/**
 * Tiny DOM builder.
 *
 * Every element in this project is created through `h()`, which builds real
 * nodes with `document.createElement` and inserts string children with
 * `textContent`. There is deliberately no `innerHTML` anywhere in `src/`:
 * content authors can write `&`, `<` or quotes in `content/de.js` without
 * escaping anything and without being able to break the page.
 *
 *   h('p', { class: 'lead' }, 'Fenster & Türen')
 *   h('a', { href: 'kontakt', onClick: fn }, 'Kontakt')
 *   h('ul', null, items.map((i) => h('li', null, i)))
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

/** Attributes that must be assigned as properties rather than via setAttribute. */
const PROPERTIES = new Set(['value', 'checked', 'selected', 'disabled', 'muted']);

/**
 * @param {string} tag
 * @param {object|null} [props]
 * @param {...any} children  Strings, Nodes, arrays, or null/false/undefined (skipped).
 * @returns {HTMLElement}
 */
export function h(tag, props, ...children) {
  return build(document.createElement(tag), props, children);
}

/**
 * Same as `h`, but in the SVG namespace. Used only by `components/icon.js`.
 */
export function svg(tag, props, ...children) {
  return build(document.createElementNS(SVG_NS, tag), props, children);
}

/** A DocumentFragment holding the given children. */
export function frag(...children) {
  const f = document.createDocumentFragment();
  append(f, children);
  return f;
}

/** Replace all children of `parent` with `children`. */
export function replace(parent, ...children) {
  parent.replaceChildren();
  append(parent, children);
  return parent;
}

/** Append children to a parent, flattening arrays and skipping empty values. */
export function append(parent, children) {
  for (const child of children.flat(Infinity)) {
    if (child === null || child === undefined || child === false || child === true) continue;
    parent.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return parent;
}

/* -------------------------------------------------------------------------- */

function build(el, props, children) {
  if (props) applyProps(el, props);
  append(el, children);
  return el;
}

function applyProps(el, props) {
  for (const [key, value] of Object.entries(props)) {
    if (value === null || value === undefined || value === false) continue;

    if (key === 'class') {
      el.setAttribute('class', toClassName(value));
    } else if (key === 'text') {
      el.textContent = String(value);
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(el.style, value);
    } else if (key === 'dataset') {
      Object.assign(el.dataset, value);
    } else if (key === 'on' && typeof value === 'object') {
      for (const [type, handler] of Object.entries(value)) el.addEventListener(type, handler);
    } else if (key.startsWith('on') && typeof value === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (PROPERTIES.has(key)) {
      el[key] = value;
    } else {
      el.setAttribute(key, value === true ? '' : String(value));
    }
  }
}

function toClassName(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(' ');
  if (typeof value === 'object') {
    return Object.entries(value)
      .filter(([, on]) => on)
      .map(([name]) => name)
      .join(' ');
  }
  return String(value);
}
