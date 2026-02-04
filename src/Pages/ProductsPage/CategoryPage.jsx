import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Grid2X2, List, Search, Filter, ChevronRight } from "lucide-react";
import {
  getCategoryBySlug,
  getAllProductsForCategory,
} from "../../data/productsData";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const [view, setView] = React.useState('grid');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedSection, setSelectedSection] = React.useState('all');

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plus className="w-8 h-8 text-gray-400 rotate-45" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Category not found
          </h1>
          <p className="text-gray-500 mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const allProducts = getAllProductsForCategory(category);
  const filteredProducts = category.sections
    .filter(section => selectedSection === 'all' || section.title === selectedSection)
    .flatMap(section => 
      section.products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).map(product => ({ ...product, sectionTitle: section.title }))
    );

  return (
    <div className="min-h-screen bg-white  "  >
      {/* Clean Header */}
      <header className="sticky top-0 z-40 bg-black backdrop-blur-sm border-b border-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/products"
              className="flex items-center gap-2 text-gray-300 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Products</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  view === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid2X2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-lg transition-colors ${
                  view === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-black to-sky-950  py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              {category.description}
            </p>
            
            {category.notice && (
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-4 py-2 rounded-lg text-sm">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                {category.notice}
              </div>
            )}
            
            <div className="flex items-center gap-8 mt-8">
              <div>
                <div className="text-3xl font-semibold text-gray-400">{allProducts.length}</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl font-semibold text-gray-400">{category.sections.length}</div>
                <div className="text-sm text-gray-300">Collections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Section Filter */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => setSelectedSection('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedSection === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              {category.sections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => setSelectedSection(section.title)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedSection === section.title
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : view === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${category.slug}/${product.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-xl"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5">
                      <div className="text-xs text-gray-500 mb-2">{product.sectionTitle}</div>
                      <h3 className="text-base font-medium text-gray-900 mb-3 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {Object.entries(product.specs || {}).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500">{key}</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                      
                      {product.status && (
                        <div className="mt-3 inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                          <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                          {product.status}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${category.slug}/${product.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-1">{product.sectionTitle}</div>
                        <h3 className="text-base font-medium text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm">
                          {Object.entries(product.specs || {}).slice(0, 3).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-gray-500">{key}: </span>
                              <span className="text-gray-900 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {product.status && (
                          <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                            {product.status}
                          </span>
                        )}
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;