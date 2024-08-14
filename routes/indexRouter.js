const { Router } = require("express");

const router = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages})
})

router.post("/new", (req, res) => {
    messages.push({
        text: req.body.messageText,
        user: req.body.messageUser,
        added: new Date()
    })
    console.log(messages)
    res.redirect("/")
})

module.exports = router