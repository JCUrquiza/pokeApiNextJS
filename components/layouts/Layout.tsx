import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element,
    tittle?: string
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin; 

export const Layout: FC<Props> = ({ children, tittle }) => {



    return (
        <>
            <Head>
                <title>{ tittle || 'PokemonApp' }</title>
                <meta name="author" content="JC"></meta>
                <meta name="description" content="Información sobre pokemón"></meta>
                <meta name="keywords" content="pokemón, pokedex"></meta>

                <meta property="og:title" content={`Información sobre ${ tittle }`} />
                <meta property="og:description" content={`Esta página es sobre ${ tittle }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
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
