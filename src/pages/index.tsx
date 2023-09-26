import { DecisaoForm } from '@/components/DecisaoForm'
import { HeroSection } from '@/components/HeroSection'
import { Section } from '@/components/Section'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplifique decisões - Decisão Simples</title>
      </Head>
      <div>
        <header className='w-full sticky top-0 bg-white/70 backdrop-blur-sm border-b border-white/90 flex items-center justify-center'>
          <div className='w-full max-w-7xl px-6 pb-6 pt-6 flex items-center justify-center md:justify-between'>
            <Image src={'/logo.svg'} width={1080} height={186} alt='Decisão Simples' className='w-[250px] md:w-[300px]' />
            <ul className='hidden md:flex items-center gap-8'>
              <li><Link href={'#'} className='text-teal-600 transition-colors hover:text-teal-700' >Sobre o projeto</Link></li>
              <li><Link href={'#'} className='bg-teal-600 px-4 py-2 rounded-lg text-white transition-colors hover:bg-teal-500 font-semibold'>Simplificar decisão</Link></li>
            </ul>
          </div>
        </header>
        <main>
          <HeroSection className='bg-teal-500'>
            <div className='w-full flex flex-col text-center items-center justify-center min-h-[12rem] md:min-h-[20rem] leading-tight gap-2 md:gap-4'>
              <h1 className='font-black text-[3rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] bg-gradient-to-tr from-teal-800 from-20% via-teal-950 to-teal-800 text-transparent bg-clip-text'>JUSTIÇA É PARA TODOS</h1>
              <span className='text-teal-600 font-bold text-lg md:text-2xl'>Simplifique decisões para que todos possam entender</span>
              <Link href={'#'} className='px-6 py-3 lg:text-lg rounded-lg transition-all border-2 border-teal-600 text-teal-600 bg-white hover:bg-teal-600 font-semibold mt-6 hover:text-white'>Simplificar decisão</Link>
            </div>
            
          </HeroSection>
          <Section className='bg-teal-500 py-16'>
            <DecisaoForm />
          </Section>
          <Section className='bg-teal-500 py-64'>
            oi
          </Section>
          <Section className='bg-teal-300 py-64'>
            oi
          </Section>
          <Section className='bg-teal-500 py-64'>
            oi
          </Section>
          <Section className='bg-teal-800 py-64'>
            oi
          </Section>
         
        </main>
      </div>
      
    </>
  )
}
