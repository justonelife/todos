export class Todo {
    public title: string;
    public description?: string | null | undefined;
    public completed: boolean;
    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.completed = data.completed;
    }
}