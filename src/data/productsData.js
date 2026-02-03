import imgDriver10 from "../assets/Images/speaker.png";
import imgDriver12 from "../assets/Images/1.jpg";
import imgDriver15 from "../assets/Images/2.jpg";
import imgDriver18 from "../assets/Images/9.png";
import imgCrossover from "../assets/Images/6.png";
import imgDiaphragm from "../assets/Images/8.png";
import imgCabinet from "../assets/Images/background.png";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const buildProduct = (product) => ({
  ...product,
  slug: product.slug || slugify(product.name),
  image: product.image || null,
});

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
            specs: {},
          }),
          buildProduct({
            name: "18X2000B",
            image: imgDriver18,
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
          buildProduct({ name: "450 Network Board", image: imgCrossover }),
          buildProduct({ name: "518 Network Board", image: imgCrossover }),
          buildProduct({ name: "750 Network Board", image: imgCrossover }),
          buildProduct({
            name: "2Way 518+500 Network Board",
            image: imgCrossover,
          }),
          buildProduct({
            name: "3Way 750+500+500 Network Board",
            image: imgCrossover,
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
          buildProduct({ name: "450 Diaphragm", image: imgDiaphragm }),
          buildProduct({ name: "518 Diaphragm", image: imgDiaphragm }),
          buildProduct({ name: "750 Diaphragm", image: imgDiaphragm }),
          buildProduct({ name: "Vrx Diaphragm", image: imgDiaphragm }),
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
        products: [buildProduct({ name: "T RDX -Bass", image: imgCabinet })],
      },
      {
        title: "Top",
        products: [
          buildProduct({ name: "T 999 - Double 15\"", image: imgCabinet }),
          buildProduct({ name: "T 444 - Single 15\"", image: imgCabinet }),
          buildProduct({ name: "TT+ - Single 12\"", image: imgCabinet }),
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
