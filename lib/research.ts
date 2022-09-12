interface ResearchProject {
    name: string
    description: string
    month: string
    year?: number
    href: string
    preview?: string
    coauthor?: string
  }
  
  const secrets: ResearchProject[] = [
    {
      name: "Analysis of the Ebola fractional-order model with Caputo-Fabrizio derivative",
      description: "In communication- Songklanakarin Journal of Science and Technology",
      month: "September",
      coauthor: "Nita Shah",
      year: 2022,
      href: "https://doi.org/",
      preview: "/images/secrets/man-pages.png",
    },
    {
      name: "A fractional-order SVIR-model with two infection classes for COVID-19 in India",
      description: "Book- River Publishers",
      month: "January",
      coauthor: "Nita Shah, Ekta Jayswal",
      href: "https://doi.org/",
      preview: "/images/secrets/tailwindcss-snippets.png",
    },
    {
      name: "Research Proposal",
      description: "Chlamydia Model",
      month: "December",
      year: 2021,
      coauthor: "",
      href: "https://doi.org/",
      preview: "/images/secrets/man-pages.png",
    },
  ]
  
  export default secrets
  