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
  "currency-converter",
],
},

{
  id: 4,
  slug: "currency-converter",
  title: "Currency Converter",
  category: "Finance",
  description:
    "Convert Jamaican Dollars, US Dollars and other major currencies.",
  icon: "💱",
  featured: true,
  popular: true,
  new: true,
  keywords: [
  "currency",
  "currency converter",
  "exchange rate",
  "usd",
  "jmd",
  "cad",
  "eur",
  "gbp",
  "jamaica",
],
  seoTitle:
"Jamaica Currency Converter | USD, JMD, CAD, GBP & EUR",
  seoDescription:
"Convert Jamaican Dollars (JMD), US Dollars (USD), Canadian Dollars (CAD), Euros (EUR), British Pounds (GBP) and more with live exchange calculations.",
  relatedTools: [
    "loan-calculator",
    "salary-calculator",
    "income-tax-calculator"
  ]
},

{
  id: 5,
  slug: "nis-calculator",
  title: "NIS Calculator",
  category: "Finance",
  description:
    "Estimate Jamaica National Insurance Scheme contributions for employees, employers and self-employed contributors.",
  icon: "🛡️",
  featured: true,
  popular: true,
  new: true,
  keywords: [
    "nis",
    "jamaica",
    "national insurance",
    "salary",
    "payroll",
  ],
  seoTitle: "Jamaica NIS Calculator | JamaicaTools",
  seoDescription:
    "Estimate employee, employer and self-employed NIS contributions in Jamaica.",
  relatedTools: [
    "salary-calculator",
    "income-tax-calculator",
    "currency-converter",
  ],
},

  {
    id: 6,
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
      "weight",
    ],
    seoTitle: "BMI Calculator",
    seoDescription:
      "Check your Body Mass Index online.",
    relatedTools: [
      "age-calculator",
    ],
  },

  {
    id: 7,
    slug: "background-remover",
    title: "Background Remover",
    category: "Image Tools",
    description:
      "Remove image backgrounds quickly and create clean transparent images.",
    icon: "🪄",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "background remover",
      "remove image background",
      "transparent background",
      "image editing",
      "png",
    ],
    seoTitle: "Free Background Remover | JamaicaTools",
    seoDescription:
      "Remove image backgrounds online and create transparent PNG images with JamaicaTools.",
    relatedTools: [
      "image-compressor",
      "image-converter",
      "image-resizer",
    ],
  },


  {
    id: 8,
slug: "image-compressor",
title: "Image Compressor",
category: "Image Tools",
icon: "🗜️",
    keywords: [
"compress image",
"reduce image size",
"png compressor",
"jpg compressor",
"webp compressor",
    ],
      seoTitle:
"Free Image Compressor | JamaicaTools",
seoDescription:
"Compress PNG, JPG and WEBP images while maintaining excellent quality.",
    relatedTools: [
      "background-remover",
      "image-converter",
      "image-resizer",
    ],
  },
];

export default tools;
