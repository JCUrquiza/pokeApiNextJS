import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element,
    tittle?: string
}

export const Layout: FC<Props> = ({ children, tittle }) => {
    return (
        <>
            <Head>
                <title>{ tittle || 'PokemonApp' }</title>
                <meta name="author" content="JC"></meta>
                <meta name="description" content="Información sobre pokemón"></meta>
                <meta name="keywords" content="pokemón, pokedex"></meta>
            </Head>

            {/* Navbar */}
            <Navbar/>

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>

        </>
    )
}
