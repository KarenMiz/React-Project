import { Container } from "@mui/material";
import Joi from "joi";
import useForm from "../forms/hooks/useForm";
import Form from "../forms/components/Form";
import ROUTES from "../routes/routesModel";
import Input from "../forms/components/Input";

const schema = {
  first: Joi.string().min(2),
  last: Joi.string().min(2).max(10),
  email: Joi.string()
  .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
  .rule({ message: 'user "mail" must be a valid mail' })
  .required(),
};

const initialForm = {
  first: "",
  last: "",
  email: "",
};

const handleSubmit = (data) => {
  console.log(data);
};

export default function FormExample() {
  const { data, errors, handleChange, onSubmit, handleReset, validateForm } =
    useForm(initialForm, schema, handleSubmit);

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Test Form"
        onSubmit={onSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={validateForm}
        to={ROUTES.SANDBOX}
      >
        <Input
          label="first name"
          name="first"
          data={data}
          error={errors.first}
          onChange={handleChange}
        />
        <Input
          label="last name"
          name="last"
          data={data}
          error={errors.last}
          onChange={handleChange}
        />
        <Input
          label="email"
          type="email"
          name="email"
          data={data}
          error={errors.email}
          onChange={handleChange}
        />
     
      </Form>
    </Container>
  );
}