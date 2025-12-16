const AccessControl = ({
  // action,
  children,
  optionalChildren = null,
  // additionalPermission = true,
}) => {
  // TODO: remove this once permission is backend controlled
  const permission = true;
  if (permission) {
    return children;
  }

  // TODO: uncomment this once permission is backend controlled
  // const storedPermissions = JSON.parse(localStorage.getItem('permissions'));
  // const permissions = storedPermissions || [];

  // const isPermitted = permissions.includes(action);

  // if ((isPermitted && additionalPermission) || !action) {
  //   return children;
  // }
  return optionalChildren;
};

export default AccessControl;
