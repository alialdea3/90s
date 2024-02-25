import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext): Promise<any> => {
    const page = new URL(req.url).searchParams.get("page") || "1";
    const response = await fetch(
      `https://swapi.dev/api/starships?page=${page}`,
    );
    if (response.status !== 200) {
      return ctx.renderNotFound();
    }
    const data = await response.json();

    return ctx.render({ data: data, page: Number(page) });
  },
};

const Page = (props: PageProps) => {
  const { data, page } = props.data;
  return (
    <div>
      <a href="/">Home</a>
      <h3>Starships data</h3>
      <table>
        <tr style="background: gray;">
          <th>Name</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Price (credits)</th>
        </tr>
        {data.results.map((st) => {
          return (
            <tr>
              <td>
                <a href="/">{st.name}</a>
              </td>
              <td>{st.model}</td>
              <td>{st.manufacturer}</td>
              <td>{st.cost_in_credits}</td>
            </tr>
          );
        })}
      </table>
      {data.previous !== null && (
        <a href={`/swapi/starships?page=${page - 1}`}>Previous</a>
      )}
      <form action="/swapi/starships">
        <input type="text" name="page" />
        <button type="submit">Go to page</button>
      </form>
      {data.next !== null && (
        <a href={`/swapi/starships?page=${page + 1}`}>Next</a>
      )}
    </div>
  );
};

export default Page;
