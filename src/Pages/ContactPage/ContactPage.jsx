import React, { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { createContactRequest } from "../../data/adminApi";
import Hero from "../../Components/Contact/Hero";
import FormSection from "../../Components/Contact/FormSection";
import MapSection from "../../Components/Contact/MapSection";

const ContactPage = () => {
  const prefersReducedMotion = useReducedMotion();

  const variants = useMemo(() => {
    const baseTransition = prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.75, ease: [0.22, 1, 0.36, 1] };

    return {
      container: {
        hidden: {},
        show: {
          transition: prefersReducedMotion ? {} : { staggerChildren: 0.08 },
        },
      },
      fadeUp: {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: baseTransition },
      },
      section: {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: baseTransition },
      },
    };
  }, [prefersReducedMotion]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [submitError, setSubmitError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    try {
      await createContactRequest({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
      setStatus("Thanks! We received your message and will get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
      window.setTimeout(() => setStatus(null), 6000);
    } catch (error) {
      setSubmitError(error.message || "Failed to send message.");
    }
  };

  const mapSrc =
    "https://www.google.com/maps?q=Industrial%20Area%2C%20Sector%2012%2C%20New%20Delhi%2C%20India&output=embed";

  return (
    <div className="bg-white text-black">
      <Hero variants={variants} />
      <FormSection
        variants={variants}
        status={status}
        submitError={submitError}
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <MapSection variants={variants} mapSrc={mapSrc} />
    </div>
  );
};

export default ContactPage;
