import React from 'react'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionAboutPage,
  sectionBenefits,
  sectionConcepts,
  sectionModules,
  quoteSection,
  pricingBox,
  author,
  sectionReviews,
  sectionFaq
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...sectionAboutPage} />
    <SectionTech {...sectionBenefits} />
    <SectionConcepts {...sectionConcepts} />
    <SectionModules {...sectionModules} />
    <SectionAgenda {...quoteSection} />
    <PricingBox {...pricingBox} />
    <SectionAboutUs {...author} />
    <SectionReviews {...sectionReviews} />
    <SectionFaq {...sectionFaq} />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
