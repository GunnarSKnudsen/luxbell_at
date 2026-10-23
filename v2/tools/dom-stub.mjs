/**
 * A minimal DOM, good enough to render the LUXbell components in node.
 *
 * Used only by `tools/check.mjs`. It is not a browser and is not part of the
 * website — it implements just the slice of the DOM API the project actually
 * uses, so that page modules can be executed outside a browser and their
 * output serialised back to HTML for inspection.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

class Node {
  constructor() {
    this.childNodes = [];
    this.parentNode = null;
  }
  appendChild(child) {
    child.parentNode = this;
    this.childNodes.push(child);
    return child;
  }
  replaceChildren(...children) {
    this.childNodes = [];
    for (const c of children) this.appendChild(c);
  }
  get children() {
    return this.childNodes.filter((c) => c instanceof Element);
  }
}

class TextNode extends Node {
  constructor(text) {
    super();
    this.data = String(text);
  }
  get textContent() {
    return this.data;
  }
}

class ClassList {
  constructor(el) {
    this.el = el;
  }
  get set() {
    return new Set((this.el.attributes.class ?? '').split(/\s+/).filter(Boolean));
  }
  write(s) {
    this.el.attributes.class = [...s].join(' ');
  }
  add(...names) {
    const s = this.set;
    names.forEach((n) => s.add(n));
    this.write(s);
  }
  remove(...names) {
    const s = this.set;
    names.forEach((n) => s.delete(n));
    this.write(s);
  }
  contains(name) {
    return this.set.has(name);
  }
  toggle(name, force) {
    const on = force === undefined ? !this.contains(name) : Boolean(force);
    if (on) this.add(name);
    else this.remove(name);
    return on;
  }
}

class Element extends Node {
  constructor(tagName, ns) {
    super();
    this.tagName = tagName;
    this.ns = ns;
    this.attributes = {};
    this.dataset = {};
    this.style = {};
    this.listeners = {};
    this.classList = new ClassList(this);
    this.value = '';
    this.hidden = false;
    this.offsetParent = {};
  }
  setAttribute(name, value) {
    this.attributes[name] = String(value);
    if (name.startsWith('data-')) this.dataset[name.slice(5)] = String(value);
  }
  getAttribute(name) {
    return this.attributes[name] ?? null;
  }
  hasAttribute(name) {
    return name in this.attributes;
  }
  addEventListener(type, fn) {
    (this.listeners[type] ??= []).push(fn);
  }
  removeEventListener() {}
  dispatch(type, event = {}) {
    for (const fn of this.listeners[type] ?? []) fn({ target: this, ...event });
  }
  focus() {}
  set textContent(value) {
    this.childNodes = [];
    this.appendChild(new TextNode(value));
  }
  get textContent() {
    return this.childNodes.map((c) => c.textContent).join('');
  }
  matches() {
    return false;
  }
  closest() {
    return null;
  }
  querySelector(selector) {
    return this.querySelectorAll(selector)[0] ?? null;
  }
  querySelectorAll(selector) {
    // Supports the handful of simple selectors the project uses.
    const out = [];
    const wanted = selector.split(',').map((s) => s.trim());
    const walk = (node) => {
      for (const child of node.children) {
        if (wanted.some((sel) => matchesSimple(child, sel))) out.push(child);
        walk(child);
      }
    };
    walk(this);
    return out;
  }
}

function matchesSimple(el, selector) {
  if (selector.startsWith('.')) return el.classList.contains(selector.slice(1));
  if (selector.includes('[')) {
    const [tag, rest] = selector.split('[');
    const attr = rest.replace(']', '').split('=')[0].replace(/["']/g, '');
    return (!tag || el.tagName === tag) && el.hasAttribute(attr);
  }
  return el.tagName === selector;
}

class Fragment extends Node {}

export function installDom({ root, baseURI = 'http://localhost/' } = {}) {
  const document = {
    baseURI,
    createElement: (tag) => new Element(tag),
    createElementNS: (ns, tag) => new Element(tag, ns),
    createTextNode: (text) => new TextNode(text),
    createDocumentFragment: () => new Fragment(),
    addEventListener() {},
    documentElement: new Element('html'),
    head: new Element('head'),
    body: new Element('body'),
    getElementById: (id) => {
      const el = new Element('div');
      el.setAttribute('id', id);
      return el;
    },
    querySelector: () => new Element('a'),
  };

  globalThis.Node = Node;
  globalThis.document = document;
  globalThis.window = {
    location: new URL(baseURI),
    history: { pushState() {}, replaceState() {} },
    addEventListener() {},
    scrollTo() {},
    localStorage: { getItem: () => null, setItem() {} },
    scrollY: 0,
  };
  globalThis.requestAnimationFrame = (fn) => fn();
  globalThis.setTimeout = (fn) => fn;
  globalThis.fetch = async (url) => {
    const file = join(root, String(url).replace(/^\/+/, ''));
    return { ok: true, status: 200, json: async () => JSON.parse(readFileSync(file, 'utf8')) };
  };

  return document;
}

const VOID = new Set(['br', 'img', 'input', 'meta', 'link', 'hr', 'path', 'rect', 'source']);

/** Serialise a rendered tree back to HTML so the output can be inspected. */
export function serialize(node, indent = 0) {
  if (node instanceof TextNode) return escapeText(node.data);
  if (node instanceof Fragment) return node.childNodes.map((c) => serialize(c, indent)).join('');

  const attrs = Object.entries(node.attributes)
    .map(([k, v]) => ` ${k}="${escapeAttr(v)}"`)
    .join('');
  const open = `<${node.tagName}${attrs}>`;
  if (VOID.has(node.tagName)) return open;
  const inner = node.childNodes.map((c) => serialize(c, indent + 1)).join('');
  return `${open}${inner}</${node.tagName}>`;
}

const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s) => escapeText(s).replace(/"/g, '&quot;');

export { Element, TextNode, Fragment };
