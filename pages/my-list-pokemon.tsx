import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Footer from "../components/footer";
import Grid from "../components/grid";
import SearchField from "../components/search-field";

const Page = () => {
  const [stateMyListPokemon, setStateMyListPokemon] = useState<any>([]);
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
  const filteredPokemons = stateMyListPokemon?.filter(
    ({ formattedName }: { formattedName: string }) =>
      !search || formattedName.toLowerCase().includes(search.toLowerCase())
  );

  const fetchMyCatchPokemon = useCallback(() => {
    const res = localStorage.getItem("myListPokemon");
    const resParse = JSON.parse(res);
    console.log("@resParse", resParse);

    setStateMyListPokemon(
      resParse?.map((data: any) => ({
        formattedName: data.formattedName,
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        url: data.url,
      }))
    );
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
