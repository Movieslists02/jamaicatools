import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "jamaicatools-cookie-consent";
const CONSENT_VERSION = 1;

const DEFAULT_PREFERENCES = {
  necessary: true,
  analytics: false,
  advertising: false,
};

function updateGoogleConsent(preferences) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    ad_storage: preferences.advertising ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function readStoredConsent() {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return null;
    }

    const parsedValue = JSON.parse(storedValue);

    if (
      parsedValue.version !== CONSENT_VERSION ||
      !parsedValue.preferences
    ) {
      return null;
    }

    return parsedValue.preferences;
  } catch {
    return null;
  }
}

function saveConsent(preferences) {
  const value = {
    version: CONSENT_VERSION,
    savedAt: new Date().toISOString(),
    preferences,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  updateGoogleConsent(preferences);

  window.dispatchEvent(
    new CustomEvent("jamaicatools:consent-updated", {
      detail: preferences,
    }),
  );
}

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const storedPreferences = readStoredConsent();

    if (storedPreferences) {
      setPreferences({
        ...DEFAULT_PREFERENCES,
        ...storedPreferences,
        necessary: true,
      });

      updateGoogleConsent({
        ...DEFAULT_PREFERENCES,
        ...storedPreferences,
        necessary: true,
      });

      return;
    }

    setIsVisible(true);
  }, []);

  useEffect(() => {
    const openPreferences = () => {
      const storedPreferences = readStoredConsent();

      setPreferences({
        ...DEFAULT_PREFERENCES,
        ...storedPreferences,
        necessary: true,
      });

      setIsManaging(true);
      setIsVisible(true);
    };

    window.addEventListener(
      "jamaicatools:open-cookie-preferences",
      openPreferences,
    );

    return () => {
      window.removeEventListener(
        "jamaicatools:open-cookie-preferences",
        openPreferences,
      );
    };
  }, []);

  const completeConsent = (nextPreferences) => {
    const normalizedPreferences = {
      necessary: true,
      analytics: Boolean(nextPreferences.analytics),
      advertising: Boolean(nextPreferences.advertising),
    };

    saveConsent(normalizedPreferences);
    setPreferences(normalizedPreferences);
    setIsManaging(false);
    setIsVisible(false);
  };

  const acceptAll = () => {
    completeConsent({
      necessary: true,
      analytics: true,
      advertising: true,
    });
  };

  const rejectOptional = () => {
    completeConsent(DEFAULT_PREFERENCES);
  };

  const savePreferences = () => {
    completeConsent(preferences);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Privacy choices
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Choose how JamaicaTools uses cookies
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Necessary storage supports security and essential website
              functions. With your permission, analytics can help us understand
              website usage and advertising storage can support Google ads.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Read our{" "}
              <Link
                to="/cookies"
                className="font-semibold text-green-700 hover:text-green-800 hover:underline"
              >
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="font-semibold text-green-700 hover:text-green-800 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {!isManaging && (
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Accept All
              </button>

              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
              >
                Reject Optional
              </button>

              <button
                type="button"
                onClick={() => setIsManaging(true)}
                className="rounded-xl px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Manage Preferences
              </button>
            </div>
          )}
        </div>

        {isManaging && (
          <div className="mt-7 border-t border-slate-200 pt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-slate-900">Necessary</h3>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Always active
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Supports security, consent storage and essential website
                  operation.
                </p>
              </div>

              <label className="cursor-pointer rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-slate-900">Analytics</span>

                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: event.target.checked,
                      }))
                    }
                    className="h-5 w-5 accent-green-700"
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Helps us understand general usage and improve JamaicaTools.
                </p>
              </label>

              <label className="cursor-pointer rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-slate-900">Advertising</span>

                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        advertising: event.target.checked,
                      }))
                    }
                    className="h-5 w-5 accent-green-700"
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Allows advertising storage and personalized advertising
                  signals.
                </p>
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
              >
                Reject Optional
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CookieConsent;
