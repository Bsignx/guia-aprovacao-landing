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
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type quoteSection = {
  quote: string
  description: string
}

export type pricingBox = {
  totalPrice: number
  discountPrice: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type Author = {
  name: string
  role: string
  title: string
  description: string
  socialLinks: Array<{
    title: string
    url: string
  }>
  photo: {
    url: string
    alternativeText: string
  }
}

export type SectionReviewsProp = {
  title: string
  reviews: {
    name: string
    text: string
    photo: {
      url: string
      alternativeText: string
    }
  }[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutPage: sectionAboutPage
  sectionBenefits: sectionBenefits
  sectionConcepts: sectionConcepts
  sectionModules: sectionModules
  quoteSection: quoteSection
  pricingBox: pricingBox
  author: Author
  sectionReviews: SectionReviewsProp
}
