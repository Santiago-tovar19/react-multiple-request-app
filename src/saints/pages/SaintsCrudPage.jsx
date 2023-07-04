import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreatingNewSaint,
  startDeleteSaint,
  startLoadingSaints,
  startUpdateSaint,
} from "../../store/saints/thunks";
import { useFormikContext } from "formik";

export const SaintsCrudPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [constelacion, setConstelacion] = useState("");

  const inputID = useRef();

  const updateSaint = (saintID) => {
    inputID.id = saintID;
    const { nombre, constelacion } = event.target.dataset;

    setName(nombre);
    setConstelacion(constelacion);
  };

  const submitForm = (id) => {
    event.preventDefault();

    if (inputID.id === undefined) {
      let saint = {
        nombre: name,
        constelacion,
      };

      dispatch(startCreatingNewSaint(saint));
      setName("");
      setConstelacion("");
    } else {
      let saint = {
        nombre: name,
        constelacion,
      };
      dispatch(startUpdateSaint(saint, inputID.id));
      setName("");
      setConstelacion("");
    }
  };

  const deleteSaint = (id) => {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${id}?`);

    if (isDelete) {
      dispatch(startDeleteSaint(id));
    }
  };

  useEffect(() => {
    dispatch(startLoadingSaints());
  }, []);

  const { saints } = useSelector((state) => state.saints);

  return (
    <>
      <form className="crud-form" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="constelacion"
          name="constelacion"
          value={constelacion}
          onChange={(e) => setConstelacion(e.target.value)}
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
              <th>constelacion</th>

              <th>Funciones</th>
            </tr>
          </thead>
          <tbody>
            {saints.map((saint) => {
              return (
                <tr key={saint.id}>
                  <td>{saint.nombre}</td>
                  <td>{saint.constelacion}</td>

                  <td>
                    <button
                      data-nombre={saint.nombre}
                      data-constelacion={saint.constelacion}
                      onClick={() => updateSaint(saint.id)}
                    >
                      Editar
                    </button>
                    <button onClick={() => deleteSaint(saint.id)}>
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
