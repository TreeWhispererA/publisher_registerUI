import "bootstrap/dist/css/bootstrap.css";
import api from "./api/axiosConfig";
import { useEffect , useState } from "react";
import PublishCrud from "./components/PublishCrud";
import "./App.css";

const App = () => {
  const [publishers, setPublishers] = useState([]);

 useEffect(()=>{
    (async ()=> await load())()
 },[])
   
  const load = async () => {
    const result = await api.get("/all");
    setPublishers(result.data);
  }
  
  return (
    <div>
      <h1 className="text-center">List Of Publishers</h1>
      <PublishCrud load={load} publishers={publishers}/>
    </div>
  )
}

export default App;