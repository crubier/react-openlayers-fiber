// Not used as of today, feel free to implement something cool instead of this
export const getChildHostContext = (
  parentHostContext,
  type,
  rootContainerInstance
) => {
  return typeof parentHostContext === "string"
    ? parentHostContext + "." + type
    : type;
};
