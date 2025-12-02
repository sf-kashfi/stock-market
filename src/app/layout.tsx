// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@/types/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

// Font Imports
import localFont from "next/font/local";

export const metadata = {
  title: 'isn: وبملت',
  description:
    'Develop next-level web apps for instrument information.'
}

const vazirmatn = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-vazirmatn",
});

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'rtl'
  const language = "fa"

  return (
    <html lang={language} id='__next' dir={direction}>
      <body className={`flex is-full min-bs-full flex-auto flex-col ${vazirmatn.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout
