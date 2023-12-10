import { defineConfig,presetAttributify } from 'unocss'
import  presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  shortcuts:{
    'text-primary':'text-#327542'
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.5,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        uil: () => import('@iconify-json/uil/icons.json').then(i => i.default),
      },
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
