"use client";

import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-md border border-white/10 bg-black/20 px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:border-terminal/40 focus:outline-none focus:ring-1 focus:ring-terminal/30";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)} noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          disabled={status === "submitting"}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          disabled={status === "submitting"}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          disabled={status === "submitting"}
          className={cn(inputClassName, "resize-y min-h-[120px]")}
        />
      </div>

      {status === "success" ? (
        <p className="rounded-md border border-terminal/30 bg-terminal/10 px-3 py-2 font-mono text-sm text-terminal">
          Message sent. I&apos;ll get back to you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 font-mono text-sm text-red-400">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-md bg-terminal px-4 py-2.5 font-mono text-sm font-medium text-black transition hover:bg-terminal/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "sending..." : "→ send message"}
      </button>
    </form>
  );
}
