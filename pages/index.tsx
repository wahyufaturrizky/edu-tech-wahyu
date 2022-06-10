import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Footer from "../components/footer";
import Grid from "../components/grid";
import SearchField from "../components/search-field";
import { getPokemons } from "../lib/pokemons";
import { PokemonListItem } from "../types/pokemon";

type Props = {
  pokemons: PokemonListItem[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pokemons = await getPokemons();

  return {
    props: { pokemons },
  };
};

const Page = ({ pokemons }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearchChange = useCallback(
    (value) => {
      router.replace({ hash: value });
      setSearch(value);
    },
    [router]
  );

  useEffect(() => {
    const hash = router.asPath.match(/#(.+)/)?.[1] ?? "";
    if (hash) setSearch(hash);
  }, [router]);

  const title = [search, "Pokédex"].filter(Boolean).join(" - ");
  const filteredPokemons = pokemons.filter(
    ({ formattedName }) =>
      !search || formattedName.toLowerCase().includes(search.toLowerCase())
  );

  const fetchMyCatchPokemon = useCallback(() => {
    const res = localStorage.getItem("myListPokemon");
    const resParse = JSON.parse(res);
  }, []);

  useEffect(() => {
    fetchMyCatchPokemon();
  }, [fetchMyCatchPokemon]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchField onChange={onSearchChange} value={search} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 24,
        }}
      >
        <Link href="/">
          <a>
            <h3>List of Pokemon</h3>
          </a>
        </Link>
        <Link href="/my-list-pokemon">
          <a>
            <h3>My List Pokemon</h3>
          </a>
        </Link>
      </div>
      <Grid router={router} pokemons={filteredPokemons} />

      <Footer />
    </div>
  );
};

export default Page;
