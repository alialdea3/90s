import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <h2>Home</h2>
      <div>
        <a href="/swapi/search">Search character</a>
      </div>
      <div>
        <a href="/swapi/starships">Starships data</a>
      </div>
    </div>
  );
}
