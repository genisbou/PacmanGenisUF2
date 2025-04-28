export class User {
  // Atributs privats
  #nom;
  #cognom;
  #idUsuari;
  #email;

  // Constructor
  constructor(nom, cognom, idUsuari, email) {
    this.#nom = nom;
    this.#cognom = cognom;
    this.#idUsuari = idUsuari;
    this.#email = email;
  }

  // Getters
  get nom() {
    return this.#nom;
  }

  get cognom() {
    return this.#cognom;
  }

  get idUsuari() {
    return this.#idUsuari;
  }

  get email() {
    return this.#email;
  }

  // Setters
  set nom(value) {
    this.#nom = value;
  }

  set cognom(value) {
    this.#cognom = value;
  }

  set idUsuari(value) {
    this.#idUsuari = value;
  }

  set email(value) {
    this.#email = value;
  }

  // Mostra info de l'usuari
  toString() {
    console.log(`Usuari: ${this.#nom} ${this.#cognom}, ID: ${this.#idUsuari}, Email: ${this.#email}`);
  }
}
