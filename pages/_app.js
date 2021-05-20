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

export default function App({ Component, pageProps }) {

  const [auth,setAuth] = useState(false)

 useEffect(()=>{
  const token = localStorage.getItem('authToken')
  if(token){
    setAuth(true)
  } else{
    setAuth(false)
  }
 })

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
