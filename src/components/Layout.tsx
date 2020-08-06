import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'

const defaultTitle = 'umeg.blog'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Layout({
  children,
  title = defaultTitle,
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            title
          )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Link href={'/'}>
            <a>
              <Typography variant="h6" style={{ color: '#f9f9f9' }}>
                umeg.blog
              </Typography>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth={'md'} style={{ marginTop: '16px' }}>
        <>{children}</>
      </Container>
    </>
  )
}
