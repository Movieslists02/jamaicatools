const tools = [
  {
    id: 1,
    slug: "loan-calculator",
    title: "Loan Calculator",
    category: "Finance",
    description:
      "Calculate monthly loan payments, total interest and repayment schedules.",
    icon: "💰",
    featured: true,
    popular: true,
    new: false,
    keywords: [
      "loan",
      "mortgage",
      "interest",
      "finance",
      "jamaica"
    ],
    seoTitle: "Free Loan Calculator | JamaicaTools",
    seoDescription:
      "Calculate loan payments instantly with JamaicaTools.",
    relatedTools: [
      "mortgage-calculator",
      "salary-calculator",
      "currency-converter"
    ]
  },

  
  {
  id: 2,
  slug: "salary-calculator",
  title: "Salary Calculator",
  category: "Finance",
  description:
    "Estimate Jamaican PAYE, NIS, NHT, Education Tax and take-home pay.",
  icon: "💵",
  featured: true,
  popular: true,
  new: true,
  keywords: ["salary", "jamaica", "tax", "paye", "nis", "nht"],
  seoTitle: "Jamaica Salary Calculator | JamaicaTools",
  seoDescription:
    "Estimate your Jamaican salary after PAYE, NIS, NHT and Education Tax deductions.",
  relatedTools: ["loan-calculator", "mortgage-calculator"],
},

{
  id: 3,
  slug: "income-tax-calculator",
  title: "Income Tax Calculator",
  category: "Finance",
  description:
    "Estimate Jamaican income tax, taxable income, effective tax rate and after-tax income.",
  icon: "🧾",
  featured: true,
  popular: true,
  new: true,
  keywords: [
    "income tax",
    "jamaica",
    "paye",
    "tax calculator",
    "taxable income",
  ],
  seoTitle: "Jamaica Income Tax Calculator | JamaicaTools",
  seoDescription:
    "Estimate Jamaican income tax, taxable income, effective tax rate and after-tax income.",
  relatedTools: [
    "salary-calculator",
    "loan-calculator",
    "nis-calculator",
  ],
},

  {
    id: 4,
    slug: "bmi-calculator",
    title: "BMI Calculator",
    category: "Health",
    description:
      "Calculate your Body Mass Index instantly.",
    icon: "❤️",
    featured: true,
    popular: true,
    new: false,
    keywords: [
      "bmi",
      "health",
      "weight"
    ],
    seoTitle: "BMI Calculator",
    seoDescription:
      "Check your Body Mass Index online.",
    relatedTools: [
      "age-calculator"
    ]
  }
];

export default tools;