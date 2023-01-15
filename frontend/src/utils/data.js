export const userQuery = (userId) => {
    return `*[_type== "user" && _id== '${userId}']`;
  }
  // In the pin document match the title, category and the about with the user entered search string.
  // This means that pin has title, category and about as the attributes of the pin.
  // Below we have specified we only need the image in the response with the url inside it.
  // -> means that asset will be picked up from the asset document which is being referenced in the pin document by using some reference field
  // therefore pin -----> asset on some reference field and finally
  //  we only need the url from the asset.
  // Apart from this we also need the id which is the sanity generated field
  // destination from the same pin document
  // postedBy data which is which is referenced in the pin, and get only the id, username and image from the posted by document of that pin.
  // pin ----> postedBy pin----> save
  // Get all the people who saved that pin along with who posted them.
  // save ----> postedBy
  // postedby is nothing but a reference to the user document.
export const searchQuery = (searchTerm) => {
  return `*[_type== "pin" && titles match == '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
      image {
        asset -> {
          url
        }
      },
      _id,
      destination,
      postedBy -> {
        _id,
        userName,
        image
      },
      save[] {
        _key,
        postedBy -> {
          _id,
          userName,
          image
        },
      },
    }`;
}

// Get all the feed for all the categories.
export const feedQuery = `*[_type== "pin"] | order(_createAt desc) {
  image {
    asset -> {
      url
    }
  },
  _id,
  destination,
  postedBy -> {
    _id,
    userName,
    image
  },
  save[] {
    _key,
    postedBy -> {
      _id,
      userName,
      image
    },
  },
}`;