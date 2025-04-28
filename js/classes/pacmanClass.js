import {gameObject} from './gameObject.js';
/*
import {IMAGE_SIZE} from '../sketch2.js';
import {WIDTH_CANVAS} from '../sketch2.js';
*/
import {configGame} from "../constants.js";

export class Pacman extends gameObject {

  #directionPacman;
  #speedPacman;
  #scorePacman;
  #pacmanLives;


  constructor(row, column) {
    super(row, column); //

    this.#directionPacman = 1; // 1 -> right, 2 -> up, 3 -> left, 4 -> down
    this.#speedPacman = configGame.SPEED_PACMAN;
    this.#scorePacman = 0;
    this.#pacmanLives = 3;
  }


  // Getters i Setters
  get directionPacman() {
    return this.#directionPacman;
  }
  get speedPacman() {
    return this.#speedPacman;
  }
  get scorePacman() {
    return this.#scorePacman;
  }
  get pacmanLives() {
    return this.#pacmanLives;
  }

  set directionPacman(value) {
    this.#directionPacman = value;
  }
  set speedPacman(value) {
    this.#speedPacman = value;
  }
  set scorePacman(value) {
    this.#scorePacman = value;
  }
  set pacmanLives(value) {
    this.#pacmanLives = value;
  }

  moveRight(){
    //Move pacman right
     let temp = this.coordXPixels + this.#speedPacman;
    if (temp < 0 || temp > (configGame.WIDTH_CANVAS - configGame.IMAGE_SIZE)) {
      console.log("Error, no es pot moure a la dreta");
      return;
    } else {
      this.#directionPacman = 1;
      this.coordXPixels = temp;
    }
  }//End moveRight

    moveUp() {
    let temp = this.coordYPixels - this.#speedPacman;
    if (temp < 0) {
      console.log("Error, no es pot moure cap amunt");
      return;
    } else {
      this.#directionPacman = 2;
      this.coordYPixels = temp;
    }
  }//End moveUp

   moveDown() {
    let temp = this.coordYPixels + this.#speedPacman;
    if (temp > (configGame.HEIGHT_CANVAS - configGame.IMAGE_SIZE)) {
      console.log("Error, no es pot moure cap avall");
      return;
    } else {
      this.#directionPacman = 4;
      this.coordYPixels = temp;
    }
  }//End moveDown

 moveLeft() {
    let temp = this.coordXPixels - this.#speedPacman;
    if (temp < 0) {
      console.log("Error, no es pot moure a l'esquerra");
      return;
    } else {
      this.#directionPacman = 3;
      this.coordXPixels = temp;
    }
  } //End moveLeft

    testCollideRock(roca) {
    let distancia = dist(this.coordXPixels, this.coordYPixels, roca.coordXPixels, roca.coordYPixels);
    if (distancia < configGame.IMAGE_SIZE) {
      alert("Has xocat amb una roca, has perdut una vida");
      this.#pacmanLives--;
      this.spawnPacman();
      if (this.#pacmanLives === 0) {
        alert("Has perdut totes les vides, GAME OVER");
        noLoop();
      }
    }
  }
      //mHE FOTUT nata amb una roca
/*
  testCollideRock(roca){
    let distancia = dist(this.coordXPixels,
      this.coordYPixels, roca.coordXPixels, roca.coordYPixels);
   // console.log( "Distancia entre pacman i roca: " + distancia);

    if (distancia < IMAGE_SIZE) {
      //mHE FOTUT nata amb una roca
      switch (this.directionPacman) {
        case 1: //Direccio dreta -> corregeixo this.moveLeft();
          this.coordXPixels = this.coordXPixels - this.speedPacman;
          break;
        case 2: //Direccio up -> corregeixo this.moveDown();
          this.coordYPixels = this.coordYPixels + this.speedPacman;
          break;
        case 3: //Direccio left -> corregeixo this.moveRight();
          this.coordXPixels = this.coordXPixels + this.speedPacman;
          break;
        case 4: //Direccio down -> corregeixo this.moveUp();
          this.coordYPixels = this.coordYPixels - this.speedPacman;
          break;
        default:
          console.log("Error, direcció no reconeguda");
      } //End switch
    } //end if
      else {
        //console.log("Roca a massa distan");
      }
    }
    */
 testCollideFood(food) {
    let distancia = dist(this.coordXPixels, this.coordYPixels, food.coordXPixels, food.coordYPixels);
    return distancia < configGame.IMAGE_SIZE;
  }

 testCollidePowerup(powerup) {
    let distancia = dist(this.coordXPixels, this.coordYPixels, powerup.coordXPixels, powerup.coordYPixels);
    return distancia < configGame.IMAGE_SIZE;
    console.log("Has agafat una powerup");
  }

  spawnPacman() {
    this.coordXPixels = 7 * configGame.IMAGE_SIZE;
    this.coordYPixels = 7 * configGame.IMAGE_SIZE;
  }


}
