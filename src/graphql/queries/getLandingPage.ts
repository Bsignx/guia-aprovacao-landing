const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        alternativeText
        url
      }
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutPage on LandingPage {
    sectionAboutPage {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionBenefits on LandingPage {
    sectionBenefits {
      title
      benefits {
        title
        description
        image {
          alternativeText
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment quoteSection on LandingPage {
    quoteSection {
      quote
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      discountPrice
      benefits
      button {
        label
        url
      }
    }
  }

  fragment author on LandingPage {
    author {
      name
      role
      title
      description
      socialLinks {
        title
        url
      }
      photo {
        url
        alternativeText
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutPage
      ...sectionBenefits
      ...sectionConcepts
      ...sectionModules
      ...quoteSection
      ...pricingBox
      ...author
    }
  }
`
export default GET_LANDING_PAGE
