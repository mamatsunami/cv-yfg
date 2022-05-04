import React, { FunctionComponent } from 'react'

import { ASCIIArt } from './ASCIIArt'

interface AvatarProps {
  className?: string;
}

export const Avatar: FunctionComponent<AvatarProps> = ({ className = '' }) => (
  <div className={`flex ${className} print:text-black print:bg-black`}>
    <ASCIIArt symbol='avatar' size={6} />
    <div className='ascii-art text-[6px] leading-[8px] w-1'>
      {`
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
      `}
    </div>
  </div>
)
