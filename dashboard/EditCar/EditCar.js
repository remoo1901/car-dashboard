import React from "react";
import "./AddCar.scss";
import { useForm } from "react-hook-form";
//import { useHistory } from "react-router-dom";
import { server } from "../../axios";
import { useHistory } from "react-router-dom";

function EditCar(props) {
  const { register, handleSubmit, errors } = useForm();
 const history = useHistory();

  const onSubmit = (data) => {
    const car = data;
    server
      .post("/cars", car)
      .then((res) => console.log(res))
      .then(history.push('/dashboard'))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        placeholder="year"
        name="year"
        type="number"
        ref={register({ required: true, pattern: /[0-9]{4}/ })}
      ></textarea>
      {errors.year && "Year Must A 4 Digits  Number"}

      <textarea
        placeholder="Make"
        name="make"
        ref={register({ required: true })}
      ></textarea>
      {errors.make && "Make is Required"}

      <textarea
        placeholder="Model"
        name="model"
        ref={register({ required: true })}
      ></textarea>
      {errors.model && "Model is Required"}

      <textarea
        placeholder="Miles"
        name="miles"
        type="number"
        ref={register({ required: true })}
      ></textarea>
      {errors.miles && "Miles Are Required"}

      <textarea
        placeholder="Price"
        name="price"
        type="number"
        ref={register({ required: true })}
      ></textarea>
      {errors.price && "Enter Selling Price"}

      <textarea
        placeholder="vin"
        name="vin"
        type="text"
        ref={register({ required: true })}
      ></textarea>
      {errors.vin && "Enter VIN Number"}

      <textarea
        placeholder="Color"
        name="color"
        type="text"
        ref={register({ required: true })}
      ></textarea>
      {errors.color && "Enter The Color Please"}

      <input type="submit" />
    </form>
  );
}

export default SignIn;

/*import { useFormInput } from "../../hooks";

function AddCar() {
  const make = useFormInput("Make", "");
  const model = useFormInput("Model", "");
  console.log(make.value);
  console.log(model.value);

  return (
    <div>
      <form>
        <input {...make} />
        <input {...model} />
      </form>
    </div>
  );
}

export default AddCar;
 */
