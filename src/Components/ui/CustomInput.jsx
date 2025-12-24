import React, { forwardRef } from "react";

const CustomInput = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          name={name}
          type={type}
          className={`border px-3 py-2 rounded-md ${className}`}
          {...props}
        />

        {error && (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

export default CustomInput;
