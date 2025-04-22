function Services() {
    return (
      <div className="p-6 bg-corporativo-blanco min-h-screen text-corporativo-verde">
        <h1 className="text-3xl font-bold mb-6 text-corporativo-naranja">Afiliación y Servicios</h1>
  
        <div className="space-y-6">
          <div className="card shadow-lg bg-white">
            <div className="card-body">
              <h2 className="card-title">Requisitos de Afiliación</h2>
              <p>Información sobre cómo afiliarse a COONADOC.</p>
            </div>
          </div>
  
          <div className="card shadow-lg bg-white">
            <div className="card-body">
              <h2 className="card-title">Tipos de Crédito</h2>
              <p>Descripción de los créditos disponibles.</p>
            </div>
          </div>
  
          <div className="card shadow-lg bg-white">
            <div className="card-body">
              <h2 className="card-title">Seguros y Beneficios</h2>
              <p>Información sobre los beneficios ofrecidos.</p>
            </div>
          </div>
  
          <div className="card shadow-lg bg-white">
            <div className="card-body">
              <h2 className="card-title">Convenios</h2>
              <p>Empresas o entidades aliadas con la cooperativa.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  