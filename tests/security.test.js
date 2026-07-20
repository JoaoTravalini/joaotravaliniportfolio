import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  CONTACT_FORM_LIMITS,
  getSafeExternalUrl,
  normalizeContactForm,
  validateContactForm,
} from '../src/utils/security.js';

test('normalizes contact form input before external submission', () => {
  const normalized = normalizeContactForm({
    email: ' USER@Example.COM ',
    message: 'Hello\u0000\r\nworld',
    name: '  Joao   Travalini  ',
    website: '',
  });

  assert.equal(normalized.email, 'user@example.com');
  assert.equal(normalized.message, 'Hello\nworld');
  assert.equal(normalized.name, 'Joao Travalini');
});

test('rejects invalid or oversized contact form payloads', () => {
  const result = validateContactForm({
    email: 'invalid-email',
    message: 'short',
    name: 'A',
    website: '',
  });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, true);
  assert.equal(result.errors.message, true);
  assert.equal(result.errors.name, true);
});

test('detects honeypot submissions without treating user fields as valid', () => {
  const result = validateContactForm({
    email: 'joao@example.com',
    message: 'This is a valid message for testing.',
    name: 'Joao',
    website: 'https://spam.example',
  });

  assert.equal(result.isBot, true);
  assert.equal(result.isValid, true);
});

test('limits contact message length', () => {
  const result = validateContactForm({
    email: 'joao@example.com',
    message: 'a'.repeat(CONTACT_FORM_LIMITS.messageMax + 50),
    name: 'Joao',
    website: '',
  });

  assert.equal(result.normalized.message.length, CONTACT_FORM_LIMITS.messageMax);
  assert.equal(result.isValid, true);
});

test('allows only approved https external links', () => {
  assert.equal(getSafeExternalUrl('https://github.com/JoaoTravalini').startsWith('https://github.com/'), true);
  assert.equal(getSafeExternalUrl('https://drive.google.com/file/d/example/view').startsWith('https://drive.google.com/'), true);
  assert.equal(getSafeExternalUrl('javascript:alert(1)'), '');
  assert.equal(getSafeExternalUrl('http://github.com/JoaoTravalini'), '');
  assert.equal(getSafeExternalUrl('https://evil.example/phishing'), '');
});
