# Trello

## Project setup
```
npm install
```

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
