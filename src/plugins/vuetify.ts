import { createVuetify, ThemeDefinition } from 'vuetify'

export const mikuLightTheme: ThemeDefinition = {
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#3A88BB',
  },
}

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'mikuLightTheme',
    themes: {
      mikuLightTheme,
    },
  },
})
