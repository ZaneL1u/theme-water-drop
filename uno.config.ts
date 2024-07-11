import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-#55aff8 text-white cursor-pointer !outline-none hover:bg-#4b97f7 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    // 使用普惠体
    presetWebFonts({
      provider: 'none',
      fonts: { ph: 'AlibabaPuHuiTi' },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
})
