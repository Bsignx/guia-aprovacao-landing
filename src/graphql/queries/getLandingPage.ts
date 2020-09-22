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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutPage
      ...sectionBenefits
      ...sectionConcepts
      ...sectionModules
    }
  }
`
export default GET_LANDING_PAGE
