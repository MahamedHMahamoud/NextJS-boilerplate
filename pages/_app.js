import '@/styles/globals.css'
import Layout from '../components/general/Layout'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>     
  )
}
