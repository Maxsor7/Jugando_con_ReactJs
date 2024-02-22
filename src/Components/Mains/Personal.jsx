import React from "react";
import './Personal.css'; // Importa los estilos desde el archivo Personal.css

function Personal() {
  return (
    <main>
      {/* Barra lateral a la izquierda en gris clarito */}
      <aside>
        {/* Contenido de la barra lateral */}
        <p>Barra Lateral</p>
      </aside>

      {/* Área central en blanco */}
      <div>
        {/* Contenido central */}
        <h1>Personal</h1>
        <p>Contenido personal aquí.</p>
      </div>
    </main>
  );
}

export default Personal;
