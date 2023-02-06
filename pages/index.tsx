import { Button } from '@nextui-org/react';
import { NextPage, GetStaticProps } from 'next';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons);
      
  return (
    <Layout tittle='Listado de pokemon´s'>
      <div>
        <h1>Hola Mundo</h1>

        <ul>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
        </ul>

        <Button color="gradient">
          Hola Mundo
        </Button>
      </div>
    </Layout>
  )
  
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  return {
    props: {
      pokemons: data.results
    }
  }

}

export default HomePage;
