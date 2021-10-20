/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container != null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading type="h1" />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading type="h1">Hi</Heading>, container);
    });
    expect(container?.textContent).toBe('Hi');
  });

  it('render with props type', () => {
    act(() => {
      render(<Heading type="h2">Hi</Heading>, container);
    });
    expect(container?.querySelector('h2')).not.toBeNull();
  });
});
