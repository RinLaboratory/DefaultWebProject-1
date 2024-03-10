'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import clsx from 'clsx'

import { useEffect, useState } from 'react'
import ServerCard from './ServerCard'
import { Server } from '@/lib/importConfig/importConfig'

export default function ServerPage({ config }: { config: Server[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      console.log('current')
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="flex flex-col text-white font-gilroy font-semibold text-xl bg-[#04040e]">
      <div className="flex flex-col bg-[url('/bg-thunder.svg')] py-5 sm:p-11 bg-no-repeat bg-center w-full gap-6">
        <div className='pl-10 sm:p-0'>MODALIDADES</div>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
            startIndex: 0,
          }}
          setApi={setApi}
          className="flex flex-col max-w-full sm:mx-5"
        >
          <CarouselContent>
            {config.map((data, key) => (
              <CarouselItem
                key={key}
                className="sm:basis-1/1 md:basis-1/1 lg:basis-1/2 justify-center flex"
              >
                <ServerCard config={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="flex flex-row py-2 text-center text-sm text-muted-foreground self-center gap-4">
          {config.map((_, index) => (
            <div
              key={index}
              className={clsx(
                'w-[15px] h-[15px] bg-gray-600 rounded-full',
                current === index + 1 && '!bg-white !w-[30px]',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
