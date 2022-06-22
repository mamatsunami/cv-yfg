import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { ASCIIArt } from '@/components/ASCIIArt'
import { Avatar } from '@/components/Avatar'
import { ProgressBar } from '@/components/ProgressBar'
import { Divider } from '@/components/Divider'
import { ExperimentItem } from '@/components/ExperimentItem'
import { CareerItem } from '@/components/CareerItem'

import BIO from '@/assets/editorial/bio'
import EXPERIMENTS from '@/assets/editorial/experiments'
import PARCOURS from '@/assets/editorial/parcours'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yann-Fanch GUYOT</title>
        <meta name='description' content='CV de Yann-Fanch GUYOT.' />

        <link rel='shortcut icon' href='/favicon-32x32.png' sizes='32x32' />
      </Head>

      <div className='mx-8 py-8 overflow-hidden'>
        <div className='flex flex-col lg:flex-row mb-4'>
          <div className='flex flex-col items-center mb-6 lg:items-start'>
            <Avatar className='mb-2' />

            <ASCIIArt symbol='Yann-Fanch' size={10} className='mb-1' />

            <ASCIIArt symbol='GUYOT' size={12} className='mb-3' />

            <ASCIIArt symbol='Lead Developer' size={6} className='mb-4' />

            <p className='text-center text-sm lg:text-left'>
              🟢 {BIO.available ? 'Disponible' : 'Indisponible'}<br />
              📱 {BIO.phone}<br />
              📫 {BIO.email}<br />
              📅 {BIO.birthdate}<br />
              🌍 {BIO.location}<br />
            </p>
          </div>

          <div className='flex flex-col lg:ml-8'>
            <ASCIIArt symbol='En Bref' size={8} className='mb-6 mx-auto lg:mx-0' />
            <p className='mb-6 lg:text-sm'>
              {BIO.description}
              <span className='hidden mt-4 mb-32 print:block'>
                Si vous voyez ce texte c'est que vous avez imprimer mon CV, je suis impatient de vous rencontrer !
              </span>
            </p>

            <ASCIIArt symbol='Skills' size={8} className='mb-6 mx-auto lg:mx-0' />
            <div className='grid grid-cols-3 grid-flow-row gap-2 mb-4 lg:grid-cols-4'>
              {BIO.skills.map(skill => (
                <ProgressBar label={skill.name} level={skill.level} key={skill.name} />
              ))}
            </div>

          </div>
        </div>

        <Divider type='primary' className='hidden lg:block mb-8' />

        <div className='flex flex-col mb-4'>
          <ASCIIArt symbol='Parcours' size={8} className='mb-6 mx-auto lg:mx-0' />

          {PARCOURS.map((career, index) => (
            <React.Fragment key={index}>
              <CareerItem
                position={career.position}
                period={career.period}
                description={career.description}
                experiments={career.experiments}
                className='mb-2'
              />
              {index + 1 < PARCOURS.length && (
                <Divider type='secondary' className='mb-4' />
              )}
            </React.Fragment>
          ))}
        </div>

        <Divider type='primary' className='hidden lg:block mb-8' />

        <div className='flex flex-col mb-4'>
          <ASCIIArt symbol='Experiences' size={8} className='mb-6 mx-auto lg:mx-0' />

          {EXPERIMENTS.map((experiment, index) => (
            <React.Fragment key={index}>
              <ExperimentItem
                name={experiment.name}
                period={experiment.period}
                description={experiment.description}
                className='mb-2'
              />
              <Divider type='secondary' className='mb-4' />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
