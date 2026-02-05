import imgDriver10 from "../assets/Images/speaker.png";
import imgDriver12 from "../assets/Images/1.jpg";
import imgDriver15 from "../assets/Images/2.jpg";
import imgGallery3 from "../assets/Images/3.jpg";
import imgGallery4 from "../assets/Images/4.jpeg";
import imgGallery5 from "../assets/Images/5.jpeg";
import imgDriver18 from "../assets/Images/9.png";
import imgCrossover from "../assets/Images/6.png";
import imgDiaphragm from "../assets/Images/8.png";
import imgCabinet from "../assets/Images/background.png";
import imgEvents from "../assets/Images/events.jpg";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const buildImageGallery = (primaryImage, additionalImages = []) => {
  const pool = [primaryImage, ...additionalImages].filter(Boolean);

  const unique = [];
  for (const image of pool) {
    if (!unique.includes(image)) unique.push(image);
  }

  return unique;
};

const buildProduct = (product) => {
  const suppliedImages = Array.isArray(product.images) ? product.images : [];
  const primaryImage = product.image || suppliedImages[0] || null;

  return {
    ...product,
    slug: product.slug || slugify(product.name),
    image: primaryImage,
    images: buildImageGallery(primaryImage, suppliedImages),
  };
};

const gallerySets = {
  driver10: [imgDriver10, imgDriver12, imgDriver15, imgGallery3],
  driver12: [imgDriver12, imgDriver10, imgDriver15, imgGallery4],
  driver15: [imgDriver15, imgDriver10, imgDriver12, imgGallery5],
  driver18: [imgDriver18, imgDriver15, imgDriver12, imgGallery3],
  crossover: [imgCrossover, imgGallery3, imgGallery4, imgGallery5],
  diaphragm: [imgDiaphragm, imgGallery3, imgGallery4, imgGallery5],
  cabinetBass: [imgCabinet, imgEvents, imgGallery4, imgGallery5],
  cabinetTop: [imgCabinet, imgEvents, imgGallery3, imgGallery4],
};

