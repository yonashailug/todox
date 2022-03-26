export enum Status {
  todo = 'To do',
  inprogress = 'In progress',
  completed = 'Completed',
  // done = 'Done',
}

export class TaskItem {
  static EMPTY_TASKITEM = new TaskItem()

  private id: string = ''
  private title: string = ''
  private body: string = ''
  private hasAttachment: boolean = false
  private status: Status = Status.todo

  get getId(): string {
    return this.id
  }
  set setId(value: string) {
    this.id = value
  }

  get getTitle(): string {
    return this.title
  }
  set setTitle(value: string) {
    this.title = value
  }

  get getBody(): string {
    return this.body
  }
  set setBody(value: string) {
    this.body = value
  }

  get getHasAttachment(): boolean {
    return this.hasAttachment
  }
  set setHasAttachment(value: boolean) {
    this.hasAttachment = value
  }

  get getStatus(): Status {
    return this.status
  }
  set setStatus(value: Status) {
    this.status = value
  }

  static fromObject(obj: {}): TaskItem {
    const taskItem = new TaskItem()
    Object.assign(taskItem, obj)
    return taskItem
  }
}

export default TaskItem
