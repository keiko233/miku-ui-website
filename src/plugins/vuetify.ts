import { createVuetify, ThemeDefinition } from 'vuetify'

export const mikuLightTheme: ThemeDefinition = {
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#39c5bb',
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
