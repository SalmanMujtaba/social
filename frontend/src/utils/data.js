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

export const categories = [{
    name: 'cars',
    image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
  },
  {
    name: 'fitness',
    image: 'https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg',
  },
  {
    name: 'wallpaper',
    image: 'https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg',
  },
  {
    name: 'websites',
    image: 'https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg',
  },
  {
    name: 'photo',
    image: 'https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg',
  },
  {
    name: 'food',
    image: 'https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg',
  },
  {
    name: 'nature',
    image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
  },
  {
    name: 'art',
    image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
  }, {
    name: 'travel',
    image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
  },
  {
    name: 'quotes',
    image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg',
  }, {
    name: 'cats',
    image: 'https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg',
  }, {
    name: 'dogs',
    image: 'https://i.pinimg.com/236x/1b/c8/30/1bc83077e363db1a394bf6a64b071e9f.jpg',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
  },
];

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};


export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};