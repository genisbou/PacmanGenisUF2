import { GameObject } from './gameObjectClass.js';

/**
 * @type {gameObject}
 */


/**
 * @class Powup
 * @extends gameObject
 */
export class Powup extends GameObject {

    // Atributs
     #enabledPowerup;
    #startTimePowerup;
    #endTimePowerup;
    #MAX_TIME_POWER_UP;

  /**
   * Crea una nova instància de Powup.
   * @param {number} row - Numero de fila
   * @param {number} column - Numero de columna
   */
  constructor(row, column) {
    super(row, column);

    /**
     * @type {boolean} enabledPowerup - Indica si el powerup està activat o no
     */
     this.#enabledPowerup = false;

    /**
     * @type {number} startTimePowerup - Temps d'inici del powerup (inicialitzat a 0)
     */
    this.#startTimePowerup = 0;

    /**
     * @type {number} endTimePowerup - Temps final del powerup (inicialitzat a 0)
     */
    this.#endTimePowerup = 0;

    /**
     *
     * @type {number} MAX_TIME_POWER_UP - Temps màxim del powerup actiu (10 segons)
     */
    this.#MAX_TIME_POWER_UP = 10000;
  }


// Getters i Setters
  get enabledPowerup() {
    return this.#enabledPowerup;
  }

  set enabledPowerup(value) {
    this.#enabledPowerup = value;
  }

  get startTimePowerup() {
    return this.#startTimePowerup;
  }

  set startTimePowerup(value) {
    this.#startTimePowerup = value;
  }

  get endTimePowerup() {
    return this.#endTimePowerup;
  }

  set endTimePowerup(value) {
    this.#endTimePowerup = value;
  }

  get MAX_TIME_POWER_UP() {
    return this.#MAX_TIME_POWER_UP;
  }



  toString() {
    /**
     * Mostra la informació de l'objecte Powup
     */
   console.log(`Powup at row ${this.rowNumber}
    and column ${this.columnObjectNumber}
    and is enabled: ${this.#enabledPowerup}`);
  }
}
