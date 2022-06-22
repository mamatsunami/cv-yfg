import React, { FunctionComponent } from 'react'

interface CareerItemProps {
  position: string;
  period: string;
  description?: string;
  experiments: string[];
  className?: string;
}

export const CareerItem: FunctionComponent<CareerItemProps> = ({ position, period, description, experiments, className = '' }) => (
  <div className={`block ${className}`}>
    <span className='block text-lg'>
      <strong>{position}</strong>
    </span>
    <em className='block mb-2'>{period}</em>
    {description
      ? (
        <p className='mb-6'>
          {description}
        </p>
        )
      : (
        <div className='mb-4' />
        )}
    {experiments
      ? (
        <p>
          <strong className='block font-bold mb-2 text-base'>
            Expériences :
          </strong>
          {experiments.map((experiment, index) => (
            <span className='block mb-1' key={index}>
              *&nbsp;
              <a href={`#${experiment}`} className='underline hover:font-bold'>
                {experiment}
              </a>
            </span>
          ))}
        </p>
        )
      : (
        <div className='mb-4' />
        )}
  </div>
)
