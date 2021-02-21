import React from "react";
import { Layout } from "../../components";

const Contact = () => {
  return (
    <Layout className="app2">
      <form>
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" />

          <button>
            Enviar
          </button>
        </div>
      </form>
    </Layout>
  )
};

export { Contact };