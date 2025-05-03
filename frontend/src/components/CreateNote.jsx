import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateNote() {
  const [state, setState] = useState({
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: "",
  });

  const { id } = useParams(); // Extrae el ID de la URL (ej: /notes/123 → id = "123")

  useEffect(() => {
    const fetchData = async () => {
      // Obtener usuarios
      const resUsers = await axios.get("http://localhost:4000/api/users");
      setState((prev) => ({
        ...prev,
        users: resUsers.data.map((user) => user.username),
        userSelected: resUsers.data[0]?.username || "",
      }));

      // Si hay un ID en la URL, cargar la nota
      if (id) {
        const resNote = await axios.get(
          `http://localhost:4000/api/notes/${id}`
        );
        setState((prev) => ({
          ...prev,
          title: resNote.data.title,
          content: resNote.data.content,
          date: new Date(resNote.data.date),
          userSelected: resNote.data.author,
          editing: true,
          _id: id,
        }));
      }
    };

    fetchData();
  }, [id]); // Se ejecuta cada vez que `id` cambia

  const onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: state.title,
      content: state.content,
      date: state.date,
      author: state.userSelected,
    };

    if (state.editing) {
      await axios.put(`http://localhost:4000/api/notes/${state._id}`, newNote);
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }

    window.location.href = "/notas";
  };

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDate = (date) => {
    setState({ ...state, date });
  };

  return (

    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>{state.editing ? "Edit Note" : "Create a Note"}</h4>

        <div className="form-group">
          <select
            className="form-control"
            name="userSelected"
            onChange={onInputChange}
            value={state.userSelected}
          >
            {state.users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            onChange={onInputChange}
            value={state.title}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="content"
            className="form-control"
            placeholder="Content"
            onChange={onInputChange}
            value={state.content}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <DatePicker
            className="form-control"
            selected={state.date}
            onChange={onChangeDate}
          />
        </div>

        <form onSubmit={onSubmit}>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
       
  );
}

export default CreateNote;
