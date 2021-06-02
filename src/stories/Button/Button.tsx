import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
//  */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  primary?: boolean;
  size?: "small" | "medium" | "large";
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ primary }) =>
    primary
      ? css`
          color: white;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
        `}

  ${({ size }) =>
    size === "small"
      ? css`
          font-size: 12px;
          padding: 10px 16px;
        `
      : size === "medium"
      ? css`
          font-size: 14px;
          padding: 11px 20px;
        `
      : size === "large"
      ? css`
          font-size: 16px;
          padding: 12px 24px;
        `
      : css``}
`;
