// Comments API static class
export default class ApiComments {

  // get a list of comments
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy comments list
        let comments = [];
        for (let id = 1; id <= 2; ++id) {
          comments.push({
            id,
            text: 'Комментарий #' + id,
            vote: 0,
            createdAt: new Date()
          });
        }
        resolve(comments);
      }, 200);
    });
  }

  // add a comment
  static add() {
    return new Promise(resolve => {
      setTimeout(resolve, 200);
    });
  }

  // delete a comment
  static delete() {
    return new Promise(resolve => {
      setTimeout(resolve, 200);
    });
  }

  // like a comment
  static like() {
    return new Promise(resolve => {
      setTimeout(resolve, 200);
    });
  }
}
