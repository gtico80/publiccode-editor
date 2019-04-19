import React, {useEffect} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field } from "redux-form";
import Info from "../../components/Info";

const renderInput = field => {
  const className = classNames([
    "form-group",
    { "has-error": field.meta.touched && field.meta.error }
  ]);

  useEffect(() => {
    if (field.required && field.input.value != true) {
      field.input.onChange("false");
    }
  });
  return (
    <div className={className}>
      <div className="form-check">
        <input
          {...field.input}
          checked={field.input.value == true || field.input.value == "yes"}
          className="form-check-input"
          type="checkbox"
          required={field.required}
          id={"field-" + field.name}
        />
        <label className="form-check-label">
          {field.label} {field.required ? "*" : ""}
        </label>
      </div>
      {field.meta.touched &&
        field.meta.error && (
          <span className="help-block">{field.meta.error}</span>
        )}

      {field.description && (
        <Info
          title={field.label ? field.label : field.name}
          description={field.description}
        />
      )}
    </div>
  );
};

const CheckboxWidget = props => {
  return (
    <Field
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
    />
  );
};

CheckboxWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object
};

export default CheckboxWidget;
