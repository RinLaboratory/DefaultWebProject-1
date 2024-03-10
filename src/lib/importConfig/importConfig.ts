import { promises as fs } from 'fs'

export type Rank = {
  name: string
  image: string
  nameColored: string
  description1: string
  description2: string
  kitArmor: string[]
  kitWeapons: string[]
  buttonImg: string
  url: string
}

export type Server = {
  name: string
  image: string
  nameColored: string
  description: string
  features: string[]
  versions: Version
  gallery: string[]
}

type Version = {
  min: string
  max: string
}

export type UrlLink = {
  title: string
  url: string
}

type UrlLinkIcon = UrlLink & {
  icon: string
}

export type MainData = {
  PageTitle: string
  NavBar: UrlLink[]
  Versions: {
    Bedrock: Version
    Java: Version
  }
  ServerIP: string
  Footer: Footer
}

export type Footer = {
  Email: string
  Copyright: string
  Socials: UrlLinkIcon[]
  AboutUS: UrlLink[]
  Legal: UrlLink[]
  TermsAndConditions: UrlLink[]
}

export type FileContent = {
  Main: MainData
  Ranks: Rank[]
  Servers: Server[]
}

export default async function importConfig() {
  const file = await fs.readFile(process.cwd() + '/src/config.json', 'utf8')
  const data = JSON.parse(file)

  return data as FileContent
}
