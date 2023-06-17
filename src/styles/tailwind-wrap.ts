import { ComponentType, createElement } from "react";

export function styled<T extends ComponentType<any>>(
  component: T,
  className: string
): T {
  const StyledComponent = (props: React.ComponentProps<T>) => {
    const { className: existingClassName, ...restProps } = props;
    const combinedClassName = `${className} ${existingClassName || ''}`.trim();
    return createElement(component, {
      className: combinedClassName,
      ...restProps,
    });
  };
  return StyledComponent as T;
}
