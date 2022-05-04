import React, { FunctionComponent } from 'react'

interface ExperimentProps {
  position: string;
  company: string;
  period: string;
  description?: string;
  className?: string;
}

export const Experiment: FunctionComponent<ExperimentProps> = ({ position, company, period, description, className = '' }) => (
  <div className={`block ${className}`}>
    <span className='block text-lg'>
      <strong>{position}</strong> @{company}
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
