"use client";

import { FormEvent, Fragment, useRef, useState } from "react";

import { portfolio, terminalSuggestions } from "@/lib/portfolio";
import { getTerminalResponse, initialTerminalMessages, type TerminalMessage } from "@/lib/terminal-responses";
import { cn } from "@/lib/utils";
import Link from "next/link";

const terminalLinks = [portfolio.resume.viewPath, portfolio.resume.path];

const linkPattern = new RegExp(
  `(https?:\\/\\/[^\\s]+|${terminalLinks.map((link) => link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

function isTerminalLink(part: string) {
  return (
    /^https?:\/\/\S+$/.test(part) ||
    part === portfolio.resume.path ||
    part === portfolio.resume.viewPath
  );
}

function TerminalMessageContent({ content }: { content: string }) {
  const parts = content.split(linkPattern);

  return (
    <>
      {parts.map((part, index) =>
        isTerminalLink(part) ? (
          part.endsWith('.pdf') || part.startsWith('http') ? (
            <a
              key={`${part}-${index}`}
              href={part}
              target="_blank"
              rel="noreferrer"
              download={
                part.endsWith('.pdf') ? portfolio.resume.downloadName : undefined
              }
              className="underline decoration-terminal/40 underline-offset-4 transition hover:text-terminal"
            >
              {part}
            </a>
          ) : (
            <Link
              key={`${part}-${index}`}
              href={part}
              className="underline decoration-terminal/40 underline-offset-4 transition hover:text-terminal"
            >
              {part}
            </Link>
          )
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function TerminalChat() {
  const [messages, setMessages] = useState<TerminalMessage[]>(initialTerminalMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const submitQuery = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || isTyping) return;

    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", content: getTerminalResponse(trimmed) }]);
      setIsTyping(false);
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 450);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuery(input);
  };

  return (
    <div className="terminal-window flex h-full min-h-[420px] flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <p className="font-mono text-sm text-foreground">~/ask-me.sh</p>
        <p className="font-mono text-xs text-terminal">
          <span className="mr-1.5 inline-block size-2 rounded-full bg-terminal animate-pulse-dot" />
          ready
        </p>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4 font-mono text-sm leading-6">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={cn(
              "whitespace-pre-wrap",
              message.role === "system" && "text-muted-foreground",
              message.role === "user" && "text-foreground",
              message.role === "assistant" && "text-terminal-dim",
            )}
          >
            {message.role === "user" ? (
              `> ${message.content}`
            ) : (
              <TerminalMessageContent content={message.content} />
            )}
          </div>
        ))}
        {isTyping ? <p className="font-mono text-sm text-muted-foreground">{"// thinking..."}</p> : null}
      </div>

      <div className="border-t border-white/10 px-4 py-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {terminalSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => submitQuery(suggestion)}
              className="terminal-chip"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <label htmlFor="terminal-input" className="sr-only">
            Ask about {portfolio.firstName}
          </label>
          <span className="font-mono text-terminal">&gt;</span>
          <input
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={`ask anything about ${portfolio.firstName.toLowerCase()}..`}
            className="min-w-0 flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md border border-white/10 px-3 py-1.5 font-mono text-xs text-muted-foreground transition hover:border-terminal/30 hover:text-terminal"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
