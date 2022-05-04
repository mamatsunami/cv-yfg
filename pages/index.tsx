import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { ASCIIArt } from '@/components/ASCIIArt'
import { Avatar } from '@/components/Avatar'
import { ProgressBar } from '@/components/ProgressBar'
import { Divider } from '@/components/Divider'

import EXPERIMENTS from '@/assets/editorial/experiments'
import { Experiment } from '@/components/Experiment'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yann-Fanch GUYOT</title>
        <meta name='description' content='CV de Yann-Fanch GUYOT.' />

        <link rel='shortcut icon' href='/favicon-32x32.png' sizes='32x32' />
      </Head>

      <div className='mx-4 py-8 overflow-hidden'>
        <div className='flex flex-col lg:flex-row mb-4'>
          <div className='flex flex-col items-center lg:items-start'>
            <Avatar className='mb-2' />

            <ASCIIArt symbol='Yann-Fanch' size={10} className='mb-1' />

            <ASCIIArt symbol='GUYOT' size={12} className='mb-3' />

            <ASCIIArt symbol='Lead Developer' size={6} className='mb-4' />

            <p className='text-center lg:text-left'>
              🟢 Disponible<br />
              📱 07 69 68 85 06<br />
              📫 yfguyot@protonmail.com<br />
              📅 né le 27 Juillet 1994<br />
              🌍 Angers, France<br />
            </p>
          </div>

          <div className='flex flex-col w-520 lg:ml-8'>
            <ASCIIArt symbol='En Bref' size={8} className='mb-4 mx-auto lg:mx-0' />
            <p>
              Freelance autodidacte et passionné par le développement web aussi bien côté serveur que client.<br /><br />
              Je cumule plus de cinq années d'expérience où j'ai eu l'occasion de travailler en mode agence ou tant que consultant sur de nombreux projets de R&D numérique, auprès d'entreprises de toute taille et dans des domaines variés comme la finance, l'énergie, la grande distribution ou le tourisme.<br /><br />
              De retour d'une demi-année sabbatique prise pour me ressourcer, je reviens chargé à bloc pour de nouvelles aventures !
              <span className='hidden print:inline'>
                <br /><br />
                Si vous voyez ce texte c'est que vous avez imprimer mon CV, je suis impatient de vous rencontrer !
                <br /><br /><br /><br /><br /><br />
              </span>
            </p>

            <ASCIIArt symbol='Skills' size={8} className='mb-4 mx-auto lg:mx-0' />
            <div className='flex flex-row mb-4'>
              <div className='mx-auto lg:mx-0'>
                <ProgressBar label='Javascript' level={9} />
                <ProgressBar label='React Native' level={9} />
                <ProgressBar label='Node.js' level={8} />
                <ProgressBar label='PHP' level={8} />
                <ProgressBar label='Laravel' level={8} />
                <ProgressBar label='MongoDB' level={6} />
                <ProgressBar label='Anglais' level={7} />
              </div>
              <div className='mx-auto lg:ml-6 lg:mx-0'>
                <ProgressBar label='Typescript' level={9} />
                <ProgressBar label='Angular' level={7} />
                <ProgressBar label='Vue' level={5} />
                <ProgressBar label='Docker' level={6} />
                <ProgressBar label='SQL' level={7} />
                <ProgressBar label='Elasticsearch' level={5} />
                <ProgressBar label='Espagnol' level={5} />
              </div>
            </div>

          </div>
        </div>

        <Divider type='primary' className='hidden lg:block mb-8' />

        <div className='flex flex-col'>
          <ASCIIArt symbol='Experiences' size={8} className='mb-6 mx-auto lg:mx-0' />

          {EXPERIMENTS.map((experiment, index) => (
            <React.Fragment key={index}>
              <Experiment
                position={experiment.position}
                company={experiment.company}
                period={experiment.period}
                description={experiment.description}
                key={index}
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
