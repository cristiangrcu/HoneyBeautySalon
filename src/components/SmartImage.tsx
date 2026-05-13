'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface SmartImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  src: string;
  fallback: string;
}

/** Renders a local image, automatically swapping to the fallback URL on error. */
export function SmartImage({ src, fallback, alt, ...rest }: SmartImageProps) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
