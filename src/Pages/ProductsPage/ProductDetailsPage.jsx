import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getProductBySlug,
} from "../../data/productsData";

const ProductDetailsPage = () => {
  const { categorySlug, productSlug } = useParams();
  const data = getProductBySlug(categorySlug, productSlug);

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Product not found
        </p>
        <h1 className="text-3xl font-serif mt-4">We could not find that product.</h1>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-wider text-blue-700"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>
    );
  }

  const { product, category, section } = data;
  const relatedProducts = category.sections.flatMap((categorySection) =>
    categorySection.products
      .filter((item) => item.slug !== product.slug)
      .map((item) => ({ item, sectionTitle: categorySection.title }))
  );
  const specEntries = Object.entries(product.specs || {});

  return (
    <div className="bg-white text-black">
      <section className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <Link
            to={`/products/${category.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            {category.name}
          </Link>
          <h1 className="text-4xl lg:text-6xl font-serif font-light mt-6">
            {product.name}
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            {section.title}
          </p>
          {product.status && (
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white">
              {product.status}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="mb-10 border border-gray-200 rounded-2xl overflow-hidden bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 md:h-96 object-cover"
                />
              ) : (
                <div className="w-full h-72 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200" />
              )}
            </div>

            <h2 className="text-2xl font-serif mb-6">Specifications</h2>
            {specEntries.length > 0 ? (
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                {specEntries.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-6 px-6 py-4 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm uppercase tracking-wider text-gray-400">
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-gray-300 rounded-2xl p-6 text-sm text-gray-500">
                Specifications for this item are listed in the PDF catalog but were
                not provided in detail.
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-serif mb-4">Product Summary</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.name} is listed under {category.name} in the catalog.
                Refer to the specifications table for the full technical details
                provided.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className="font-medium">{category.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Group</span>
                  <span className="font-medium">{section.title}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  Request Datasheet <ArrowUpRight size={14} />
                </Link>
                <Link
                  to={`/products/${category.slug}`}
                  className="inline-flex items-center justify-center gap-2 border border-black/20 text-black px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <p className="text-blue-700 font-mono text-sm tracking-wider">
                  Related Products
                </p>
                <h2 className="text-3xl font-serif mt-2">
                  More from {category.name}
                </h2>
              </div>
              <Link
                to={`/products/${category.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b-2 border-black hover:text-blue-700 hover:border-blue-700 transition-colors"
              >
                View Category <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 6).map(({ item, sectionTitle }) => (
                <Link
                  key={item.slug}
                  to={`/products/${category.slug}/${item.slug}`}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-5">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-36 w-full object-cover"
                      />
                    ) : (
                      <div className="h-36 w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                    )}
                  </div>
                  <h3 className="text-lg font-serif">{item.name}</h3>
                  {item.status && (
                    <span className="mt-3 inline-flex text-[10px] uppercase tracking-widest text-orange-600 border border-orange-200 px-2 py-1">
                      {item.status}
                    </span>
                  )}
                  <div className="mt-4 text-sm text-gray-500">
                    {sectionTitle}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailsPage;
