import React from "react";

class ProfessionalForm extends React.Component {
  render() {
    return (
      <fieldset>
        <div>
          {
        //* Resumo do currículo - TextArea
        //*   Limite de 1000 caracteres
        //*   Campo obrigatório.
          }
          <label >
            Resumo do currículo:
            <textarea maxLength="1000" required />
          </label>
        </div>

        <div>
          {
          // Cargo - TextArea
          //*   Limite de 40 caracteres
          //   Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
          //*   Campo obrigatório
          }
          <label>
            Cargo:
            <textarea maxLength="40" required />
          </label>
        </div>

        <div>
          {
          // Descrição do cargo - Texto
          //*   Limite de 500 caracteres
          //*   Campo obrigatório
          }
          <label>
            Descrição do cargo:
            <textarea maxLength="500" required />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
