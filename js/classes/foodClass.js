/**
 * @type {gameObject}
 */
import { gameObject } from './gameObjectClass.js';

/**
 * @class Food
 * @extends gameObject
 */
export class Food extends gameObject {

    // Atributs
  #pointsFood;

  /**
   * Crea una nova instància de Food.
   * @param {number} row - Numero de fila
   * @param {number} column - Numero de columna
   */
  constructor(row, column) {
    super(row, column);

    /**
     * @type {number} pointsFood - Punts que dóna el menjar
     */
    this.#pointsFood = 10;
  }

  // Getter
  get pointsFood() {
    return this.#pointsFood;
  }

  // Setter
  set pointsFood(value) {
    this.#pointsFood = value;
  }

  toString() {
    console.log(`Food at row ${this.rowNumber}
    and column ${this.columnObjectNumber}
    with ${this.#pointsFood} points`);
  }
}
