
import { obtenerQR, obtenerToken } from './Api/Api';
import './App.css';
import Card from './Components/Card/Card';
import { useQuery, useMutation } from 'react-query';

function App() {


  // const datoken = {
  //   "Username": "Test1",
  //   "Password": "testing.2022"
  // }
  // const token = useQuery({
  //   queryKey: ['tok'],
  //   queryFn: () => obtenerToken(datoken)

  // })



  const datoQR = useQuery({
    queryKey: ['qrtoken'],
    queryFn: () => obtenerQR()
  })



  return (
    <div className="App">
      <Card />
      <Card />
    </div>
  );
}

export default App;
