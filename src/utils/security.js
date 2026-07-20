export const CONTACT_FORM_COOLDOWN_MS = 10000;

export const CONTACT_FORM_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 1200,
  honeypotMax: 120,
};

const ALLOWED_EXTERNAL_HOSTS = new Set([
  'asimovjr.com.br',
  'drive.google.com',
  'github.com',
  'www.asimovjr.com.br',
  'www.github.com',
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;

const stripControlCharacters = (value) => (
  Array.from(String(value ?? ''))
    .filter((character) => {
      const code = character.charCodeAt(0);

      return !(
        code <= 8
        || code === 11
        || code === 12
        || (code >= 14 && code <= 31)
        || code === 127
      );
    })
    .join('')
);

export const sanitizeTextInput = (value, maxLength) => (
  stripControlCharacters(value)
    .trim()
    .slice(0, maxLength)
);

export const normalizeContactForm = (form) => ({
  name: sanitizeTextInput(form.name, CONTACT_FORM_LIMITS.nameMax).replace(/\s+/gu, ' '),
  email: sanitizeTextInput(form.email, CONTACT_FORM_LIMITS.emailMax).toLowerCase(),
  message: sanitizeTextInput(form.message, CONTACT_FORM_LIMITS.messageMax)
    .replace(/\r\n/gu, '\n')
    .replace(/\n{4,}/gu, '\n\n\n'),
  website: sanitizeTextInput(form.website, CONTACT_FORM_LIMITS.honeypotMax),
});

export const validateContactForm = (form) => {
  const normalized = normalizeContactForm(form);
  const errors = {};

  if (
    normalized.name.length < CONTACT_FORM_LIMITS.nameMin
    || normalized.name.length > CONTACT_FORM_LIMITS.nameMax
  ) {
    errors.name = true;
  }

  if (!EMAIL_PATTERN.test(normalized.email) || normalized.email.length > CONTACT_FORM_LIMITS.emailMax) {
    errors.email = true;
  }

  if (
    normalized.message.length < CONTACT_FORM_LIMITS.messageMin
    || normalized.message.length > CONTACT_FORM_LIMITS.messageMax
  ) {
    errors.message = true;
  }

  return {
    errors,
    isBot: normalized.website.length > 0,
    isValid: Object.keys(errors).length === 0,
    normalized,
  };
};

export const getSafeExternalUrl = (url) => {
  if (!url) return '';

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();

    if (parsedUrl.protocol !== 'https:' || !ALLOWED_EXTERNAL_HOSTS.has(hostname)) {
      return '';
    }

    parsedUrl.hash = parsedUrl.hash.slice(0, 256);

    return parsedUrl.href;
  } catch {
    return '';
  }
};

export const readBrowserStorage = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeBrowserStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};
