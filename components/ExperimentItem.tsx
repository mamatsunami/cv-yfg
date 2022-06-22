import React, { FunctionComponent } from 'react'

interface ExperimentItemProps {
  name: string;
  period: string;
  description?: string;
  className?: string;
}

export const ExperimentItem: FunctionComponent<ExperimentItemProps> = ({ name, period, description, className = '' }) => (
  <div className={`block ${className}`} id={name}>
    <span className='block text-lg'>
      <strong>{name}</strong>
    </span>
    <em className='block mb-2'>{period}</em>
    {description
      ? (
        <p>
          {description}
        </p>
        )
      : (
        <div className='mb-4' />
        )}
  </div>
)
