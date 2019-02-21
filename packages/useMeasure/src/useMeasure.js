import { useState, useLayoutEffect, useRef, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure(ref, ...types) {
  const animationFrameID = useRef(null);
  const observer = useRef(null);
  const [rect, setRect] = useState({});

  const measure = useCallback(
    () => {
      animationFrameID.current = window.requestAnimationFrame(() => {
        setRect(getContentRect(ref.current, types));
      });
    },
    [ref]
  );

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    observer.current = new ResizeObserver(measure);
    observer.current.observe(ref.current);

    return () => {
      observer.current.disconnect();
      window.cancelAnimationFrame(animationFrameID.current);
    };
  }, []);

  return rect;
}

function getContentRect(node, types) {
  const calculations = {};

  if (types.includes('client')) {
    calculations.client = {
      top: node.clientTop,
      left: node.clientLeft,
      width: node.clientWidth,
      height: node.clientHeight
    };
  }

  if (types.includes('offset')) {
    calculations.offset = {
      top: node.offsetTop,
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight
    };
  }

  if (types.includes('scroll')) {
    calculations.scroll = {
      top: node.scrollTop,
      left: node.scrollLeft,
      width: node.scrollWidth,
      height: node.scrollHeight
    };
  }

  if (types.includes('bounds')) {
    const rect = node.getBoundingClientRect();
    calculations.bounds = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  }

  if (types.includes('margin')) {
    const styles = getComputedStyle(node);
    calculations.margin = {
      top: styles ? parseInt(styles.marginTop, 10) : 0,
      right: styles ? parseInt(styles.marginRight, 10) : 0,
      bottom: styles ? parseInt(styles.marginBottom, 10) : 0,
      left: styles ? parseInt(styles.marginLeft, 10) : 0
    };
  }

  return calculations;
}
