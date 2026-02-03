import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getCategoryBySlug,
  getAllProductsForCategory,
} from "../../data/productsData";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Category not found
        </p>
        <h1 className="text-3xl font-serif mt-4">We could not find that category.</h1>
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

  const allProducts = getAllProductsForCategory(category);

  return (
    <div className="bg-white text-black">
      <section className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            All Products
          </Link>
          <h1 className="text-4xl lg:text-6xl font-serif font-light mt-6">
            {category.name}
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            {category.description}
          </p>
          {category.notice && (
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white">
              {category.notice}
            </div>
          )}
          <div className="mt-10 text-sm text-gray-400 uppercase tracking-widest">
            {allProducts.length} Products
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-12">
          {category.sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif">{section.title}</h2>
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {section.products.length} items
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.products.map((product) => {
                  const specEntries = Object.entries(product.specs || {}).slice(0, 3);
                  return (
                    <Link
                      key={product.slug}
                      to={`/products/${category.slug}/${product.slug}`}
                      className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-5">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="h-40 w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-serif">{product.name}</h3>
                        {product.status && (
                          <span className="text-[10px] uppercase tracking-widest text-orange-600 border border-orange-200 px-2 py-1">
                            {product.status}
                          </span>
                        )}
                      </div>
                      {specEntries.length > 0 ? (
                        <div className="space-y-2 text-sm text-gray-600">
                          {specEntries.map(([label, value]) => (
                            <div key={label} className="flex justify-between gap-4">
                              <span className="text-gray-400">{label}</span>
                              <span className="font-medium text-gray-700">{value}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">
                          Specifications listed in product details.
                        </p>
                      )}
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-700 group-hover:text-black transition-colors">
                        View Details <ArrowUpRight size={14} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
