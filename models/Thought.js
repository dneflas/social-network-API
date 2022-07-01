const { Schema, model, Types } = require("mongoose");
const date = require("date-and-time");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtValue) =>
        date.format(createdAtValue, "ddd, MMM D, YYYY, h:mm:ss A"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtValue) =>
        date.format(createdAtValue, "ddd, MMM D, YYYY, h:mm:ss A"),
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
