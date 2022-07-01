const { User, Thought } = require("../models");

const userControllers = {
  // GET all users
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
  // GET a single user by its _id and populated thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.userId })
      .populate([
        {
          path: "thoughts",
          select: "-__v",
        },
        {
          path: "friends",
          select: "-__v",
        },
      ])
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // POST a new user:
  // // example data
  // {
  //   "username": "lernantino",
  //   "email": "lernantino@gmail.com"
  // }
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // PUT to update a user by its _id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // DELETE to remove user by its _id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then((deletedUser) => {
        if (!deletedUser) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        return Thought.deleteMany({ username: deletedUser.username });
      })
      .then((deletedThoughts) => res.json(deletedThoughts))
      .catch((err) => res.status(400).json(err));
  },

  // /api/users/:userId/friends/:friendId
  // POST to add a new friend to a user's friend list
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove a friend from a user's friend list
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userControllers;
