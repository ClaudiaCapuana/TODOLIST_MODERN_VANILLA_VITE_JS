(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();function c(s){return`
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          onchange="window.todoList.addTodo(this)"
        />
      </header>
      <main class="main">
        <div class="toggle-all-container">
          <input class="toggle-all" type="checkbox" />
          <label class="toggle-all-label" for="toggle-all"
            >Mark all as complete</label
          >
        </div>
        <ul class="todo-list" role="todo-list">
          ${s.todos.map(e=>e.render()).join("")}
        </ul>

      </main>
      <footer class="footer">
        <span class="todo-count" role="todo-count">
        <span>${s.getItemsLeftCount()}</span>  item(s) left
        </span>
        <ul class="filters">
          <li><a href="#/" class="selected">All</a></li>
          <li><a href="#/active">Active</a></li>
          <li><a href="#/completed">Completed</a></li>
        </ul>
        <button class="clear-completed">Clear completed</button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by the TodoMVC Team</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  `}function r(s){return` <li data-id="${s.id}" class="${s.completed?"completed":""}">
            <div class="view">
              <input class="toggle" type="checkbox" ${s.completed?"checked":""}  onchange="window.todoList.toggleCompletedOneById(${s.id}"/>
              <label ondblclick="this.closest('li').classList.toggle('editing')">${s.content}</label>
              <button class="destroy" onclick="window.todoList.deleteOneById(${s.id})"></button>
            </div>
            <input class="edit" value="${s.content}" onchange="window.todoList.updateOneById(${s.id},this.value)"/>
          </li>`}class a{constructor(e){this.id=e.id,this.content=e.content,this.completed=e.completed,this.created_at=e.created_at}render(){return r(this)}}class l{static setApiURL(e){this.apiURL=e}static async findAll(){return(await fetch(this.apiURL+"/todos")).json()}static async create(e){return(await fetch(this.apiURL+"/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Date.now(),content:e,completed:!1})})).json()}static async deleteOne(e){return(await fetch(this.apiURL+`/todos/${e}`,{method:"DELETE"})).json()}static async updateOne(e){return await fetch(this.apiURL+`/todos/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:e.content,completed:e.completed})}),resp.json()}}class p{constructor(e){this.domElt=document.querySelector(e.elt),this.newTodo=null,l.setApiURL(e.apiURL),this.todos=[],this.loadTodos()}async loadTodos(){const e=await l.findAll();this.todos=e.map(t=>new a(t)),this.render()}render(){this.domElt.innerHTML=c(this)}getItemsLeftCount(){return this.todos.filter(e=>!e.completed).length}renderItemsLeftCount(){this.domElt.querySelector('[role="todo-count"] span').innerText=this.getItemsLeftCount()}async addTodo(e){const t=await l.create(e.value);this.addItemInTodos(t),this.addItemInDOM(),this.renderItemsLeftCount(),e.value=""}addItemInTodos(e){this.newTodo=new a(e),this.todos.push(this.newTodo)}addItemInDOM(){const e=this.domElt.querySelector('[role="todo-list"]'),t=document.createElement("div");e.append(t),t.outerHTML=this.newTodo.render()}async deleteOneById(e){await l.deleteOne(e),this.deleteItemInTodos(e),this.deleteItemInDOM(e),this.renderItemsLeftCount()}deleteItemInTodos(e){const t=this.todos.indexOf(i=>i.id===e);this.todos.splice(t,1)}deleteItemInDOM(e){this.domElt.querySelector(`[data-id="${e}"]`).remove()}async toggleCompletedOneById(e){const t=this.todos.find(i=>i.id==e);t.completed=!t.completed,await l.updateOne(t),this.domElt.querySelector(`[data-id="${e}"]`).classList.toggle("completed"),this.renderItemsLeftCount()}async updateOneByID(e,t){const i=this.todos.find(o=>o.id==e);i.content=t,await l.updateOne(i),this.domElt.querySelector(`[data-id="${e}"]`).classList.remove("editing"),this.domElt.querySelector(`[data-id="${e}"] label`).innerText=i.content}}window.todoList=new p({elt:"#app",apiURL:"https://6895f2f5039a1a2b2890eae8.mockapi.io"});
