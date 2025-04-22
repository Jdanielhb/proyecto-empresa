function About() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Sección Quiénes Somos */}
      {/* <div className="card bg-base-100 shadow-xl mb-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-base-200">
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
      </div> */}

      {/* Sección Misión y Visión lado a lado */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Sección Misión */}
        <div className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-base-200">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-[#228B22]">Misión</h2>
            <div className="divider"></div>
            <p className="text-lg">
              COONADOC desarrolla el modelo solidario, orientada a satisfacer necesidades y expectativas a través de servicios y
              beneficios de calidad, contribuyendo a la calidad de vida de
              sus asociados y familias.
            </p>
          </div>
        </div>

        {/* Sección Visión */}
        <div className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-base-200">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-[#228B22]">Visión</h2>
            <div className="divider"></div>
            <p className="text-lg">
              COONADOC para el año 2029 incrementará su base social
              en más de 1.000 asociados, a través de la gestión social, el
              empoderamiento de los valores corporativos de eficiencia,
              eficacia y calidez y la prestación de servicios generando
              transformación de vida, con las políticas del buen-vivir y el
              bien-estar, siguiendo los principios del cooperativismo.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Bienestar */}
      <div className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-base-200">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-[#228B22]">Bienestar</h2>
          <div className="divider"></div>
          <p className="text-lg">
          COONADOC, busca el mejoramiento de la calidad de vida del asociado, sus familias y personal administrativo, 
          a través de las relaciones con consigo mismo, con el otro y el medio ambiente ,logrando la construcción de 
          un buen vivir con relaciones equitativas y solidarias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
