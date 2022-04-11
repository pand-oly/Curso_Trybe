import React from 'react';

class PersonalForm extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <fieldset>
        <div>
        {// Nome - Texto
        //   *Limite de 40 caracteres
        //    tdos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
        //  *Campo obrigatório
        }
          <label>
            Name:
            <input
              name="name"
              type="text"
              maxLength="40"
              required
              onChange={changeState}
            />
          </label>
        </div>

        <div>
          {// *Email - Texto
          //    *Limite de 50 caracteres
          //    *Campo obrigatório
          }
          <label>
            Email:
            <input
              name="email"
              type="text"
              maxLength="50"
              required
            />
          </label>
        </div>

        <div>
          {// *CPF - Texto
          //    *Limite de 11 caracteres
          //    *Campo obrigatório 
          }
          <label>
            CPF:
            <input
              name="cpf"
              type="text"
              maxLength="11"
              required
            />
          </label>
        </div>

        <div>
            { 
            // Endereço - Texto
            //   * Limite de 200 caracteres
            //    Remover qualquer caracter especial que seja digitado
            //  * Campo obrigatório 
            }
          <label>
            Endereço:
            <input
              name="adress"
              type="text"
              maxLength="200"
              required
            />
          </label>
        </div>

        <div>
          {//  Cidade - Texto
          //  *Limite de 28 caracteres
          //  Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
          //  *Campo obrigatório.
        }
          <label>
            Cidade:
            <input 
              type="text"
              maxLength="28"
              required
              />
          </label>
        </div>

        <div>
          {
        // Estado - ComboBox
        //*  Tdos os estados do Brasil
        //*  Campo obrigatório.
        }
        <label>
          Estado:
          <select required >
            <option>Select</option>
            <option>Acre</option>
            <option>Alagoas</option>
            <option>Amapá</option>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Distrito Federal</option>
            <option>Espírito Santo</option>
            <option>Goiás</option>
            <option>Maranhão</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul</option>
            <option>Minas Gerais</option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernambuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro</option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul</option>
            <option>Rondônia</option>
            <option>Roraima</option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins</option>
          </select>
        </label>
        </div>

        <div>
          {
        //*  Tipo - Radio Button
          //*  Casa, Apartamento
          //*  Campo obrigatório.
          }
          <label>
            Casa
            <input type="radio" name='home'/>
          </label>
          <label>
            Apartamento
            <input type="radio" name='home'/>
          </label>
        </div>
      </fieldset>

    );
  }
}

export default PersonalForm;
