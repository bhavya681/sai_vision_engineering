"use client";

import { FormEvent, useMemo, useState } from "react";
import { categories } from "@/data/products";

type Props = {
  defaultProduct?: string;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  category: string;
  quantity: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  category: "",
  quantity: "",
  message: "",
};

export function InquiryForm({ defaultProduct = "" }: Props) {
  const [values, setValues] = useState<FormState>({ ...initial, product: defaultProduct });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const canSubmit = useMemo(
    () => status !== "submitting" && status !== "success" && !submittedOnce,
    [status, submittedOnce]
  );

  function validate(data: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!data.name.trim()) next.name = "Full name is required.";
    if (!data.email.trim()) next.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Please enter a valid email address.";
    if (!data.phone.trim()) next.phone = "Phone number is required.";
    if (!data.message.trim()) next.message = "Please describe your requirement.";
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("submitting");
    try {
      // TODO: Connect to email/CRM backend (Resend, Formspree, API route, etc.)
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.info("Inquiry submitted (frontend placeholder):", values);
      setStatus("success");
      setSubmittedOnce(true);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-green-100 bg-green-50 p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-green-700">
              Inquiry received
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-gray-900 sm:text-2xl">
              Thank you for contacting Sai Vision Engineering.
            </h3>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          Your inquiry has been recorded. Connect a backend email service to deliver messages to the company inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => setValues((s) => ({ ...s, name: v }))}
          placeholder="Your full name"
        />
        <Field
          label="Company / Organisation"
          value={values.company}
          onChange={(v) => setValues((s) => ({ ...s, company: v }))}
          placeholder="Company name (optional)"
        />
        <Field
          label="Email Address"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(v) => setValues((s) => ({ ...s, email: v }))}
          placeholder="you@company.com"
        />
        <Field
          label="Phone Number"
          type="tel"
          required
          error={errors.phone}
          value={values.phone}
          onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
          placeholder="+91 XXXXX XXXXX"
        />
        <Field
          label="Product / Equipment"
          value={values.product}
          onChange={(v) => setValues((s) => ({ ...s, product: v }))}
          placeholder="e.g. Glass-Lined Reactor Spares"
        />

        {/* Category select */}
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-gray-700">Category</span>
          <select
            className="field-control"
            value={values.category}
            onChange={(e) => setValues((s) => ({ ...s, category: e.target.value }))}
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Field
        label="Quantity / Scope"
        value={values.quantity}
        onChange={(v) => setValues((s) => ({ ...s, quantity: v }))}
        placeholder="e.g. 2 units, annual maintenance, etc."
      />

      {/* Message textarea */}
      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold text-gray-700">
          Requirement / Message{" "}
          <span className="text-red-600" aria-hidden="true">*</span>
        </span>
        <textarea
          rows={5}
          className="field-control resize-y"
          placeholder="Describe your requirement, application, or question…"
          value={values.message}
          onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-required="true"
        />
        {errors.message && (
          <span className="mt-1.5 block text-xs font-semibold text-red-600" role="alert">
            {errors.message}
          </span>
        )}
      </label>

      {/* Error state */}
      {status === "error" && (
        <p
          className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          role="alert"
        >
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg w-full sm:w-auto"
        disabled={!canSubmit}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending…
          </span>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}

/* ── Reusable field component ── */
function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-semibold text-gray-700">
        {label}{" "}
        {required && (
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="field-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-required={required || undefined}
      />
      {error && (
        <span className="mt-1.5 block text-xs font-semibold text-red-600" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
