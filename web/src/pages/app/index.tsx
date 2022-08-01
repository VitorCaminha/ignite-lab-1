import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { withApollo } from "../../lib/withApollo";

import { useMeQuery } from "../../graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";

function Home({ data }) {
  const { data: me } = useMeQuery();

  return (
    <div className="text-violet-500">
      <h1>Hello World</h1>

      <pre>{JSON.stringify(data.products, null, 2)}</pre>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps= withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return getServerPageGetProducts({}, ctx);
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);