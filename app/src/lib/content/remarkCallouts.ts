// app/src/lib/content/remarkCallouts.ts
import { visit } from 'unist-util-visit';
import type { Root, Blockquote, Paragraph } from 'mdast';
const CALLOUT = /^\[!(\w+)\]([+-]?)\s*(.*)$/;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function remarkCallouts() {
  return (tree: Root) => {
    visit(tree, 'blockquote', (node: Blockquote) => {
      const first = node.children[0];
      if (first?.type !== 'paragraph') return;
      const t = first.children[0];
      if (t?.type !== 'text') return;
      const lines = t.value.split('\n');
      const match = CALLOUT.exec(lines[0]);
      if (!match) return;
      const [, rawType, fold, title] = match;
      const type = rawType.toLowerCase();
      const rest = lines.slice(1).join('\n');
      if (rest) t.value = rest; else first.children.shift();
      if (first.children.length === 0) node.children.shift();
      node.children.unshift({
        type: 'paragraph',
        data: { hName: 'div', hProperties: { className: ['callout-title'] } },
        children: [{ type: 'text', value: title || cap(type) }]
      } as Paragraph);
      (node as any).data = {
        hName: 'div',
        hProperties: {
          className: ['callout', `callout-${type}`],
          'data-callout': type,
          ...(fold ? { 'data-callout-fold': fold === '-' ? 'closed' : 'open' } : {})
        }
      };
    });
  };
}
