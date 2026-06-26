import { describe, it, expect } from 'vitest';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readExcalidrawScene } from './readExcalidrawScene.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));

describe('readExcalidrawScene', () => {
  it('decompresses the compressed-json fence to a scene with elements', () => {
    const scene = readExcalidrawScene(path.join(here, '__fixtures__/sample.excalidraw.md'));
    expect(Array.isArray(scene.elements)).toBe(true);
    expect(scene.elements.length).toBeGreaterThan(0);
  });

  it('returns a scene object with expected structure', () => {
    const scene = readExcalidrawScene(path.join(here, '__fixtures__/sample.excalidraw.md'));
    expect(scene).toBeTypeOf('object');
    expect(scene).not.toBeNull();
    // elements should be real Excalidraw elements
    const el = scene.elements[0];
    expect(el).toHaveProperty('id');
    expect(el).toHaveProperty('type');
  });
});
