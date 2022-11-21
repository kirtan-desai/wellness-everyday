import './globals.css'
import styles from './(yellow-bg)/yellowbg.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={true && "yellowbg"}>{children}</body>
    </html>
  )
}
