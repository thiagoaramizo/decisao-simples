import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image src={'/logo.svg'} width={1080} height={186} alt='Decisão Simples' />
    </>
  )
}
