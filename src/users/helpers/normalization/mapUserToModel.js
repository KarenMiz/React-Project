const mapUserToModel = (user) => {
  return {
    first: user.name.first || "",
    middle: user.name.middle || "",
    last: user.name.last || "",
    phone: user.phone || "",
    imageUrl: user.image.url || "",
    imageAlt: user.image.alt || "",
    state: user.address.state || "",
    country: user.address.country || "",
    city: user.address.city || "",
    street: user.address.street || "",
    houseNumber: user.address.houseNumber || "",
    zip: user.address.zip || "",

  };
};

export default mapUserToModel;