export default class DB {
  // methode appartient à la class gràace à static
  static setApiURL(data) {
    this.apiURL = data;
  }
  static async findAll() {
    const response = await fetch(this.apiURL + "/todos");
    return response.json();
  }
  static async create(data) {
    const response = await fetch(this.apiURL + "/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Date.now(), content: data, completed: false }),
    });
    return response.json();
  }

  static async deleteOne(id) {
    const response = await fetch(this.apiURL + `/todos/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
}
