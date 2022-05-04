import React, { FunctionComponent } from 'react'

import avatar from '@/assets/ascii/images/avatar'
import yannFanch from '@/assets/ascii/texts/yannFanch'
import guyot from '@/assets/ascii/texts/guyot'
import leadDeveloper from '@/assets/ascii/texts/leadDeveloper'
import enBref from '@/assets/ascii/texts/enBref'
import skills from '@/assets/ascii/texts/skills'
import experiences from '@/assets/ascii/texts/experiences'

interface ASCIIArtProps {
  symbol: 'avatar' | 'Yann-Fanch' | 'GUYOT' | 'Lead Developer' | 'En Bref' | 'Skills' | 'Experiences';
  size?: number;
  className?: string;
}

export const ASCIIArt: FunctionComponent<ASCIIArtProps> = ({ symbol, size = 8, className = '' }) => (
  <div
    className={`ascii-art ${className}`}
    style={{
      fontSize: `${size}px`,
      lineHeight: `${Math.ceil(size * ASCII_ART[symbol].ratio)}px`
    }}
  >
    {ASCII_ART[symbol].source}
  </div>
)

const ASCII_ART: { [key: string]: { source: string, ratio: number } } = {
  avatar: { source: avatar, ratio: 1.3 },
  'Yann-Fanch': { source: yannFanch, ratio: 1 },
  GUYOT: { source: guyot, ratio: 1 },
  'Lead Developer': { source: leadDeveloper, ratio: 1 },
  'En Bref': { source: enBref, ratio: 1 },
  Skills: { source: skills, ratio: 1 },
  Experiences: { source: experiences, ratio: 1 }
}
