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


  const programasAgrupados = listadoQR.data?.listaProgramas?.reduce((acc, programa) => {
    const idDestino = programa.Destino;

    if (!acc[idDestino]) {
      acc[idDestino] = [];
    }
    acc[idDestino].push(programa);

    return acc;
  }, {});



  if (listadoQR.isLoading) return <div className="loaderIntro"><img src={Logo} /></div>
  if (listadoQR.isError) return <div>Hubo un problema</div>

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>{listadoQR.data.titulo}</h1>
      {Object.keys(programasAgrupados).map((idDestino, key) => (
        <div key={idDestino}>
          <h2 style={{ textAlign: "center" }}> {idDestino}</h2>
          {programasAgrupados[idDestino].map((programa, index) => (
            <div className="grilla" key={index}>
              <Card
                titulo={programa.Titulo}
                dia={programa.Dias}
                noche={programa.Noches}
                precio={formatter.format(programa.PrecioUsd).replace("$", "USD ").replace(",", ".")}
                precioTxt={programa.PrecioTxt}
                imagen={programa.Imagen}
                id={programa.Id}
                descripcion={programa.Incluye}

              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );



}

export default App;
