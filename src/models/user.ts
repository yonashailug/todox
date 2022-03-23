export class User {
  static EMPTY_USER = new User()
  private id: number = 0
  private name: string = ''
  private email: string = ''
  private avatarUrl: string = ''
  private password: string = ''

  get getId(): number {
    return this.id
  }
  set setId(value: number) {
    this.id = value
  }
  get getName(): string {
    return this.name
  }
  set setName(value: string) {
    this.name = value
  }

  get getEmail(): string {
    return this.email
  }
  set setEmail(value: string) {
    this.email = value
  }

  get getAvatarUrl(): string {
    return this.avatarUrl
  }
  set setAvatarUrl(value: string) {
    this.avatarUrl = value
  }

  static fromObject(obj: {}): User {
    const user = new User()
    Object.assign(user, obj)
    return user
  }
}

export default User
