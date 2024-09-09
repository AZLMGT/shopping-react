import mongoose from "mongoose";

const couponShcema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      uniqued: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      uniqued: true,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponShcema);
export default Coupon;
