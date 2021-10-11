export class Todo {
    public title: string;
    public description?: string | null | undefined;
    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
    }
}