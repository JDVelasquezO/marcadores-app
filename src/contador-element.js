import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-button/paper-button';

class ContadorElement extends PolymerElement {

  static get properties(){
      return{
        contador: {
          type: Number,
          value: 0
        }
      };
    }

    incremento(){
  
      this.contador++;
    }

    decremento(){

      if(this.contador <= 0){
        this.contador = 0
        alert('LLegaste al límite')
      }
      else{
        this.contador--;
      }
    }

    reset(){

      this.contador = 0
    }

    static get template() {
      return html`
        <style include="shared-styles">
          :host {
            display: block;
  
            padding: 10px;
          }

          paper-button{
            background-color: #4285f4;
            color: #fff;
          }

          paper-input {
            max-width: 400px;
            margin: auto;
          }
        </style>
  
        <div class="card">
          <div class="circle">4</div>
          <h1>Contador</h1>
          <paper-button on-tap="incremento">+</paper-button>
          <paper-button on-tap="reset">Reset</paper-button>
          <paper-button on-tap="decremento">-</paper-button>
          <h3>Has hecho [[contador]] clicks </h3>
        </div>
      `;
    }
  }
  
  window.customElements.define('contador-element', ContadorElement);
  