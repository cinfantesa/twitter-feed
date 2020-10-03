export default class Tweet {
  createdAt: Date;
  message: string;
  formmattedCreatedAt: string;

  constructor(createdAt: string, message: string){
    this.createdAt = new Date(createdAt);
    this.message = message;

    this.formmattedCreatedAt = this.createdAt ?
      `${this.createdAt.toLocaleDateString()} at ${this.createdAt.toLocaleTimeString()}` :
      '';
  }
}
