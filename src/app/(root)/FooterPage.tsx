import { MainData } from '@/lib/importConfig/importConfig'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterPage({ config }: { config: MainData }) {
  return (
    <div className="flex flex-col flex-wrap lg:flex-nowrap bg-[#04040e] w-full p-20 gap-5 justify-center items-center text-base font-normal">
      <div className="flex flex-col lg:flex-row space-y-16 lg:space-x-24 lg:space-y-0">
        <div className="flex flex-col items-center">
          <div className="font-bold pb-4">No olvides de seguirnos en nuestras redes.</div>
          <div className="flex flex-row gap-9">
            {config.Footer.Socials.map((text, key) => (
              <Link key={key} href={text.url} passHref>
                <Image alt={text.title} src={text.icon} width={25} height={25} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold pb-4">Contáctanos</div>
          <Link href={`mailto:${config.Footer.Email}`} passHref>
            {config.Footer.Email}
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="font-bold pb-4">Sobre nosotros</div>
          <div className="flex flex-col gap-2">
            {config.Footer.AboutUS.map((text, key) => (
              <Link key={key} href={text.url} passHref>
                {text.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold pb-4">Legal</div>
          <div className="flex flex-col gap-2">
            {config.Footer.Legal.map((text, key) => (
              <Link key={key} href={text.url} passHref>
                {text.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Términos y condiciones</div>
          <div className="flex flex-col gap-2">
            {config.Footer.TermsAndConditions.map((text, key) => (
              <Link key={key} href={text.url} passHref>
                {text.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 self-start pt-8">
        <div className="font-bold">{config.PageTitle}</div>
        <div>{config.Footer.Copyright}</div>
      </div>
    </div>
  )
}
