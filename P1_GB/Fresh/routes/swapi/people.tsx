import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext): Promise<any> => {
    const name = new URL(req.url).searchParams.get("name") || "";
    const response = await fetch(`https://swapi.dev/api/people?search=${name}`);
    if (response.status !== 200) ctx.renderNotFound();
    const data = await response.json();

    return ctx.render({ data: data, name: name });
  },
};

const Page = (props: PageProps) => {
  const { data, name } = props.data;
  return (
    <div>
      <a href="/">Home</a>
      <h3>Results for {name}</h3>
      <ul>
        {data.results.map((ch) => {
          return (
            <li>
              Name: {ch.name}, height: {ch.height}cm, weight:{" "}
              {ch.mass}kg, gender: {ch.gender}, birth day: {ch.birth_year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
