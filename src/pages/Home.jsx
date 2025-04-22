function Home() {
  return (
    <div className="p-4">
      {/* <h1>Bienvenido a COONADOC</h1> */}
      {/* Sección Quiénes Somos */}
      <div className="card bg-base-100 shadow-xl mb-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-base-200">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-[#228B22]">Quiénes Somos</h2>
          <div className="divider"></div>
          <p className="text-lg">
            Somos una cooperativa de aportes y crédito que cuenta con talento humano idóneo,
            entrega servicios integrales de aporte y crédito de manera socialmente responsable,
            sostenible que genera una rentabilidad superior para fortalecer patrimonio y brindar bienestar a través de
            excedentes cooperativos que beneficien a todos sus asociados a sus familias y a la comunidad en general.
          </p>
          <p className="text-lg mt-4">
            Una cooperativa de docentes y sus familias que desarrolla un modelo solidario orientado
            a mejorar la calidad de vida de sus asociados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
