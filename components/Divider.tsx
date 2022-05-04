import React, { FunctionComponent } from 'react'

interface DividerProps {
  type: 'primary' | 'secondary';
  size?: number,
  className?: string;
}

export const Divider: FunctionComponent<DividerProps> = ({ type = 'primary', size = 20, className = '' }) => (
  <div className={`whitespace-nowrap ${className}`}>
    {DIVIDER_TYPES[type].repeat(size)}
  </div>
)

const DIVIDER_TYPES = {
  primary: `
\`'. .'
    \`
  `,
  secondary: '~^~^~^~^'
}
