import { Rank } from '@/lib/importConfig/importConfig'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function RankCard({ config }: { config: Rank }) {
  const buttonImgBg = `url('${config.buttonImg}')`
  const backgroundStyles = buttonImgBg ? { backgroundImage: buttonImgBg } : {}

  return (
    <div className="flex flex-col w-7/12 md:w-11/12 lg:w-10/12 bg-[#fcf5d8] text-black justify-center items-center rounded-2xl min-w-[350px] max-w-[485px]">
      <div className="w-11/12 h-[250px] overflow-hidden rounded-xl object-cover relative mt-5">
        <Image
          src={config.image}
          alt={`rango ${config.name}`}
          style={{
            objectPosition: '50% 10%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          width={'1000'}
          height={'1000'}
        />
      </div>
      <div className="flex flex-col w-full items-center pt-6 px-12">
        <div className="w-full justify-self-start ">
          <Image src={config.nameColored} alt={`rango ${config.name}`} width={150} height={10} />
        </div>
        <div className="text-base font-normal py-4">
          {config.description1} <br /> <br /> {config.description2}{' '}
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col p-2">
            <div>Kit Armadura {config.name}</div>
            <div className="flex flex-col w-full py-2 text-base font-normal">
              {config.kitArmor.map((armor, index) => (
                <div key={index} className="flex flex-row gap-2 items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-purple-800" />
                  <div>{armor}</div>
                </div>
              ))}
              <div className="w-full flex justify-end pr-4">
                <Image
                  src={'/netherite-helmet.webp'}
                  alt="arma"
                  width={25}
                  height={10}
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>Kit Armas {config.name}</div>
            <div className="flex flex-col w-full py-2 text-base font-normal">
              {config.kitWeapons.map((armor, index) => (
                <div key={index} className="flex flex-row gap-2 items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-purple-800" />
                  <div>{armor}</div>
                </div>
              ))}
              <Image
                src={'/netherite-sword.webp'}
                alt="arma"
                width={25}
                height={10}
                className="self-end"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 px-6 pb-6 w-full items-center ">
        <div className="w-4/12 h-[60px] min-w-[100px]">
          <Link href={config.url} passHref>
            <div
              className={clsx('flex w-full h-full justify-center items-center')}
              style={{
                ...backgroundStyles,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-white">Comprar</div>
            </div>
          </Link>
        </div>
        <div className="text-base font-normal">Haz clic para ver todos los beneficios</div>
      </div>
    </div>
  )
}
