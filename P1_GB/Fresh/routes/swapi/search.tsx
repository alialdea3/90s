import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

const Page = () => {
  return (
    <div>
      <a href="/">Home</a>
      <form action="/swapi/people">
        <text>Nombre:</text>
        <input type="text" name="name"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Page;
