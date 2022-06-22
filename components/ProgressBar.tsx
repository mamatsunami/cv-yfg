import React, { FunctionComponent } from 'react'

interface ProgressBarProps {
  level: number;
  label: string;
  className?: string;
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ level = 0, label = '', className = '' }) => (
  <div className={`flex flex-col-reverse items-center ${className}`}>
    <div>
      {PROGRESS_BAR_LEVELS[level]}
    </div>
    <span className='block uppercase text-xs font-semibold pt-2'>
      {label}
    </span>
  </div>
)

const PROGRESS_BAR_LEVELS = [
  '▱▱▱▱▱▱▱▱▱▱',
  '▰▱▱▱▱▱▱▱▱▱',
  '▰▰▱▱▱▱▱▱▱▱',
  '▰▰▰▱▱▱▱▱▱▱',
  '▰▰▰▰▱▱▱▱▱▱',
  '▰▰▰▰▰▱▱▱▱▱',
  '▰▰▰▰▰▰▱▱▱▱',
  '▰▰▰▰▰▰▰▱▱▱',
  '▰▰▰▰▰▰▰▰▱▱',
  '▰▰▰▰▰▰▰▰▰▱',
  '▰▰▰▰▰▰▰▰▰▰'
]
