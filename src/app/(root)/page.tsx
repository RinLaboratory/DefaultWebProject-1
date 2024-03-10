'use server'

import RankPage from './RankPage'
import MainPage from './MainPage'
import ServerPage from './ServersPage'
import importConfig from '@/lib/importConfig/importConfig'
import FooterPage from './FooterPage'

export default async function Home() {
  const config = await importConfig()

  return (
    <main className="w-full overflow-y-clip bg-black bg-[url('/bg-1.jpg')] bg-auto bg-center ">
      <MainPage config={config.Main} />
      <RankPage config={config.Ranks} />
      <ServerPage config={config.Servers} />
      <FooterPage config={config.Main} />
    </main>
  )
}
