try {
  const title = "mistakes-1";
  console.group(title);
  // there is a comment by each method saying how many bugs are in it
  // write a little note about each after you fix it for later study

  const obj = {
    state: {
      x: 0,
      y: 0
    },
    log: [],
    renderState: function() {
      // 2 mistakes while writing with $ we must not use { and +
      return `X: ${this.state.x}, Y: ${this.state.y}`;
    },
    handler: function(container, event) {
      // 3 mistakes // 2 variables are needed
      //debugger;
      this.state.x = Number(event.x); // x is small
      this.state.y = Number(event.y); // y is small
      //in event we cannot write
      container.innerHTML = this.renderState();
      this.log.push(JSON.parse(JSON.stringify(this.state)));
    },
    view: function(id) {
      // 3 mistakes
      // debugger;
      const container = document.createElement("div"); // we must write new element between ' '
      container.id = id;
      container.innerHTML = this.renderState(); // while wrting inner HTML we do not bind
      container.onmousemove = this.handler.bind(this, container); // bind handler to the object
      container.className = "exercise";

      container.onclick = function(e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }.bind(this);

      return container;
    }
  };

  document.getElementById("root").appendChild(obj.view(title));

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
