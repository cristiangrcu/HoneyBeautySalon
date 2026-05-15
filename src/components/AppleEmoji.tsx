'use client';

import { useState } from 'react';

interface AppleEmojiProps {
  /** File at /public/emojis/<name>.png */
  name: string;
  /** Native unicode fallback if the file is missing */
  fallback: string;
  className?: string;
  /** Rendered pixel size; applies to both image and fallback emoji */
  size?: number;
}

/**
 * Apple-style emoji renderer. Loads /emojis/<name>.png and gracefully
 * falls back to the native unicode emoji if the file isn't there.
 */
export function AppleEmoji({ name, fallback, className, size = 36 }: AppleEmojiProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        className={`inline-block leading-none ${className ?? ''}`}
        style={{ fontSize: size }}
        aria-hidden="true"
      >
        {fallback}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/emojis/${name}.png`}
      alt=""
      width={size}
      height={size}
      className={`inline-block select-none ${className ?? ''}`}
      style={{ width: size, height: size }}
      draggable={false}
      onError={() => setErrored(true)}
    />
  );
}
