import '@/css/tailwind.css'
import '../styles/global.css'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps ,data}) {

  const [auth, setAuth] = useState(false)
 

  const router = useRouter()




  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const token = localStorage.getItem('authToken')
    if (!theme) {
      localStorage.setItem('theme', 'dark')
    }
    if (token) {
      setAuth(true)
      router.push('/admin/dashboard')
  
    } else {
      setAuth(false)
      localStorage.setItem('theme', 'dark')
    }

  
  },[])

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper auth={auth}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}


