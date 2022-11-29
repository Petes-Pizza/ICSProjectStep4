const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  multipleStatements: true,
});

module.exports = (app) => {
  app.route("/User/analyze").get((req, res) => {
    connection.query(getUserAnalysis(req.query.username), (err, result) => {
      console.log(err ? err : result);
      res.json(result);
    });
  });
};

const getUserAnalysis = (username) => {
  return (
    "USE bingobaby;" +
    "SELECT " +
    "(SELECT AVG(CardSubject.rating) FROM User " +
    "JOIN CardSubject ON User.id=CardSubject.creatorId " +
    "WHERE User.username='" +
    username +
    "' AND published=1) AS 'cardSubjectAvgRating', " +
    "COUNT(DISTINCT Review) AS 'numReviews', " +
    "(SELECT COUNT(CardSubject.id) FROM User " +
    "JOIN CardSubject ON User.id=CardSubject.creatorId " +
    "WHERE User.username='" +
    username +
    "' AND CardSubject.published=1) AS 'numCardSubjects', " +
    "COUNT(DISTINCT Card.id) AS 'numCards' FROM User " +
    "JOIN CardSubject ON User.id=CardSubject.creatorId " +
    "JOIN Review ON CardSubject.id=Review.cardSubjectId " +
    "JOIN Card ON CardSubject.id=Card.cardSubjectId " +
    "WHERE User.username='" +
    username +
    "' AND CardSubject.published=1;"
  );
};
