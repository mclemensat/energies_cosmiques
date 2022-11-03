class UserManager {
    static table = "users";

    constructor(connection, table) {
      this.connection = connection;
      this.table = table;
    }
  
    find(id) {
      return this.connection.query(`select * from ${this.table} where id = ?`, [
        id,
      ]);
    }
  
    findAll() {
      return this.connection.query(`select * from ${this.table}`);
    }
  
    delete(id) {
      return this.connection.query(`delete from ${this.table} where id = ?`, [
        id,
      ]);
    }

  findByNickname(nickname) {
    return this.connection.query(
      `select * from ${this.table} where nickname = ?`,
      [nickname]
    );
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (nickname, password) values (?, ?)`,
      [item.nickname, item.password]
    );
  }
}

module.exports = UserManager;