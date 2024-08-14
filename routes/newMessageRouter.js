// const { Router } = require("express");

// const authorsRouter = Router();

// authorsRouter.get("/", (req, res) => res.send("All authors"));
// authorsRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

// module.exports = authorsRouter;

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.render("form")
})

router.post("/new", (req, res) => {
  messages.push({text: messageText, user: messageUser, added: new Date() })
  res.redirect("/")
})

module.exports = router