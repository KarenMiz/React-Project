import React from "react";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
const UserEditForm = ({
    title,
    onSubmit,
    onReset,
    validateForm,
    errors,
    data,
    onInputChange,
}) => {
    return (
        <Form
            title={title}
            onSubmit={onSubmit}
            onReset={onReset}
            errors={errors}
            validateForm={validateForm}
            styles={{ maxWidth: "800px" }}
            to={ROUTES.ROOT}
        >
            <Input
                name="first"
                label="first name"
                error={errors.first}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="middle"
                label="middle name"
                error={errors.middle}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="last"
                label="last name"
                error={errors.last}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="phone"
                label="phone"
                type="phone"
                error={errors.phone}
                onChange={onInputChange}
                data={data}
                sm={6}
            />

            <Input
                name="imageUrl"
                label="image url"
                error={errors.url}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="imageAlt"
                label="image alt"
                error={errors.alt}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="state"
                label="state"
                error={errors.state}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                label="country"
                name="country"
                error={errors.country}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="city"
                label="city"
                error={errors.city}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="street"
                label="street"
                error={errors.street}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="houseNumber"
                label="house Number"
                type="number"
                error={errors.houseNumber}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="zip"
                label="zip"
                error={errors.zip}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />


        </Form>
    );
}
export default React.memo(UserEditForm);

