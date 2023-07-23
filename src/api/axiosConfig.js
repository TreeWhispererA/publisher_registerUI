//import axios
import axios from "axios";

export default axios.create({
    baseURL : "http://localhsot:8000/publisher",
});

// axios.create() help us to create some default headers , content and also some properties that we will use to call the backend side as well. :)
