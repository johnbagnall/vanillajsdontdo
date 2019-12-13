var app = new function() {
  this.el = document.getElementById('lists');
  this.lists = ['be a dick', 'waste time', 'be lazy', 'be unproductive'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = "list, let's make one";
    if (data) {
      if (data == 1) {
        name = 'thing to not do';
      } else if (data > 1) {
        name = 'things to not do';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      document.getElementById('header').style.display = "none";
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.lists.length > 0) {
      for (i = 0; i < this.lists.length; i++) {
        data += '<tr>';
        data += '<td>' + this.lists[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.lists.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    var list = el.value;
    if (list) {
      document.getElementById('header').style.display = "block";
      this.lists.push(list.trim());
      el.value = '';
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    el.value = this.lists[item];
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      var list = el.value;
      if (list) {
        self.lists.splice(item, 1, list.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    this.lists.splice(item, 1);
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}