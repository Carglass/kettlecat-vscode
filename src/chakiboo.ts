//declaring a class to manage chakiboos
class Chakiboo {
  id: string;
  title: string;
  description: string;
  language: string;
  constructor(db_chakiboo: any) {
    this.id = db_chakiboo.id;
    this.title = db_chakiboo.title;
    this.description = db_chakiboo.description;
    this.language = db_chakiboo.language;
  }
}

export default Chakiboo;
