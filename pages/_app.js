import "./../src/styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { AuthProvider, ProtectRoute } from "../src/contexts/auth";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ProtectRoute>
        <Head>
          <title>Hệ thống quản lý truy xuất nguồn gốc nông sản</title>
          <link rel="icon" sizes="192x192" href="/ntm-logo.png" />
        </Head>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  )
}


export default MyApp