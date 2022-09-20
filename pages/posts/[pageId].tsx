import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query
}) => {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ error: 'method not allowed' }))
    res.end()
    return { props: {} }
  }

  const pageId = (query.pageId as string) || ''

  return {
    redirect: {
      permanent: true,
      destination: `/${pageId}`
    }
  }
}

export default () => null
