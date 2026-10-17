# Säg nej! – Webbapplikation

## Beskrivning

Säg nej! är en webbapplikation som hjälper användaren att hitta roliga ursäkter för att säga nej.

Användaren klickar på knappen **"Ge mig en ursäkt"** och får en slumpmässig ursäkt från ett externt API.

Applikationen har även en historik där tidigare genererade ursäkter visas.

## Länkar

- **Publicerad webbplats:** https://ellencodeab.github.io/sag-nej/
- **GitHub-repository:** https://github.com/ellencodeab/sag-nej

## Tekniker

Projektet är byggt med:

- HTML
- JavaScript och JavaScript-moduler
- Sass (SCSS)
- Vite
- No as a Service (NaaS) API
- Git och GitHub
- GitHub Actions och GitHub Pages

## Funktioner

- Hämta en ny ursäkt genom att klicka på en knapp.
- Visa ursäkten direkt på sidan.
- Spara och visa tidigare ursäkter i en historik under samma besök.
- Anpassad layout för olika skärmstorlekar.
- Visa ett meddelande om något går fel vid hämtning från API:et.

## Starta projektet lokalt

1. Klona repositoryt från GitHub.
2. Öppna projektmappen i en terminal.
3. Installera beroenden:

```bash
npm install
```

4. Starta utvecklingsservern:

```bash
npm run dev
```

5. Öppna den lokala adress som visas i terminalen.

## Arbetsprocess

Jag började med att skapa ett Vite-projekt och byggde sedan sidans struktur med HTML och JavaScript.

Därefter kopplade jag applikationen till No as a Service API för att hämta ursäkter. Jag lade också till en egen funktion som visar tidigare ursäkter i en historik.

Jag använde Sass för att skapa sidans design och anpassade layouten för olika skärmstorlekar.

Projektet versionshanteras med Git och GitHub. Webbplatsen byggs och publiceras via GitHub Actions och GitHub Pages.

## Individuellt arbete

Uppgiften var ursprungligen ett grupparbete, men jag har genomfört projektet individuellt med tillstånd från utbildningsledaren Hossein.

Därför har jag ansvarat för planering, programmering, testning och dokumentation själv.

## Reflektion

Under arbetet har jag fått öva på att skapa ett projekt med Vite, använda JavaScript för att hämta data från ett API och utveckla en egen funktion med historik.

Jag har också lärt mig mer om Sass, GitHub och hur man publicerar en webbapplikation automatiskt med GitHub Actions.

En utmaning var att konfigurera publiceringen på GitHub Pages. Genom att felsöka och testa kunde jag få webbplatsen att fungera.

## AI-stöd

Jag har använt ChatGPT som stöd för att förstå uppgiftsinstruktionerna, få förklaringar av HTML, CSS, JavaScript, Vite och GitHub samt för att felsöka problem under utvecklingen. Jag har själv genomfört och testat projektet.
