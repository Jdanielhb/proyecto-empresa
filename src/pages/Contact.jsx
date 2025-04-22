function Contact() {
    return (
      <div className="p-6 bg-corporativo-blanco min-h-screen text-corporativo-verde">
        <h1 className="text-3xl font-bold mb-6 text-corporativo-naranja">Contacto y Soporte</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="card bg-white shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold">Formulario de Contacto</h2>
            <input type="text" placeholder="Nombre" className="input input-bordered w-full" />
            <input type="email" placeholder="Correo electrónico" className="input input-bordered w-full" />
            <textarea className="textarea textarea-bordered w-full" placeholder="Mensaje" rows="4"></textarea>
            <button className="btn btn-success">Enviar</button>
          </form>
  
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">WhatsApp y Redes Sociales</h2>
              <p>Conéctate con nosotros en nuestras redes.</p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold">Preguntas Frecuentes</h2>
              <ul className="list-disc ml-6">
                <li>¿Cómo afiliarme?</li>
                <li>¿Qué tipos de crédito ofrecen?</li>
                <li>¿Dónde encuentro documentos?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  