import { Server } from '@/lib/importConfig/importConfig'
import Image from 'next/image'

export default function ServerCard({ config }: { config: Server }) {
  return (
    <div className="flex flex-row bg-[#00001c] p-6 gap-4 max-w-[400px] sm:min-w-[90%] rounded-2xl xl:min-w-[90%] lg:max-w-[400px] lg:min-w-[400px]">
      <div className="scroll-content container flex-col w-11/12 bg-[#fcf5d8] rounded-2xl overflow-y-clip h-full items-center px-2 py-4 align-middle max-h-[707px] hidden sm:flex xl:flex lg:hidden">
        <div className="scroll-content container flex flex-col w-full items-center align-middle p-0 overflow-y-scroll rounded-2xl">
          {config.gallery.map((imageURL, key) => (
            <div
              key={key}
              className="w-11/12 min-h-[190px] overflow-hidden rounded-xl object-cover relative mt-5"
            >
              <Image
                src={imageURL}
                alt={`Imagen ${config.name} ${key + 1}`}
                style={{
                  objectPosition: '50% 50%',
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
          ))}
        </div>
      </div>
      <div className="flex flex-col w-8/12 max-h-fit bg-[#fcf5d8] text-black justify-center items-center rounded-2xl flex-grow-0 flex-shrink-0 min-w-[350px] max-w-[485px]">
        <div className="w-11/12 h-[250px] overflow-hidden rounded-xl object-cover relative mt-5">
          <Image
            src={config.image}
            alt={`Modalidad ${config.name}`}
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
        <div className="flex flex-col w-full items-center py-6 px-12">
          <div className="w-full h-[25px] justify-start relative">
            <Image
              src={config.nameColored}
              alt={`Modalidad ${config.name}`}
              width={'1000'}
              height={'1000'}
              className="object-cover object-center"
              style={{
                objectPosition: '0% 0%',
                objectFit: 'scale-down',
                position: 'absolute',
                left: 1,
                width: '100%',
                height: '25px',
              }}
            />
          </div>
          <div className="text-base font-normal py-4">{config.description}</div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col">
              <div>Que incluye...</div>
              <div className="flex flex-col w-full py-2 text-base font-normal">
                {config.features.map((data, key) => (
                  <div key={key} className="flex flex-row gap-2 items-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-purple-800" />
                    <div>{data}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-end">Versiones</div>
              <div className="flex flex-col w-full py-2 text-base font-normal">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-[18px] h-[18px] bg-[url(/cadenas.svg)]" />
                  <div>
                    {config.versions.min} - {config.versions.max}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
