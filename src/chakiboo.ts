//declaring a class to manage chakiboos
class Chakiboo {
  id: string;
  title: string;
  description: string;
  constructor(db_chakiboo: any) {
    this.id = db_chakiboo.id;
    this.title = db_chakiboo.title;
    this.description = db_chakiboo.description;
  }
}

export default Chakiboo;