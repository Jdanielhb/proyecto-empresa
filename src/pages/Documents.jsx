function Documents() {
    return (
      <div className="p-6 bg-corporativo-blanco text-corporativo-verde min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-corporativo-naranja">Documentación y Formatos</h1>
  
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-white">
            <thead className="bg-corporativo-verde text-white">
              <tr>
                <th>Nombre del Formato</th>
                <th>Descargar PDF</th>
                <th>Descargar Word</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Solicitud de Afiliación</td>
                <td><a className="btn btn-sm btn-outline btn-success">PDF</a></td>
                <td><a className="btn btn-sm btn-outline btn-warning">Word</a></td>
              </tr>
              <tr>
                <td>Actualización de Datos</td>
                <td><a className="btn btn-sm btn-outline btn-success">PDF</a></td>
                <td><a className="btn btn-sm btn-outline btn-warning">Word</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Documents;
  