import { useDispatch, useSelector } from "react-redux";
import { startDeleteUser, startLoadingUsers } from "../../store/users/thunks";
import { Formik, useFormikContext } from "formik";
import { useEffect, useRef } from "react";

export const MyIneerComponents = () => {
  const dispatch = useDispatch();

  const { values, handleChange, setValues } = useFormikContext();

  const inputID = useRef();

  const deleteUser = (id) => {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${id}?`);

    if (isDelete) {
      console.log(id);
      dispatch(startDeleteUser(id));
    }
  };
  console.log(values.name);
  useEffect(() => {
    dispatch(startLoadingUsers());
  }, []);

  const { users } = useSelector((state) => state.users);

  const updateUser = (userID) => {
    inputID.id = userID;

    console.log(values);

    const { name, username, email, phone } = event.target.dataset;

    setValues({
      name: "valorNuevo",
      username: username,
      email: email,
      phone: phone,
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="nombre"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={values.phone}
        onChange={handleChange}
      />
      <br />
      <input type="submit" className="btn-submit" value="Enviar" />
      <input type="hidden" name="id" ref={inputID} />
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
                      data-id={user.id}
                      // onClick={() => updateUser(user.id)}
                      onClick={() => {
                        // inputValueRef.current.click();
                        updateUser(user.id);
                      }}
                    >
                      Editar
                    </button>
                    <button type="button" onClick={() => deleteUser(user.id)}>
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
