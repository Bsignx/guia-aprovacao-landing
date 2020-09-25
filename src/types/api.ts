export type Image = {
  alternativeText: string
  url: string
}

export type Button = {
  label: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  image: Image
  button: Button
}

export type sectionAboutPage = {
  title: string
  description: string
  image: Array<Image>
}

export type Benefit = {
  title: string
  description: string
  image: Image
}

export type sectionBenefits = {
  title: string
  benefits: Array<Benefit>
}

export type Concept = {
  title
}

export type sectionConcepts = {
  title: string
  concepts: Array<Concept>
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type sectionModules = {
  title: string
  modules: Array<Module>
}

export type quoteSection = {
  quote: string
  description: string
}

export type pricingBox = {
  totalPrice: number
  discountPrice: number
  benefits: string
  button: Button
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  title: string
  description: string
  socialLinks: Array<SocialLink>
  photo: Image
}

export type Review = {
  name: string
  text: string
  photo: Image
}

export type SectionReviewsProp = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaq = {
  title: string
  questions: Question[]
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
  sectionFaq: SectionFaq
}
