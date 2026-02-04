import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, Mail, Share, Copy, Check, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { getProductBySlug } from "../../data/productsData";

const ProductDetailsPage = () => {
  const { categorySlug, productSlug } = useParams();
  const data = getProductBySlug(categorySlug, productSlug);
  const [activeImage, setActiveImage] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plus className="w-8 h-8 text-gray-400 rotate-45" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Product not found
          </h1>
          <p className="text-gray-500 mb-8">
            The product you're looking for doesn't exist.
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

  const { product, category, section } = data;
  const productImages = React.useMemo(() => {
    const candidates = [
      product?.image,
      ...(Array.isArray(product?.images) ? product.images : []),
    ].filter(Boolean);
    return [...new Set(candidates)];
  }, [product]);

  const currentImage = productImages[activeImage] || null;
  const specEntries = Object.entries(product.specs || {});

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProducts = category.sections.flatMap((categorySection) =>
    categorySection.products
      .filter((item) => item.slug !== product.slug)
      .map((item) => ({ item, sectionTitle: categorySection.title }))
  );

  return (
    <div className="min-h-screen bg-white ">
      {/* Simple Header */}
      <header className="sticky top-0 z-40 bg-black backdrop-blur-sm border-b pt-20 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/products" className="text-gray-200 hover:text-gray-400 transition-colors">
                Products
              </Link>
              <span className="text-gray-300">/</span>
              <Link to={`/products/${category.slug}`} className="text-gray-200 hover:text-gray-400 transition-colors">
                {category.name}
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-200 font-medium">{product.name}</span>
            </nav>
            
            <button
              onClick={handleShare}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-green-600" /> : <Share className="w-5 h-5 text-gray-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div>
            <div className="sticky top-28">
              {/* Main Image */}
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                  </div>
                )}
              </div>
              
              {/* Image Navigation */}
              {productImages.length > 1 && (
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveImage(Math.max(0, activeImage - 1))}
                    disabled={activeImage === 0}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex gap-2 overflow-x-auto">
                    {productImages.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                          idx === activeImage ? 'border-gray-900' : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActiveImage(Math.min(productImages.length - 1, activeImage + 1))}
                    disabled={activeImage === productImages.length - 1}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>{category.name}</span>
                <span>·</span>
                <span>{section.title}</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {product.status && (
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-lg text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  {product.status}
                </div>
              )}
              
              <p className="text-gray-600 mt-6 leading-relaxed">
                Premium quality product from our {category.name} collection. 
                This item is part of the {section.title} series and meets the highest standards.
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Specifications</h2>
              
              {specEntries.length > 0 ? (
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  {specEntries.map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="text-sm font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="text-gray-500 text-sm">
                    Detailed specifications are available in the product datasheet.
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-8">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Request Information
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Datasheet
              </Link>
            </div>

           
          
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-20 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Related Products</h2>
              <Link
                to={`/products/${category.slug}`}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                View all
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map(({ item }) => (
                <Link
                  key={item.slug}
                  to={`/products/${category.slug}/${item.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300">
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                      {item.status && (
                        <span className="text-xs text-amber-600">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;