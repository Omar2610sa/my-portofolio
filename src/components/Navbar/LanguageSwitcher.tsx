"use client";

import { useCallback, useEffect, useState } from "react";
import { LanguagesIcon } from "lucide-react";
import i18n from "@/i18n/i18n";

type Lang = "en" | "ar";

const STORAGE_KEY = "language";

function applyLanguageToDocument(lang: Lang) {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
}

export default function LanguageSwitcher() {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        // Read persisted language on mount.
        const stored = (typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null) as
            | Lang
            | null;
        const initialLang: Lang = stored === "ar" ? "ar" : "en";

        setLang(initialLang);
        applyLanguageToDocument(initialLang);
        i18n.changeLanguage(initialLang);
    }, []);

    const toggle = useCallback(async () => {
        const nextLang: Lang = lang === "en" ? "ar" : "en";
        setLang(nextLang);

        // Persist + apply.
        window.localStorage.setItem(STORAGE_KEY, nextLang);
        applyLanguageToDocument(nextLang);

        // Switch namespace/language.
        await i18n.changeLanguage(nextLang);
    }, [lang]);

    return (
        <button
            type="button"
            onClick={toggle}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-surface/60 text-text transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
            title="Toggle language"
        >
            <LanguagesIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
        </button>
    );
}

