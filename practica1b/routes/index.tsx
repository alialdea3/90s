import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Data = {
  frase: string;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const response = await Axios.get<string>(
        "https://learnyourlesson.deno.dev/"
      );
      const frase = response.data;
      return ctx.render({ frase });
    } catch (e) {
      return "No va";
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const { frase } = props.data;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "blue",
        textDecoration: "underline",
      }}
    >
      <div
        style={{
          backgroundImage:
            'url("https://imgs.search.brave.com/mmwUwqLztRSrIVKptl3P_bo-A3xmbg24OoVLYotWAu0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzYw/MTQ0ODU2NmRmYmUx/MDAxOGUwMGM1ZD93/aWR0aD03MDA")',
          backgroundRepeat: "repeat-y",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          padding: "2vw", // Cambio de '20px' a '2vw'
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <style>
          {`
            @keyframes parpadeo {
              0% {
                border-color: #00ff00;
              }
              50% {
                border-color: #ff0000;
              }
              100% {
                border-color: #ff00ff;
              }
            }

            @keyframes parpadeoMasivoB {
              0% {
                border-color: purple;
              }
              100% {
                border-color: yellow;
              }
            }
            @keyframes parpadeoMasivoC {
              0% {
                background-color: black;
              }
              100% {
                background-color: white;
              }
            }

            @keyframes parpadeoMasivo {
              0% {
                color: white;
              }
              100% {
                color: black;
              }
            }

            @keyframes rebote {
              0% {
                transform: translateX(-1vw); // Cambio de '-20px' a '-1vw'
              }
              100% {
                transform: translateX(1vw); // Cambio de '+20px' a '1vw'
              }
            }

            @keyframes giroEpico {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes giroEpicoParpadeo {
              0% {
                transform: rotate(0deg);
                border-color: white;
              }
              100% {
                transform: rotate(360deg);
                border-color: black;
              }
            }

            @keyframes nomepillas {
              0% {
                transform: translate(0, 0);
              }
              10% {
                transform: translate(+50vw, -35vw); // Cambio de '20vw' a '1vw'
              }
              20% {
                transform: translate(22vw, -14vh); // Cambio de '40vw' a '2vw' y '-20vh' a '-1vh'
              }
              30% {
                transform: translate(0vw, -23vh); // Cambio de '60vw' a '3vw' y '-40vh' a '-2vh'
              }
              40% {
                transform: translate(43vw, -31vh); // Cambio de '80vw' a '4vw' y '-60vh' a '-3vh'
              }
              50% {
                transform: translate(32vw, -23vh); // Cambio de '60vw' a '3vw' y '-40vh' a '-2vh'
              }
              60% {
                transform: translate(2vw, -10vh); // Cambio de '40vw' a '2vw' y '-20vh' a '-1vh'
              }
              70% {
                transform: translate(19vw, 0); // Cambio de '20vw' a '1vw'
              }
              80% {
                transform: translate(0vw, -19vh); // Cambio de '0vw' a '0vw' y '-20vh' a '-1vh'
              }
              90% {
                transform: translate(15vw, -2vh); // Cambio de '20vw' a '1vw' y '-40vh' a '-2vh'
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @keyframes DVD {
              0% {
                transform: translate(0, 0);
              }
              25% {
                transform: translate(90vw, 40vw);
              }
              50% {
                transform: translate(90vw, 0);
              }
              75% {
                transform: translate(0, 40vw);
              }
              100% {
                transform: translate(0, 0);
              }
            }
          `}
        </style>

        <h1
          style={{
            display: "inline-block",
            border: "3px solid #ff00ff",
            borderStyle: "dotted dashed solid double",
            borderWidth: "thick",
            animation: "parpadeo 0.5s infinite",
            position: "absolute",
            bottom: "42vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "1vw", // Ajuste en base a las dimensiones de tu pantalla
            borderRadius: "5px",
            padding: "1vw", // Cambio de '5px' a '1vw'
            background: "orange",
          }}
        >
          <a
            style={{
              animation: "parpadeoMasivo 0.2s infinite",
            }}
          >
            Frase de millonario
          </a>
        </h1>

        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fspeech-bubble-png-download-2000.png&f=1&nofb=1&ipt=91b4e659484b5f621f91849ccd96a050723becd19f41eaf7758483ff5d79ee5f&ipo=images"
          style={{
            width: "40vw", // Cambio de '300px' a '15vw'
            height: "15vw", // Cambio de '300px' a '15vw'
            position: "absolute",
            bottom: "25vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "30vw", // Ajuste en base a las dimensiones de tu pantalla
          }}
        />

        <p
          id="frase"
          style={{
            fontSize: "1.5vw", // Cambio de '18px' a '1.5vw'
            fontStyle: "italic",
            border: "3px solid #ff00ff",
            background: "pink",
            animation: "rebote 0.5s infinite alternate",
            position: "absolute",
            bottom: "30vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "37.5vw", // Ajuste en base a las dimensiones de tu pantalla
            padding: "1vw", // Cambio de '5px' a '1vw'
          }}
        >
          {frase}
        </p>

        <img
          src="https://avatars.githubusercontent.com/u/55835767?v=4"
          style={{
            width: "20vw", // Cambio de '200px' a '10vw'
            height: "20vw", // Cambio de '200px' a '10vw'
            position: "absolute",
            bottom: "33vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "75vw", // Ajuste en base a las dimensiones de tu pantalla
            animation: "giroEpicoParpadeo 2s infinite ",
            border: "3px solid ",
            borderStyle: "dotted",
            borderWidth: "thick",
            borderRadius: "50%",
          }}
        />

        <button
          id="btn1"
          style={{
            padding: "1vw 2vw", // Cambio de '10px 20px' a '1vw 2vw'
            backgroundColor: "red",
            border: "none",
            color: "white",
            position: "absolute",
            bottom: "1vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "2vw", // Ajuste en base a las dimensiones de tu pantalla
            animation: "nomepillas 2s infinite",
          }}
        >
          NO
        </button>
        <button
          id="btn2"
          style={{
            padding: "1vw 2vw", // Cambio de '10px 20px' a '1vw 2vw'
            backgroundColor: "gray",
            border: "none",
            color: "white",
            animation: "parpadeoMasivo 0.1s infinite, parpadeoMasivoC 0.1s infinite",
            position: "absolute",
            bottom: "1vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "13vw", // Ajuste en base a las dimensiones de tu pantalla
          }}
        >
          SIIISII
        </button>
        <div
          style={{
            position: "absolute",
            top: "40vw", // Ajuste en base a las dimensiones de tu pantalla
            left: "2.25vw", // Ajuste en base a las dimensiones de tu pantalla
            fontSize: "2.25vw", // Cambio de '36px' a '2.25vw'
            backgroundColor: "white",
            animation: "parpadeoMasivoC 0.1s infinite",
          }}
        >
          Me vas a poner un 10?
        </div>

        <img
          src="https://c.tenor.com/fRi9c_ejvZkAAAAC/spinning-sheep-minecraft-haha-sheep-minecraft.gif"
          style={{
            width: "13vw", // Ancho de la imagen
            height: "13vw", // Altura de la imagen
            position: "absolute", // Posicionamiento absoluto para controlar la ubicación
            top: "35vw", // Ajusta la posición verticalmente
            left: "40vw", // Ajusta la posición horizontalmente
            border: "3px solid #ff00ff",
            borderStyle: "dotted",
            borderWidth: "thick",
            borderRadius: "50%",
            animation: "parpadeoMasivoB 0.1s infinite",
          }}
        />
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDl0aGVvcHgzOTQ2dXFscDVpMHB3OXNwcXlvZGJtMjJ6bnFkbG13bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/13kVKEbRmZ7AEE/giphy.gif"
          style={{
            width: "7.5vw", // Ancho de la imagen
            height: "7.5vw", // Altura de la imagen
            animation: "DVD 10s infinite",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
