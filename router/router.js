const validator = require("../middlewares/data.validation");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../database/models/users");
const { Types } = require("mongoose");
const commets = require("../database/models/commets");
const sesssion = require("../middlewares/sesssion");
router.all("/new-user", validator);
router.all("/app/*", sesssion);

const images = [
  "/img/profile_photos/cucaracha enojada.webp",
  "/img/profile_photos/gatito cute.png",
  "/img/profile_photos/github.jpg",
  "/img/profile_photos/hamster.png",
  "/img/profile_photos/pato.png",
  "/img/profile_photos/perrito cute.png",
];

const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

router.post("/new-user", async (req, res) => {
  try {
    const Data = req.body;
    const Password = await bcrypt.hash(Data.password, 12);

    const user = new User({
      nombre: Data.name,
      email: Data.email,
      edad: Data.edad,
      password: Password,
      profile_photo: images[random(1, 6)],
    });

    await user.save();

    res.send({
      message: "Usuario registrado correctamente",
    });
  } catch (error) {
    if (error.code == 11000) {
      res.send({
        err: { email: "Correo ya registrado" },
      });
      return;
    }
    res.send({
      message: "Lo sentimos, error interno",
    });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user == null) {
    res.send({ message: "EL correo ingresado no existe" });
    return;
  }

  const isUser = await bcrypt.compare(req.body.password, user.password);
  if (isUser) {
    console.log(user._id);
    req.session._id = user._id;
    res.send({ redirect: "/app/home" });
  } else {
    res.send({ message: "Contraseña incorrecta" });
  }
});

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

router.get("/", (req, res) => {
  if (req.session._id) {
    res.redirect("/app/home");
  }
  res.render("portfolio");
});

router.post("/app/new-comment", async (req, res) => {
  const body = req.body;
  const user = await User.findById(Types.ObjectId(req.session._id));
  const data = {
    user_name: user.nombre,
    user_image: user.profile_photo,
    user_id: user._id,
    like_ammount: [""],
    ...body,
  };

  const Coment = new commets(data);
  const coment = await Coment.save();
  res.send(coment);
});

router.get("/comments/:style", async (req, res) => {
  const comments = await commets.find({ style: req.params.style });
  res.send(comments);
});

router.get("/app/home", async (req, res) => {
  if (!req.session._id) {
    res.redirect("/invitado");
    return;
  }
  const user = await User.findById(Types.ObjectId(req.session._id));
  res.render("home", {
    userName: user.nombre,
    role: user.role,
  });
});

router.get("/invitado", (req, res) => {
  if (req.session._id) {
    res.redirect("/app/home");
    return;
  }
  res.render("guests");
});

router.get("/app/commets-likes/:id", async (req, res) => {
  const id = req.params.id;
  const thisComment = await commets.findById(id);
  const ArrayLikes = thisComment.like_ammount;
  console.log(ArrayLikes);
  const index = ArrayLikes.indexOf(req.session._id);
  if (index < 0) {
    ArrayLikes.push(req.session._id);
  } else {
    ArrayLikes.splice(index, 1);
  }

  const update = await commets.findByIdAndUpdate(id, {
    like_ammount: ArrayLikes,
  });
  res.send((ArrayLikes.length - 1).toString());
});

router.get("/app/admin", async (req, res) => {
  const id = req.session._id;
  const user = await User.findById(Types.ObjectId(id));

  if (user.role === "admin") {
    const users = await User.find();
    const dataUsers = users.map((user) => {
      if (user.role === "admin")
        return { name: user.nombre, email: user.email };
      else
        return {
          name: user.nombre,
          email: user.email,
          id: user._id,
        };
    });
    res.render("admin", { dataUsers });
  } else {
    res.redirect("/app/home/");
  }
});

router.get("/app/admin/delete/:id", async (req, res) => {
  const id = req.session._id;
  const user = await User.findById(Types.ObjectId(id));
  const deleteUserId = req.params.id;

  if (user.role === "admin") {
    await User.deleteOne({ _id: deleteUserId });
    res.redirect("/app/admin/");
  } else {
    res.redirect("/app/home/");
  }
});
module.exports = router;
