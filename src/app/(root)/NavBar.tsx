import { UrlLink } from '@/lib/importConfig/importConfig'
import Link from 'next/link'

export default function NavBar({ config, title }: { config: UrlLink[]; title: string }) {
  return (
    <div className="flex flex-row w-full justify-center pb-10 flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
      <div className="flex justify-self-start">{title}</div>
      <div className="flex flex-row w-full justify-center gap-10 flex-wrap lg:gap-20 lg:flex-nowrap">
        {config.map((data, key) => (
          <Link key={key} href={data.url} passHref>
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
