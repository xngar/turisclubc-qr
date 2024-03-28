import { obtenerListado, obtenerQR, obtenerToken } from "./Api/Api";
import "./App.css";
import Card from "./Components/Card/Card";
import { useQuery, useMutation } from "react-query";
import Logo from "./img/logo.png"

function App() {
  const listadoQR = useQuery({
    queryKey: ["listadoKey"],
    queryFn: () => obtenerListado(),
  });

  console.log("listado areas", listadoQR);

  if (listadoQR.isLoading) return <div className="loaderIntro"><img src={Logo} /></div>
  if (listadoQR.isError) return <div>Hubo un problema</div>
  return (
    <div className="App">
      {/* <h1>{listadoQR.data.titulo}</h1> */}


      {listadoQR.data.listaProgramadas.map((lista) => {
        return (
          <div className="grilla">
            <Card
              titulo={lista.Titulo}
              dia={lista.Dias}
              noche={lista.Noches}
              precio={lista.PrecioUsd}
              imagen={lista.Imagen}
              id={lista.Id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
