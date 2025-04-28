
// //import { IMAGE_SIZE } from "../sketch.js";
// import { IMAGE_SIZE } from "../sketch.js";
// /** @class gameObject representa una classe. */
import { configGame } from "../constants.js"; 

export class GameObject {

  /**
   * Creates an instance of gameObject.
   *
   * @author eduardo
   * @param {number} row The row number of the map.
   * @param {number} column The column number of the ma.
   /*
  rowNumber=0;
  columnObjectNumber=0;
  coordXPixels=0;
  coordYPixels=0;*/

  // Atributs privats
  #rowNumber;
  #columnObjectNumber;
  #coordXPixels;
  #coordYPixels

//   constructor(row, column){
//     this.rowNumber = row;
//     this.columnObjectNumber = column;
//     this.coordXPixels =  column * IMAGE_SIZE;
//     this.coordYPixels =  row * IMAGE_SIZE;
//   }
  constructor(row, column) {
    this.#rowNumber = row;
    this.#columnObjectNumber = column;
    this.#coordXPixels = column * configGame.IMAGE_SIZE;
    this.#coordYPixels = row * configGame.IMAGE_SIZE;
  }
  /**
   * Shows the image of a GameObject.
   *
   * @param {img} img Image to be displayed
   */

  // Getters i Setters
  get rowNumber() { 
    return this.#rowNumber; 
  }
  get columnObjectNumber() { 
    return this.#columnObjectNumber;
  }
  get coordXPixels() { 
    return this.#coordXPixels;
  }
  get coordYPixels() { 
    return this.#coordYPixels; 
  }

  set rowNumber(value) { 
    this.#rowNumber = value; 
  }
  set columnObjectNumber(value) { 
    this.#columnObjectNumber = value;
  }
  set coordXPixels(value) { 
    this.#coordXPixels = value; 
  }
  set coordYPixels(value) { 
    this.#coordYPixels = value; 
  }

//   showObject(img) {
//     if( this.coordXPixels == null || this.coordYPixels == null){
//       this.coordXPixels = this.rowNumber * IMAGE_SIZE;
//       this.coordYPixels = this.columnObjectNumber * IMAGE_SIZE;
//     }
//     //falta comprovar que coordXPixels i coordYPixels dintre canvas
//     image(img, this.coordXPixels, this.coordYPixels);
//   }


  showObject(img) {
    if (this.#coordXPixels == null || this.#coordYPixels == null) {
      this.#coordXPixels = this.#rowNumber * configGame.IMAGE_SIZE;
      this.#coordYPixels = this.#columnObjectNumber * configGame.IMAGE_SIZE;
    }
    image(img, this.#coordXPixels, this.#coordYPixels);
  }

}
