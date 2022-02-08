import styles from './index.module.css';

import type { Restaurant } from '@restaurant-workspace/shared-types';

import { request } from 'graphql-request';
import useSWR from 'swr';
const fetcher = (query) => {
  console.log('what is query', query);
  return request('http://localhost:4000/graphql', query);
};

function ListItem({ listItem }: { listItem: Restaurant }) {
  return (
    <li>
      <h1>{listItem.name}</h1>
      <p>{listItem.neighborhood}</p>
      <p>{listItem.address}</p>
      <p>{listItem.cuisine_type}</p>
    </li>
  );
}

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const { data, error } = useSWR(
    `{
      restaurants {
        id
        name
      }
    }`,
    fetcher
  );
  if (error) return <div>failed to load</div>;

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="commands" className="rounded shadow">
            <h2>Resto List</h2>
            <p>Sample data:</p>
            <ul>
              {data?.restaurants.map((item) => (
                <ListItem key={item.id} listItem={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

// export async function getServerSideProps(context) {
//   let restaurants = [];

//   const res = await fetch(`http://localhost:4000/api/restaurants`);

//   restaurants = await res.json();

//   return {
//     props: {
//       restaurants,
//     },
//   };
// }
