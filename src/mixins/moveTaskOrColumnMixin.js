export default {
    props: {
        columnIndex: {
            type: Number,
            required: true,
        },
        board: {
            type: Object,
            required: true,
        }
    },

    methods: {
        moveTaskOrColumn(e, toColumnTasks, toColumnIndex, toTaskIndex) {
            const type = e.dataTransfer.getData("type");

            if (type === "task")
                this.moveTask(
                    e,
                    toColumnTasks,
                    toTaskIndex !== undefined ? toTaskIndex : toColumnTasks.length
                );
            else this.moveColumn(e, toColumnIndex);
        },

        moveTask(e, toColumnTasks, toTaskIndex) {
            const fromColumnIndex = e.dataTransfer.getData("column-index");
            const taskIndex = e.dataTransfer.getData("task-index");
            const fromColumnTasks = this.board.columns[fromColumnIndex].tasks;

            this.$store.dispatch("moveTask", {
                from: fromColumnTasks,
                to: toColumnTasks,
                fromTaskIndex: taskIndex,
                toTaskIndex,
            });
        },

        moveColumn(e, toColumnIndex) {
            const fromColumnIndex = e.dataTransfer.getData("column-index");

            this.$store.dispatch("moveColumn", {
                fromColumnIndex,
                toColumnIndex,
            });
        }
    }
}