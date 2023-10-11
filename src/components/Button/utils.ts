const createButtonLabel = (labelProp: any, childrenProp: any) => {
  if (!labelProp && !childrenProp) {
    return "Submit"
  }

  if (labelProp) {
    return labelProp
  }

  if (childrenProp && !labelProp) {
    return childrenProp
  }
}

export { createButtonLabel }
