import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreatingNewUser,
  startDeleteUser,
  startLoadingUsers,
  startUpdateUser,
} from "../../store/users/thunks";

export const UserCrudPage2 = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const inputID = useRef();

  const onResetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
  };

  const updateUser = (userID) => {
    inputID.id = userID;
    const { name, username, email, phone } = event.target.dataset;

    setName(name);
    setUsername(username);
    setEmail(email);
    setPhone(phone);
  };

  const submitForm = (id) => {
    event.preventDefault();

    if (inputID.id === undefined) {
      let user = {
        name,
        username,
        email,
        phone,
      };

      dispatch(startCreatingNewUser(user));
      onResetForm();
    } else {
      let user = {
        name,
        username,
        email,
        phone,
      };
      dispatch(startUpdateUser(user, inputID.id));
      onResetForm();
    }
  };

  const deleteUser = (id) => {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${id}?`);

    if (isDelete) {
      dispatch(startDeleteUser(id));
    }
  };

  useEffect(() => {
    dispatch(startLoadingUsers());
  }, []);

  const { users } = useSelector((state) => state.users);

  return (
    <>
      <form className="crud-form" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input type="submit" className="btn-submit" value="Enviar" />
        <input type="hidden" name="id" ref={inputID} />
      </form>
      <article className="article-informacion">
        <h2 className="titulo2">Ver informacion</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Username</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>Funciones</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button
                      data-name={user.name}
                      data-username={user.username}
                      data-email={user.email}
                      data-phone={user.phone}
                      onClick={() => updateUser(user.id)}
                    >
                      Editar
                    </button>
                    <button onClick={() => deleteUser(user.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </>
  );
};
