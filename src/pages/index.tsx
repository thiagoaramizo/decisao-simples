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
        <header className='w-full sticky top-0 bg-white/80 backdrop-blur-sm border-white/50 flex items-center justify-center'>
          <div className='w-full max-w-7xl px-6 pb-6 pt-6 flex items-center justify-center md:justify-between'>
            <Image src={'/logo.svg'} width={1080} height={186} alt='Decisão Simples' className='w-[250px] md:w-[300px]' />
            <ul className='hidden md:flex items-center gap-8'>
              <li><Link href={'#'} className='text-teal-600 transition-colors hover:text-teal-700' >Sobre o projeto</Link></li>
              <li><Link href={'#'} className='bg-teal-600 px-4 py-2 rounded-lg text-white transition-colors hover:bg-teal-500 font-semibold'>Simplificar decisão</Link></li>
            </ul>
          </div>
        </header>
        <main>
          <Section className='bg-teal-50 py-64'>
            oi
          </Section>
          <Section className='bg-teal-100 py-64'>
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
