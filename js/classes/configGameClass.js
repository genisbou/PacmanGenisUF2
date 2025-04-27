export class configGame  {
    // Atributs privats
      #ROWS;
      #IMAGE_SIZE;
      #COLUMNS;
      #EXTRA_SIZE_HEIGHT;
      #SPEED_PACMAN;
      #LIVES_PACMAN;
      #map;
      #WIDTH_CANVAS;
      #HEIGHT_CANVAS;

      // Constructor
      configGameClass(){
          this.#ROWS = 10;
          this.#IMAGE_SIZE = 32;
          this.#COLUMNS = 10;
          this.#EXTRA_SIZE_HEIGHT = 300;
          this.#SPEED_PACMAN = 32;
          this.#LIVES_PACMAN = 3;
          this.#map = [

                  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  [1, 2, 2, 2, 1, 2, 2, 5, 2, 1],
                  [1, 2, 1, 2, 1, 2, 1, 2, 2, 1],
                  [1, 2, 1, 3, 2, 2, 1, 2, 2, 1],
                  [1, 2, 2, 2, 1, 2, 2, 3, 2, 1],
                  [1, 2, 1, 2, 1, 2, 1, 2, 5, 1],
                  [1, 2, 1, 2, 2, 3, 1, 2, 2, 1],
                  [1, 2, 1, 1, 1, 1, 1, 3, 2, 1],
                  [1, 2, 2, 2, 2, 2, 2, 2, 4, 1],
                  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

          ];
           this.#WIDTH_CANVAS = this.#COLUMNS * this.#IMAGE_SIZE;
          this.#HEIGHT_CANVAS = this.#ROWS * this.#IMAGE_SIZE;
          
      }

      // Getters i Setters
      get ROWS() { 
        return this.#ROWS; 
      }

      get COLUMNS() { 
        return this.#COLUMNS; 
      }

      get IMAGE_SIZE() {
         return this.#IMAGE_SIZE; 
        }

      get EXTRA_SIZE_HEIGHT() { 
        return this.#EXTRA_SIZE_HEIGHT; 
      }

      get SPEED_PACMAN() { 
        return this.#SPEED_PACMAN; 
      }

      get LIVES_PACMAN() { 
        return this.#LIVES_PACMAN; 
      }

      get map() { 
        return this.#map; 
      }

      get WIDTH_CANVAS() { 
        return this.#WIDTH_CANVAS; 
      }

      get HEIGHT_CANVAS() { 
        return this.#HEIGHT_CANVAS; 
      }

      set ROWS(value){
        this.#ROWS = value;
      }

      set COLUMNS(value){
        this.#COLUMNS = value;
      }

      set IMAGE_SIZE(value){
        this.#IMAGE_SIZE = value;
      }

      set EXTRA_SIZE_HEIGHT(value){
        this.#EXTRA_SIZE_HEIGHT = value;
      }

      set SPEED_PACMAN(value){
        this.#SPEED_PACMAN = value;
      }

      set LIVES_PACMAN(value){
        this.#LIVES_PACMAN = value;
      }

      set map(value){
        this.#map = value;
      }

      set WIDTH_CANVAS(value){
        this.#WIDTH_CANVAS = value;
      }

      set HEIGHT_CANVAS(value){
        this.HEIGHT_CANVAS = value;
      }

};