import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Mail,
  Share,
  Check,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  Grid3X3,
  ArrowRight,
} from "lucide-react";
import { getProductBySlug } from "../../data/productsData";
import { createProductRequest } from "../../data/adminApi";

const ProductDetailsPage = () => {
  const { categorySlug, productSlug } = useParams();
  const navigate = useNavigate();
  const data = getProductBySlug(categorySlug, productSlug);
  const [activeImage, setActiveImage] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [isRelatedOpen, setIsRelatedOpen] = React.useState(false);
  const [isRequestOpen, setIsRequestOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Reset state when product changes
  React.useEffect(() => {
    setActiveImage(0);
    setCopied(false);
    setIsRelatedOpen(false);
    setIsRequestOpen(false);
    setIsSubmitted(false);
    setSubmitError("");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  }, [categorySlug, productSlug]);

  // Handle browser back button for modals
  React.useEffect(() => {
    const handlePopState = (event) => {
      if (isRelatedOpen) {
        event.preventDefault();
        setIsRelatedOpen(false);
        // Push the current state back to prevent actual navigation
        window.history.pushState(null, "", window.location.href);
      }
      if (isRequestOpen) {
        event.preventDefault();
        setIsRequestOpen(false);
        window.history.pushState(null, "", window.location.href);
      }
    };

    // Add a history entry when modal opens
    if (isRelatedOpen || isRequestOpen) {
      window.history.pushState({ modal: true }, "", window.location.href);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isRelatedOpen, isRequestOpen]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isRelatedOpen) setIsRelatedOpen(false);
        if (isRequestOpen) setIsRequestOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isRelatedOpen, isRequestOpen]);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isRelatedOpen || isRequestOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isRelatedOpen, isRequestOpen]);

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

  const relatedProducts = category.sections.flatMap((categorySection) =>
    categorySection.products
      .filter((item) => item.slug !== product.slug)
      .map((item) => ({ item, sectionTitle: categorySection.title }))
  );

  const handleOpenRelated = () => {
    setIsRelatedOpen(true);
  };

  const handleCloseRelated = () => {
    setIsRelatedOpen(false);
  };

  const handleProductSelect = (productSlug) => {
    setIsRelatedOpen(false);
    navigate(`/products/${category.slug}/${productSlug}`);
  };

  const handleOpenRequest = () => {
    setIsSubmitted(false);
    setSubmitError("");
    setFormData({ fullName: "", phone: "", email: "", message: "" });
    setIsRequestOpen(true);
  };

  const handleCloseRequest = () => {
    setIsRequestOpen(false);
    setSubmitError("");
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    try {
      await createProductRequest({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        product: {
          name: product.name,
          slug: product.slug || productSlug,
          categoryName: category.name,
          categorySlug: category.slug,
          sectionTitle: section.title,
          image: product.image || null,
        },
        productPath: `/products/${category.slug}/${product.slug || productSlug}`,
      });
      setIsSubmitted(true);
      setTimeout(() => setIsRequestOpen(false), 1200);
    } catch (error) {
      setSubmitError(error.message || "Failed to send request.");
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className=" top-0 z-40 bg-black backdrop-blur-sm border-b pt-20 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <nav className="flex items-center gap-2 text-sm overflow-x-auto">
              <Link to="/products" className="text-gray-200 hover:text-gray-400 transition-colors whitespace-nowrap">
                Products
              </Link>
              <span className="text-gray-300">/</span>
              <Link to={`/products/${category.slug}`} className="text-gray-200 hover:text-gray-400 transition-colors whitespace-nowrap">
                {category.name}
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-200 font-medium truncate max-w-[150px] sm:max-w-none">
                {product.name}
              </span>
            </nav>

            <button
              onClick={handleShare}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0 ml-2"
            >
              {copied ? <Check className="w-5 h-5 text-green-600" /> : <Share className="w-5 h-5 text-gray-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Image Gallery */}
          <div>
            <div className="lg:sticky lg:top-28">
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

              {productImages.length > 1 && (
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveImage(Math.max(0, activeImage - 1))}
                    disabled={activeImage === 0}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex gap-2 overflow-x-auto py-1">
                    {productImages.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${idx === activeImage ? "border-gray-900" : "border-gray-200 hover:border-gray-400"
                          }`}
                      >
                        <img src={image} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveImage(Math.min(productImages.length - 1, activeImage + 1))}
                    disabled={activeImage === productImages.length - 1}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span>{category.name}</span>
                <span>·</span>
                <span>{section.title}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                {product.name}
              </h1>

              {product.status && (
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-lg text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  {product.status}
                </div>
              )}

              <p className="text-gray-600 mt-4 lg:mt-6 leading-relaxed text-sm sm:text-base">
                Premium quality product from our {category.name} collection.
                This item is part of the {section.title} series.
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Specifications</h2>

              {specEntries.length > 0 ? (
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3">
                  {specEntries.map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center gap-4">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="text-sm font-medium text-gray-900 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="text-gray-500 text-sm">
                    Specifications available in the datasheet.
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleOpenRequest}
                className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3.5 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                Request Information
              </button>

              {/* <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 border border-gray-200 py-3.5 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                Download Datasheet
              </Link> */}
            </div>
          </div>
        </div>

        {/* Related Products Section - Inline Preview */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Related Products
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {relatedProducts.length} more products in {category.name}
                </p>
              </div>

              <button
                onClick={handleOpenRelated}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-5 py-2.5 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium self-start sm:self-auto"
              >
                <Grid3X3 className="w-4 h-4" />
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Preview Grid - Shows first 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.slice(0, 4).map(({ item, sectionTitle }) => (
                <Link
                  key={item.slug}
                  to={`/products/${category.slug}/${item.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg"></div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 sm:p-4">
                      <p className="text-xs text-gray-400 mb-1 truncate">{sectionTitle}</p>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                        {item.name}
                      </h3>
                      {item.status && (
                        <span className="inline-block mt-2 text-xs text-amber-600 font-medium">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Related Products Modal */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${isRelatedOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="related-products-title"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleCloseRelated}
        />

        {/* Modal Container */}
        <div className="absolute inset-0 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
          <div
            className={`relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ${isRelatedOpen
                ? "translate-y-0 scale-100"
                : "translate-y-8 sm:translate-y-4 scale-95"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 flex-shrink-0">
              <div>
                <h2 id="related-products-title" className="text-lg sm:text-xl font-semibold text-gray-900">
                  Related Products
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {relatedProducts.length} products in {category.name}
                </p>
              </div>
              <button
                onClick={handleCloseRelated}
                className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {relatedProducts.map(({ item, sectionTitle }) => (
                  <button
                    key={item.slug}
                    onClick={() => handleProductSelect(item.slug)}
                    className="group text-left focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-xl sm:rounded-2xl"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="aspect-square bg-gray-50 overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded-lg"></div>
                          </div>
                        )}
                      </div>
                      <div className="p-3 sm:p-4">
                        <p className="text-xs text-gray-400 mb-1 truncate">{sectionTitle}</p>
                        <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                          {item.name}
                        </h3>
                        {item.status && (
                          <span className="inline-block mt-1.5 sm:mt-2 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full">
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer - Mobile Close Button */}
            <div className="sm:hidden border-t border-gray-100 p-4 flex-shrink-0">
              <button
                onClick={handleCloseRelated}
                className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-medium active:scale-98 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Request Information Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 ${isRequestOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={handleCloseRequest}
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-info-title"
      >
        <div
          className={`w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white sm:rounded-2xl shadow-2xl transform transition-all duration-300 ${isRequestOpen ? "translate-y-0 scale-100" : "translate-y-8 sm:translate-y-4 scale-95"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white flex items-start justify-between border-b border-gray-100 px-4 sm:px-6 py-4 sm:py-5 z-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Request Information
              </p>
              <h3 id="request-info-title" className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {category.name} · {section.title}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCloseRequest}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <form className="px-4 sm:px-6 py-6 space-y-5" onSubmit={handleFormSubmit}>
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{category.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">ID: {product.slug || productSlug}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Full Name *</span>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Phone</span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Email *</span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              />
            </label>

            {isSubmitted && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 flex items-center gap-2">
                <Check className="w-4 h-4" />
                Thanks! Your request has been submitted.
              </div>
            )}
            {submitError && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {submitError}
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-xs text-gray-400">
                We'll respond within 1-2 business days.
              </p>
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitted ? "Submitted!" : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
