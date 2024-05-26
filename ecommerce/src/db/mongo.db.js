import mongoose from 'mongoose';
// const username = "amankumar23067";
// const password = "Mw98e1P2Y7HrSAfN";
const url = `mongodb://localhost:27017/product`;
mongoose
  .connect(url)
  .then((data) => {
    console.log("Database connected!!");
  })
  .catch((err) => {
    console.log(err)
    // return err;
  });
export default mongoose;
