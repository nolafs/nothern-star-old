import { MetadataRoute } from 'next'


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: process.env.NEXT_STIE_NAME || 'Norther Star',
    short_name: 'N-S-G',
    description: 'Northern Star Game',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        "src": "/android-chrome-114x114.png",
        "sizes": "114x114",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      },
      {
        "src": "maskable_icon_x192.png",
        "sizes": "196x196",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "maskable_icon_x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  }
}
