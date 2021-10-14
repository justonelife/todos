export class Todo {
    public id?: string;
    public title: string;
    public description?: string | null | undefined;
    public status: 'defined' | 'in_progress' | 'completed';
    constructor(data: any) {
        this.id = data._id;
        this.title = data.title;
        this.description = data.description;
        this.status = data.status;
    }
}