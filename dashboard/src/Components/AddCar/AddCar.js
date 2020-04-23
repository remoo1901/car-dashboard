import React from "react";
import "./AddCar.scss";
import { useForm } from "react-hook-form";
//import { useHistory } from "react-router-dom";
import { server } from "../../axios";
import { useHistory } from "react-router-dom";

function SignIn() {
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
      <input
        placeholder="year"
        name="year"
        type="number"
        ref={register({ required: true, pattern: /[0-9]{4}/ })}
      />
      {errors.year && "Year Must A 4 Digits  Number"}

      <input
        placeholder="Make"
        name="make"
        ref={register({ required: true })}
      />
      {errors.make && "Make is Required"}

      <input
        placeholder="Model"
        name="model"
        ref={register({ required: true })}
      />
      {errors.model && "Model is Required"}

      <input
        placeholder="Miles"
        name="miles"
        type="number"
        ref={register({ required: true })}
      />
      {errors.miles && "Miles Are Required"}

      <input
        placeholder="Price"
        name="price"
        type="number"
        ref={register({ required: true })}
      />
      {errors.price && "Enter Selling Price"}

      <input
        placeholder="vin"
        name="vin"
        type="text"
        ref={register({ required: true })}
      />
      {errors.vin && "Enter VIN Number"}

      <input
        placeholder="Color"
        name="color"
        type="text"
        ref={register({ required: true })}
      />
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
