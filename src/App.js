
import { obtenerListado, obtenerQR, obtenerToken } from './Api/Api';
import './App.css';
import Card from './Components/Card/Card';
import { useQuery, useMutation } from 'react-query';

function App() {



  const listadoQR = useQuery({
    queryKey: ['listadoKey'],
    queryFn: () => obtenerListado()
  })


  console.log("listado areas", listadoQR);

  return (
    <div className="App">
      <Card />
      <Card />
    </div>
  );
}

export default App;
