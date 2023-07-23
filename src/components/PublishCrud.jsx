import { useState } from "react";
import api from '../api/axiosConfig';
// import PublishList components
import PublisherList from "./PublisherList";

const PublishCrud = ({ load, publishers}) => {
    // state definition
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [published , setPublished] = useState("");

    // being handlers
    const save = async(e) => {
        e.preventDefault();
        await api.post("/create" , {
            name : name,
            email : email,
            published : published
        });
        alert("Publisher Record Saved");
        setId("");
        setName("");
        setEmail("");
        setPublished("");
    }

    const editEmployee = async () => {
        setName(publishers.name);
        setEmail(publishers.email);
        setPublished(publishers.published);
        setId('publishers.id');
    }

    const deleteEmployee = async (id) => {
        await api.delete("/delete/" + id);
        alert("Publisher Details Deleted Successfully");
        load();
    }

    const update = async (e) =>{
        e.preventDefault();
        if (!id) return alert("Publisher Details No Found");
        await api.put("/update", {
                id: id,
                name: name,
                email: email,
                published: published,
        });
        alert("Publisher Details Updated");
        // reset state
        setId("");
        setName("");
        setEmail("");
        setPublished("");
        load();
        }

    return(
        <div className="">
            <form className="">
                <div className="">
                    <input 
                        type="text"
                        className=""
                        hidden
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <label>Name</label>
                    <input 
                        type="text"
                        className=""
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="">
                    <label>Email</label>
                    <input 
                        type="text"
                        className=""
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                </div>

                <div className="">
                    <div className="">
                        <label>Published</label>
                        <input 
                            type="test"
                            className=""
                            value={published}
                            onChange={e=>setPublished(e.target.value)}
                        />
                    </div>
                </div>

                <div className="">
                    <button className="" onClick={save}>Register</button>
                    <button className="" onClick={update}>Update</button>
                </div>
            </form>
            <PublisherList 
                publishers = {publishers}
                eidtEmployee = {editEmployee}
                deleteEmployee = {deleteEmployee}
            />
        </div>
    )
}

export default PublishCrud;