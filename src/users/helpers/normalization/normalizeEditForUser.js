const normalizEditForUser = (user) => {
    return {
        name: {
            first: user.first,
            middle: user.middle,
            last: user.last,
        },
        phone: user.phone,
        image: {
            url: user.imageUrl,
            alt: user.imageAlt,
        },
        address: {
            state: user.state,
            country: user.country,
            city: user.city,
            street: user.street,
            houseNumber: user.houseNumber,
            zip: user.zip,
        },

    }
};

export default normalizEditForUser;

