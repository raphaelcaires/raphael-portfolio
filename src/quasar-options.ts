import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/svg-mdi-v7'
import { Loading, Notify, Dialog, QSpinnerDots } from 'quasar'
import type { QuasarPluginOptions, QSpinnerDotsProps } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'
import '@/assets/styles/quasar-custom.sass'

export const quasarOptions: Partial<QuasarPluginOptions> = {
  plugins: { Loading, Notify, Dialog },
  config: {
    loading: {
      spinner: QSpinnerDots as QSpinnerDotsProps,
      spinnerColor: 'primary',
      spinnerSize: 140,
      backgroundColor: 'white',
      messageColor: 'primary',
      message: 'Loading...',
    },
    notify: {
      position: 'top',
      timeout: 2500,
      textColor: 'white',
      actions: [{ icon: 'close', color: 'white' }],
    },
  },
  lang: quasarLang,
  iconSet: quasarIconSet,
}

export default quasarOptions
