class TableTemplate extends Cs142TemplateProcessor {
  constructor() {
    this.template;
    this.table;
  }
  static fillIn(id, dictionary, columnName) {
    let tbl = window.document.getElementById(id);
    this.table = tbl.querySelectorAll("tr");
    this.template = this.table[0].innerHTML;
    let t = Cs142TemplateProcessor.prototype.fillIn.call(
      this,
      dictionary,
      nodeToArray(this.table[0].querySelectorAll("td"))
    );
    tbl.innerHTML = "";
    tbl.appendChild(t);
    Array.prototype.map.call(this.table, (el, ind) => {
      let index = -1;
      if (ind !== 0) {
        if (columnName) {
          index = columnName === "Length" ? 1 : 0;
        }
        this.template = el.innerHTML;
        t = Cs142TemplateProcessor.prototype.fillIn.call(
          this,
          dictionary,
          index === -1
            ? nodeToArray(this.table[ind].querySelectorAll("td"))
            : Array(1).fill(
                nodeToArray(this.table[ind].querySelectorAll("td"))[index]
              )
        );
        tbl.appendChild(t);
      }
    });

    tbl.style.visibility = "visible";
  }
}
function nodeToArray(node) {
  return Array.prototype.map.call(node, (el) => el.innerHTML);
}
