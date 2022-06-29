class TodoItem {
    // public id : number; //private, public, protected typescript는접근지정자 사용 가능 
    // public task : string;
    // public complete : boolean;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
export default TodoItem;
