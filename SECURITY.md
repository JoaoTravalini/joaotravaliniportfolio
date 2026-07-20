# Security Notes

This portfolio is a static React/Vite frontend. It does not contain a backend,
authentication flow, database, file upload, or private server-side secrets.

## Environment Variables

Only `VITE_APP_*` variables are exposed to the client bundle. Values with this
prefix must be treated as public. Do not place private API keys, passwords,
JWT secrets, database URLs, or administrative credentials in frontend variables.

## Contact Form

The contact form uses EmailJS from the browser. Client-side validation,
length limits, a honeypot field, and a short submit cooldown are implemented for
abuse reduction and user experience. EmailJS/domain restrictions and abuse
limits must also be configured in the EmailJS dashboard.

## Deployment Headers

The project includes `public/_headers` for static hosts that support that file.
The CSP is intentionally configured as an HTTP header instead of an HTML meta
tag so the local Vite dev server and dynamic module loading remain reliable.
If the deployment platform does not read `_headers`, configure equivalent
security headers manually:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options or CSP `frame-ancestors`
- Referrer-Policy
- Permissions-Policy
- Cross-Origin-Opener-Policy
- Cross-Origin-Resource-Policy

## Residual Risk

HTTPS, DNS security, branch protection, deployment permissions, monitoring,
secret rotation, and provider-side restrictions cannot be guaranteed by this
frontend repository alone.
