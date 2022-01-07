# Trello
Load data from `data/board.js` or localstorage and make actions: 
- Add/move columns
- Add/move tasks
- Set status
- Assign user
- Assign status
- Fetch/add comments
- Validate inputs with `Vuelidate` and display error message 


Changes saved in `localstorage`

## Project setup
```
npm install
```

Dependencies:
- Vuex
- Vue router
- Vuelidate

Global components:
- BaseModal
- BaseButton
- BaseDropdown

Plugins:
- Custom directive for background and text color: `backgroundDirective`

usage:
`v-bgc:[backgroundColorCode]="'textColorCode'"`

## Draggable api

start drag and get index of target task and target task parrent (column) index
```js
draggable="true"
@dragstart="pickupTask($event, taskIndex, columnIndex)"
```

drop task into a target column.tasks array
```js
@drop="moveTask($event, column.tasks)"
@dragover.prevent
@dragenter.prevent
```
