import { MainContextProvider } from '@/contexts/main_context'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DL Importados',
  description: 'Atacado e varejo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {
          <>
            <MainContextProvider>
              {children}
            </MainContextProvider>
            <Toaster />
          </>
        }
      </body>
    </html>
  )
}
