import './App.css';
import pokemons from './data';



function App() {

  const Pokemon = () => {
    return pokemons.map((poke) => {
      const { name, image, id, averageWeight, type } = poke;
      return (
        <article className="Pokemon" key={id}>
          <h1>{name}</h1>
          <img src={image} alt='valor'></img>
          <article>
            Peso: {averageWeight.value} {averageWeight.measurementUnit} Tipo: {type}
          </article>
        </article>
      )
    })
  }

  return (
    <main>
      <header className="title">
        <h1>Pokedex</h1>
      </header>
      <section className="Pokedex">
        <Pokemon />
      </section>
    </main>

  );
}

export default App;
