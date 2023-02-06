import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import pokeApi from '../../api/pokeApi';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout tittle='Algún pokemón'>
            <h1>{ pokemon.name }</h1>
        </Layout>
    )
}

// Páginas dinámicas
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}`);
    
    return {
        paths: pokemons151.map( id => ({
            params: {id}
        })),
        /*
        paths: [
            {
                params: {
                    id: '1'    
                }
            }
        ],
        */
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { id } = params as { id: string };

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    console.log(data);

    return {
        props: {
            pokemon: data
        }
    }
  
}

export default PokemonPage;
