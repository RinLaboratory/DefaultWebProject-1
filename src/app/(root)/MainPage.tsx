'use client'

import Image from 'next/image'
import NavBar from './NavBar'
import { MainData } from '@/lib/importConfig/importConfig'
import Swal from 'sweetalert2'
import ClipboardJS from 'clipboard'
import { useEffect } from 'react'

export default function MainPage({ config }: { config: MainData }) {
  useEffect(() => {
    const clipboard = new ClipboardJS('.btn')

    clipboard.on('success', function (e) {
      Swal.fire({
        title: '¡Copiado al portapapeles!',
        text: 'Se ha copiado la ip del servidor a tu portapapeles',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        background: '#111111',
        color: '#FFFFFF',
      })

      e.clearSelection()
    })

    clipboard.on('error', function (e) {
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al copiar la ip del servidor a tu portapapeles',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        background: '#111111',
        color: '#FFFFFF',
      })
      e.clearSelection()
    })

    return () => {
      // Limpiar el evento al desmontar el componente
      clipboard.destroy()
    }
  }, [])

  return (
    <div className="bg-[url('/bg-lines.svg')]">
      <div className="flex flex-col text-white font-gilroy font-semibold text-xl p-11 bg-[#04040e] bg-opacity-80">
        <NavBar config={config.NavBar} title={config.PageTitle} />
        <div className="flex justify-center py-14">
          <Image src={'/logo.png'} alt="logo" width={400} height={400} />
        </div>
        <div className="flex justify-center py-6">
          <div
            data-clipboard-text={config.ServerIP}
            className="btn flex flex-col items-center w-full sm:w-10/12 md:w-6/12 lg:w-4/12 p-6 backdrop-blur-2xl rounded-[2rem] gap-2 bg-[#04040e] bg-opacity-50 hover:cursor-pointer"
          >
            <Image src={'/mtod.svg'} alt="mtod" width={400} height={100} />
            <div className="text-base">Haz clic para copiar la ip</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="font-normal text-3xl">Juega en tu plataforma favorita.</div>
          <div className="flex flex-row gap-10 flex-wrap pb-10 md:pb-0">
            <div className="w-full md:w-auto">
              Java Edition {config.Versions.Java.min} - {config.Versions.Java.max}
            </div>
            <div className="w-full md:w-auto">
              Bedrock Edition {config.Versions.Bedrock.min} - {config.Versions.Bedrock.max}
            </div>
          </div>
        </div>
        <div className="flex items-start py-4 text-base">NO AFILIADO CON MOJANG AB</div>
      </div>
    </div>
  )
}
