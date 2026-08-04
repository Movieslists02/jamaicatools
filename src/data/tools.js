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



  {
    id: 9,
    slug: "image-converter",
    title: "Image Converter",
    category: "Image Tools",
    description:
      "Convert PNG, JPG and WEBP images into other popular image formats.",
    icon: "🔄",
    featured: false,
    popular: false,
    new: true,
    keywords: [
      "image converter",
      "convert image",
      "png to jpg",
      "jpg to png",
      "webp converter",
      "image format converter",
    ],
    seoTitle: "Free Image Converter | JamaicaTools",
    seoDescription:
      "Convert PNG, JPG and WEBP images into other popular image formats online.",
    relatedTools: [
      "background-remover",
      "image-compressor",
      "image-resizer",
    ],
  },

  {
    id: 10,
    slug: "image-resizer",
    title: "Image Resizer",
    category: "Image Tools",
    description:
      "Resize PNG, JPG and WEBP images for websites, social media, documents and printing.",
    icon: "📐",
    featured: false,
    popular: false,
    new: true,
    keywords: [
      "image resizer",
      "resize image",
      "change image dimensions",
      "resize png",
      "resize jpg",
      "resize webp",
    ],
    seoTitle: "Free Image Resizer | JamaicaTools",
    seoDescription:
      "Resize PNG, JPG and WEBP images online for websites, social media, documents and printing.",
    relatedTools: [
      "image-compressor",
      "image-converter",
      "background-remover",
    ],
  },

  {
    id: 11,
    slug: "crop-image",
    title: "Crop Image",
    category: "Image Tools",
    description:
      "Crop PNG, JPG and WEBP images to the exact dimensions you need.",
    icon: "✂️",
    featured: false,
    popular: false,
    new: true,
    keywords: [
      "crop image",
      "image cropper",
      "crop png",
      "crop jpg",
      "crop webp",
      "photo crop",
    ],
    seoTitle: "Free Image Cropper | JamaicaTools",
    seoDescription:
      "Crop PNG, JPG and WEBP images online with precision.",
    relatedTools: [
      "image-resizer",
      "image-compressor",
      "background-remover",
    ],
  },

  {
    id: 12,
    slug: "rotate-flip-image",
    title: "Rotate & Flip Image",
    category: "Image Tools",
    description:
      "Rotate images clockwise or counterclockwise and flip them horizontally or vertically.",
    icon: "🔄",
    featured: false,
    popular: false,
    new: true,
    keywords: [
      "rotate image",
      "flip image",
      "rotate photo",
      "flip photo",
      "horizontal flip",
      "vertical flip",
    ],
    seoTitle: "Rotate & Flip Images Online | JamaicaTools",
    seoDescription:
      "Rotate and flip PNG, JPG and WEBP images online with JamaicaTools.",
    relatedTools: [
      "crop-image",
      "image-resizer",
      "image-converter",
    ],
  },

  {
    id: 13,
    slug: "watermark-image",
    title: "Watermark Image",
    category: "Image Tools",
    description:
      "Add text, branding and ownership marks to PNG, JPG and WEBP images.",
    icon: "©️",
    featured: false,
    popular: false,
    new: true,
    keywords: [
      "watermark image",
      "add watermark",
      "image watermark",
      "photo watermark",
      "text watermark",
      "brand image",
    ],
    seoTitle: "Add Watermark to Images Online | JamaicaTools",
    seoDescription:
      "Add text, branding and ownership watermarks to PNG, JPG and WEBP images online.",
    relatedTools: [
      "image-resizer",
      "crop-image",
      "rotate-flip-image",
    ],
  },

  {
    id: 14,
    slug: "merge-pdf",
    title: "Merge PDF",
    category: "PDF Tools",
    description:
      "Combine multiple PDF files into one organized document.",
    icon: "📚",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "merge pdf",
      "combine pdf",
      "join pdf files",
      "pdf merger",
      "combine documents",
      "merge documents",
    ],
    seoTitle: "Free PDF Merger | JamaicaTools",
    seoDescription:
      "Combine multiple PDF files into one document online with JamaicaTools.",
    relatedTools: [
      "split-pdf",
      "compress-pdf",
      "images-to-pdf",
    ],
  },

  {
    id: 15,
    slug: "split-pdf",
    title: "Split PDF",
    category: "PDF Tools",
    description:
      "Separate a PDF into individual pages or selected page ranges.",
    icon: "✂️",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "split pdf",
      "separate pdf pages",
      "extract pdf pages",
      "pdf splitter",
      "divide pdf",
      "split document",
    ],
    seoTitle: "Free PDF Splitter | JamaicaTools",
    seoDescription:
      "Split PDF files into individual pages or selected page ranges online with JamaicaTools.",
    relatedTools: [
      "merge-pdf",
      "compress-pdf",
      "pdf-to-images",
    ],
  },

  {
    id: 16,
    slug: "compress-pdf",
    title: "Compress PDF",
    category: "PDF Tools",
    description:
      "Reduce PDF file size while preserving readability and document quality.",
    icon: "🗜️",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "compress pdf",
      "reduce pdf size",
      "pdf compressor",
      "shrink pdf",
      "optimize pdf",
      "smaller pdf",
    ],
    seoTitle: "Free PDF Compressor | JamaicaTools",
    seoDescription:
      "Compress PDF files online and reduce document size while preserving readability.",
    relatedTools: [
      "merge-pdf",
      "split-pdf",
      "pdf-to-images",
    ],
  },

  {
    id: 17,
    slug: "pdf-to-images",
    title: "PDF to Images",
    category: "PDF Tools",
    description:
      "Convert PDF pages into downloadable image files.",
    icon: "🖼️",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "pdf to images",
      "pdf to jpg",
      "pdf to png",
      "convert pdf pages",
      "extract pdf pages as images",
      "pdf image converter",
    ],
    seoTitle: "Convert PDF to Images Online | JamaicaTools",
    seoDescription:
      "Convert PDF pages into downloadable JPG or PNG images online with JamaicaTools.",
    relatedTools: [
      "images-to-pdf",
      "split-pdf",
      "compress-pdf",
    ],
  },

  {
    id: 18,
    slug: "images-to-pdf",
    title: "Images to PDF",
    category: "PDF Tools",
    description:
      "Combine PNG, JPG and WEBP images into one organized PDF document.",
    icon: "📄",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "images to pdf",
      "jpg to pdf",
      "png to pdf",
      "photos to pdf",
      "image pdf converter",
      "combine images into pdf",
    ],
    seoTitle: "Convert Images to PDF Online | JamaicaTools",
    seoDescription:
      "Combine PNG, JPG and WEBP images into one PDF document online with JamaicaTools.",
    relatedTools: [
      "pdf-to-images",
      "merge-pdf",
      "compress-pdf",
    ],
  },

  {
    id: 19,
    slug: "pdf-to-word",
    title: "PDF to Word",
    category: "PDF Tools",
    description:
      "Convert PDF documents into editable Microsoft Word files.",
    icon: "📝",
    featured: true,
    popular: true,
    new: true,
    keywords: [
      "pdf to word",
      "pdf to docx",
      "convert pdf to word",
      "editable word document",
      "pdf document converter",
      "pdf to microsoft word",
    ],
    seoTitle: "Convert PDF to Word Online | JamaicaTools",
    seoDescription:
      "Convert PDF documents into editable Word files online with JamaicaTools.",
    relatedTools: [
      "word-to-pdf",
      "pdf-to-images",
      "compress-pdf",
    ],
  },
];

export default tools;
