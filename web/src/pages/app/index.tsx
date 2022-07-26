import { getAccessToken, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps= withPageAuthRequired({
  getServerSideProps: async ({ req, res}) => {
    console.log(getAccessToken(req, res))

    return {
      props: {}
    }
  }
});