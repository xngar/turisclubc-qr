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

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });




  // const agrupados = Object.groupBy(listadoQR.data.listaProgramas, (id) => id.IdDestino);


  if (listadoQR.isLoading) return <div className="loaderIntro"><img src={Logo} /></div>
  if (listadoQR.isError) return <div>Hubo un problema</div>
  return (
    <div className="App">
      {/* <h1>{listadoQR.data.titulo}</h1> */}


      {listadoQR.data.listaProgramas?.map((lista) => {
        return (
          <div className="grilla">
            <Card
              titulo={lista.Titulo}
              dia={lista.Dias}
              noche={lista.Noches}
              precio={formatter.format(lista.PrecioUsd).replace("$", "USD ").replace(",", ".")}
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
