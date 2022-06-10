import { motion } from "framer-motion";
import { PokemonListItem } from "../../types/pokemon";
import Cell from "../cell";
import styles from "./grid.module.css";

type Props = {
  pokemons: PokemonListItem[];
  router: any;
};

const Grid = ({ pokemons, router }: Props) => {
  return (
    <motion.div className={styles.grid} layout>
      {pokemons?.length > 0
        ? pokemons.map((pokemon) => (
            <Cell key={pokemon.name} router={router} pokemon={pokemon} />
          ))
        : "No Pokémon found"}
    </motion.div>
  );
};

export default Grid;