export const productCategories = [
  {
    name: "Passive Speaker Drivers",
    slug: "passive-speaker-drivers",
    description:
      "Passive speaker drivers grouped by size with detailed specifications for each model.",
    notice: "Active Speakers (Coming Soon)",
    sections: [
      {
        title: '10" Speakers',
        products: [
          buildProduct({
            name: "10X500B",
            image: imgDriver10,
            images: gallerySets.driver10,
            specs: {
              Size: '12"',
              "Voice coil": '3" In/Out',
              "Power Rating": "500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "190*90*25, Y35",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "10X500NEO",
            image: imgDriver10,
            images: gallerySets.driver10,
            specs: {
              Size: '10"',
              "Voice coil": '3" In/Out',
              "Power Rating": "500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "NEO, N42H",
              Frequency: "50 Hz - 3.5 KHz",
              "Magnet type": "Neodymium",
            },
          }),
        ],
      },
      {
        title: '12" Speakers',
        products: [
          buildProduct({
            name: "12X100w",
            image: imgDriver12,
            images: gallerySets.driver12,
            specs: {
              Size: '12"',
              "Voice coil": '1.5" Out',
              "Power Rating": "100 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Metal",
              "Magnet Size": "135*42*20, Y30",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "12X200w",
            image: imgDriver12,
            images: gallerySets.driver12,
            specs: {
              Size: '12"',
              "Voice coil": '2" Out',
              "Power Rating": "200 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Metal",
              "Magnet Size": "155*57*20, Y30",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "12X200B",
            image: imgDriver12,
            images: gallerySets.driver12,
            specs: {
              Size: '12"',
              "Voice coil": '1.75" Out',
              "Power Rating": "200 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Metal",
              "Magnet Size": "155*57*20, Y35",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "12X250w",
            image: imgDriver12,
            images: gallerySets.driver12,
            specs: {
              Size: '12"',
              "Voice coil": '2" In/Out',
              "Power Rating": "250 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Metal",
              "Magnet Size": "155*57*25, Y30",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "12X500B",
            image: imgDriver12,
            images: gallerySets.driver12,
            specs: {
              Size: '12"',
              "Voice coil": '3" In/Out',
              "Power Rating": "500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "190*90*25, Y35",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "12X500NEO",
            image: imgDriver12,
            images: gallerySets.driver12,
            specs: {
              Size: '12"',
              "Voice coil": '3" In/Out',
              "Power Rating": "500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "NEO, N42H",
              Frequency: "50 Hz - 3.5 KHz",
              "Magnet type": "Neodymium",
            },
          }),
        ],
      },
      {
        title: '15" Speakers',
        products: [
          buildProduct({
            name: "15X400B",
            image: imgDriver15,
            images: gallerySets.driver15,
            specs: {
              Size: '15"',
              "Voice coil": '3" In/Out',
              "Power Rating": "400 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "180*90*25, Y35",
              Frequency: "50 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "15X500BB",
            image: imgDriver15,
            images: gallerySets.driver15,
            specs: {
              Size: '15"',
              "Voice coil": '3" In/Out',
              "Power Rating": "500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "190*90*25, Y35",
              Frequency: "35 Hz - 2.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "15X500BW",
            image: imgDriver15,
            images: gallerySets.driver15,
            specs: {
              Size: '15"',
              "Voice coil": '3" In/Out',
              "Power Rating": "500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "190*90*25, Y35",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "15X800B",
            image: imgDriver15,
            images: gallerySets.driver15,
            specs: {
              Size: '15"',
              "Voice coil": '4" In/Out',
              "Power Rating": "800 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "220*110*25, Y35",
              Frequency: "45 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
        ],
      },
      {
        title: '18" Speakers',
        products: [
          buildProduct({
            name: "18X1200B",
            image: imgDriver18,
            images: gallerySets.driver18,
            specs: {
              Size: '18"',
              "Voice coil": '4" In/Out',
              "Power Rating": "1200 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "220*120*25, Y35",
              Frequency: "35 Hz - 2.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "18X1500B",
            image: imgDriver18,
            images: gallerySets.driver18,
            specs: {
              Size: '18"',
              "Voice coil": '4" In/Out',
              "Power Rating": "1500 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "220*120*30, Y35",
              Frequency: "40 Hz - 3.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
          buildProduct({
            name: "18X1800B",
            status: "Coming Soon",
            image: imgDriver18,
            images: gallerySets.driver18,
            specs: {},
          }),
          buildProduct({
            name: "18X2000B",
            image: imgDriver18,
            images: gallerySets.driver18,
            specs: {
              Size: '18"',
              "Voice coil": '5" In/Out',
              "Power Rating": "2000 Watts RMS",
              "Nominal Impedance": "8 Ohms",
              Frame: "Aluminium",
              "Magnet Size": "280*140*30, Y35, 4Piece",
              Frequency: "40 Hz - 1.5 KHz",
              "Magnet type": "Ferrite",
            },
          }),
        ],
      },
    ],
  },
  {
    name: "Crossovers",
    slug: "crossovers",
    description:
      "Passive and active crossover boards listed by network configuration.",
    sections: [
      {
        title: "Passive Crossover",
        products: [
          buildProduct({
            name: "450 Network Board",
            image: imgCrossover,
            images: gallerySets.crossover,
          }),
          buildProduct({
            name: "518 Network Board",
            image: imgCrossover,
            images: gallerySets.crossover,
          }),
          buildProduct({
            name: "750 Network Board",
            image: imgCrossover,
            images: gallerySets.crossover,
          }),
          buildProduct({
            name: "2Way 518+500 Network Board",
            image: imgCrossover,
            images: gallerySets.crossover,
          }),
          buildProduct({
            name: "3Way 750+500+500 Network Board",
            image: imgCrossover,
            images: gallerySets.crossover,
          }),
        ],
      },
      {
        title: "Active Crossover",
        products: [
          buildProduct({
            name: "234XLS Crossover",
            status: "Coming Soon",
            image: imgCrossover,
            images: gallerySets.crossover,
          }),
        ],
      },
    ],
  },
  {
    name: "Diaphragms",
    slug: "diaphragms",
    description:
      "Replacement diaphragms compatible with listed driver platforms.",
    sections: [
      {
        title: "Available Diaphragms",
        products: [
          buildProduct({
            name: "450 Diaphragm",
            image: imgDiaphragm,
            images: gallerySets.diaphragm,
          }),
          buildProduct({
            name: "518 Diaphragm",
            image: imgDiaphragm,
            images: gallerySets.diaphragm,
          }),
          buildProduct({
            name: "750 Diaphragm",
            image: imgDiaphragm,
            images: gallerySets.diaphragm,
          }),
          buildProduct({
            name: "Vrx Diaphragm",
            image: imgDiaphragm,
            images: gallerySets.diaphragm,
          }),
        ],
      },
    ],
  },
  {
    name: "Speaker Cabinets",
    slug: "speaker-cabinets",
    description:
      "Cabinet builds for bass and top configurations as listed in the catalog.",
    sections: [
      {
        title: "Bass",
        products: [
          buildProduct({
            name: "T RDX -Bass",
            image: imgCabinet,
            images: gallerySets.cabinetBass,
          }),
        ],
      },
      {
        title: "Top",
        products: [
          buildProduct({
            name: "T 999 - Double 15\"",
            image: imgCabinet,
            images: gallerySets.cabinetTop,
          }),
          buildProduct({
            name: "T 444 - Single 15\"",
            image: imgCabinet,
            images: gallerySets.cabinetTop,
          }),
          buildProduct({
            name: "TT+ - Single 12\"",
            image: imgCabinet,
            images: gallerySets.cabinetTop,
          }),
        ],
      },
    ],
  },
];

export const getCategoryBySlug = (slug) =>
  productCategories.find((category) => category.slug === slug);

export const getProductBySlug = (categorySlug, productSlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  for (const section of category.sections) {
    const product = section.products.find((item) => item.slug === productSlug);
    if (product) return { product, category, section };
  }
  return null;
};

export const getAllProductsForCategory = (category) =>
  category.sections.flatMap((section) => section.products);
