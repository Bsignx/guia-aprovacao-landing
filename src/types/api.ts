export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
  button: {
    label: string
    url: string
  }
}

export type sectionAboutPage = {
  title: string
  description: string
  image: Array<{
    alternativeText: string
    url: string
  }>
}

export type sectionBenefits = {
  title: string
  benefits: Array<{
    title: string
    description: string
    image: {
      alternativeText: string
      url: string
    }
  }>
}

export type sectionConcepts = {
  title: string
  concepts: Array<{
    title
  }>
}

export type sectionModules = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutPage: sectionAboutPage
  sectionBenefits: sectionBenefits
  sectionConcepts: sectionConcepts
  sectionModules: sectionModules
}
