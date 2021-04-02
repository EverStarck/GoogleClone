import { fetcher } from "../services/fetchData";

const SearchResults = ({ q, data }) => {
  console.log(data);
  return <h1>{q}</h1>;
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  // query from the url
  const q = query.q;
  let data = await fetcher(q);

  // Pass data to the page via props
  return { props: { q, data } };
}

export default SearchResults;
