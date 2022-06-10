import classNames from "classnames";
import { motion } from "framer-motion";
import getTypeColor from "../../lib/get-type-color";
import { PokemonItem } from "../../types/pokemon";
import Tag from "../tag";
import styles from "./figure.module.css";

type Props = {
  className?: string;
  handleCatchMe: (pokemon: any) => void;
  pokemon: PokemonItem;
  dataMyCatchPokemon: PokemonItem;
  router: any;
};

const Figure = ({
  className,
  pokemon,
  handleCatchMe,
  dataMyCatchPokemon,
  router,
}: Props) => (
  <figure className={classNames(styles.figure, className)}>
    <motion.img
      className={styles.sprite}
      src={pokemon.sprites.front_default}
      alt=""
      layoutId={`pic-${pokemon.id}`}
    />
    {router.query.fromPage === "/" ? (
      dataMyCatchPokemon?.map((data) => data.id).includes(pokemon.id) ? (
        <p>
          <b>Already catched!</b>
        </p>
      ) : (
        <button
          style={{
            width: "100%",
            backgroundColor: "#ff9999",
            border: "none",
            padding: 8,
            borderRadius: 8,
            color: "#b36b6b",
            cursor: "pointer",
          }}
          onClick={() => handleCatchMe(pokemon)}
        >
          Catch Me
        </button>
      )
    ) : (
      <button
        style={{
          width: "100%",
          backgroundColor: "#ff9999",
          border: "none",
          padding: 8,
          borderRadius: 8,
          color: "#b36b6b",
          cursor: "pointer",
        }}
        onClick={() => handleCatchMe(pokemon)}
      >
        Release Pokemon
      </button>
    )}
    <figcaption>
      {pokemon.types.map(({ type }) => (
        <Tag
          key={type.name}
          style={{ backgroundColor: getTypeColor(type.name), color: "#fff" }}
        >
          {type.name}
        </Tag>
      ))}
    </figcaption>
  </figure>
);

export default Figure;
