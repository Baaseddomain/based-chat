# Based Chat

Based Chat is a Web3 Social frontend website based on the [Iggy Social](https://iggy.social) template. It uses [Orbis SDK](https://useorbis.com) and [Ceramic Network](https://ceramic.network/) in the background. For usernames it uses [Punk Domains](https://punk.domains/).

## .env

Create a `.env` file from `.env.example`.

> Make sure to also enter these vars in your hosting settings!

## Hosting

We recommend to use Netlify for hosting the site. Netlify allows you to easily deploy the site from this repo (or from a fork of this repository).

Make sure to use the the `npm run generate` command instead of `npm run build` for build instructions on Netlify.

If you want to use optional features such as GIFs and image upload, make sure to enter proper environment variables (see `.env.example`).

Make sure to also select the proper serverless functions services in your environment variables, for example:

```bash
FILE_UPLOAD_SERVICE=netlify
LINK_PREVIEW_SERVICE=netlify
```

You can also set these in the Nuxt config file (`nuxt.config.ts`).

## GIFs (Tenor)

If you want to have GIF search implemented, create your own Tenor API Key on Google Cloud Console. Follow the instructions here: https://developers.google.com/tenor/guides/quickstart. 

Then enter the key in environment variables (`TENOR_KEY`).

## Image upload (Spheron/IPFS)

To support image uploads on IPFS please create a key/token on Spheron Storage: https://app.spheron.network/#/storage 

Then add this key (and your bucket ID/name) to your environment variables:

```bash
SPHERON_BUCKET_NAME=
SPHERON_STORAGE_TOKEN=
```

Image uploads via Spheron work only if you have Netlify/Vercel background functions enabled (see `netlify/functions/imageUploader.js`).

## Image upload fallback

It is recommended to use ImageKit as the fallback option, in case Spheron has technical issues.

For this to work, create an account at [ImageKit.io](https://imagekit.io/) and add these environment variables to your project:

```bash
IMAGEKIT_ENDPOINT=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
```

## Customize

- Project-specific settings in `nuxt.config.ts`
- CSS files in the `/public/css/` folder
- Favicon and cover/preview images in `/public/img/` folder

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Or run Netlify dev server on http://localhost:8888 (to get link previews):

```bash
netlify dev
```

## Production

Build the application for production:

```bash
npm run generate
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Testing

Orbis test group:

```bash
https://app.orbis.club/group/kjzl6cwe1jw145e1i1agcrjp9375sjpyyk7imu281koehrpve0pr46lvr5e9xco
```
