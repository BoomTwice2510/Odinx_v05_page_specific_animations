ODINX MOBILE RESPONSIVE PWA DEMO v6

Files:
- index.html: complete demo
- manifest.webmanifest: install metadata
- sw.js: offline shell cache
- icon-192.png / icon-512.png: PWA launcher icons
- apple-touch.png: iOS home-screen icon
- logo.png: app/login logo asset

Run locally:
1. Extract this ZIP.
2. In this folder run: python -m http.server 8000
3. Open http://localhost:8000 in Chrome.
4. To test mobile, use DevTools device emulation or open the local server from a phone on the same network.
5. On supported browsers use Install app / Add to Home Screen.

Service workers and PWA installation require localhost or HTTPS. Opening index.html directly as file:// will show the demo but cannot enable service-worker/offline installation.

This is a demo shell. Operational figures and workflows are simulated, not connected to a production backend.
