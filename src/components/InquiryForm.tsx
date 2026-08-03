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
  const [values, setValues] = useState<FormState>({
    ...initial,
    product: defaultProduct,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const canSubmit = useMemo(
    () => status !== "submitting" && status !== "success" && !submittedOnce,
    [status, submittedOnce],
  );

  function validate(data: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!data.name.trim()) next.name = "Name is required.";
    if (!data.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Enter a valid email.";
    if (!data.phone.trim()) next.phone = "Phone is required.";
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
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info("Inquiry submitted (frontend placeholder):", values);
      setStatus("success");
      setSubmittedOnce(true);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-sun-400/50 bg-sun-50 p-6 sm:p-8" role="status">
        <p className="eyebrow">Inquiry received</p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-ink-950">
          Thank you for contacting Sai Vision Engineering.
        </h3>
        <p className="mt-3 text-ink-800">
          Your inquiry has been recorded in this demo flow. Connect a backend email service to
          deliver messages to the company inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => setValues((s) => ({ ...s, name: v }))}
        />
        <Field
          label="Company"
          value={values.company}
          onChange={(v) => setValues((s) => ({ ...s, company: v }))}
        />
        <Field
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(v) => setValues((s) => ({ ...s, email: v }))}
        />
        <Field
          label="Phone"
          type="tel"
          required
          error={errors.phone}
          value={values.phone}
          onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
        />
        <Field
          label="Product"
          value={values.product}
          onChange={(v) => setValues((s) => ({ ...s, product: v }))}
        />
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink-900">Category</span>
          <select
            className="field-control"
            value={values.category}
            onChange={(e) => setValues((s) => ({ ...s, category: e.target.value }))}
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Field
        label="Quantity / scope"
        value={values.quantity}
        onChange={(v) => setValues((s) => ({ ...s, quantity: v }))}
      />

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink-900">
          Message <span className="text-ember-500">*</span>
        </span>
        <textarea
          rows={5}
          className="field-control"
          value={values.message}
          onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-required="true"
        />
        {errors.message ? (
          <span className="mt-1.5 block text-sm font-medium text-ember-600" role="alert">
            {errors.message}
          </span>
        ) : null}
      </label>

      {status === "error" ? (
        <p className="rounded-md border border-ember-600/30 bg-red-50 px-3 py-2 text-sm font-medium text-ember-600" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={!canSubmit}>
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink-900">
        {label} {required ? <span className="text-ember-500">*</span> : null}
      </span>
      <input
        type={type}
        className="field-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-required={required || undefined}
      />
      {error ? (
        <span className="mt-1.5 block text-sm font-medium text-ember-600" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
