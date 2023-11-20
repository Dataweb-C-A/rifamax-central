import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
declare const __dirname: string;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, 'src/components'))
      },
      {
        find: '@layout',
        replacement: path.resolve(path.join(__dirname, 'src/layout'))
      },
      {
        find: '@hooks',
        replacement: path.resolve(path.join(__dirname, 'src/hooks'))
      },
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname, 'src/assets'))
      },
      {
        find: '@public',
        replacement: path.resolve(path.join(__dirname, 'public'))
      },
      {
        find: '@helpers',
        replacement: path.resolve(path.join(__dirname, 'src/helpers'))
      },
      {
        find: '@50/50',
        replacement: path.resolve(path.join(__dirname, 'src/modules/50-50'))
      },
      {
        find: '@x100',
        replacement: path.resolve(path.join(__dirname, 'src/modules/x100'))
      },
      {
        find: '@rifamax',
        replacement: path.resolve(path.join(__dirname, 'src/modules/rifamax'))
      },
      {
        find: '@modules',
        replacement: path.resolve(path.join(__dirname, 'src/modules'))
      },
      {
        find: '@reducers',
        replacement: path.resolve(path.join(__dirname, 'src/reducers'))
      }
    ]
  }
})
