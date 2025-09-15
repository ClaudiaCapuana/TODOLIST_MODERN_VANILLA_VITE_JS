export default class DB {
  // methode appartient à la class gràace à static
  static setApiURL(data) {
    this.apiURL = data;
  }
  static async findAll() {
    const response = await fetch(this.apiURL + "/todos");
    return response.json();
  }
}
