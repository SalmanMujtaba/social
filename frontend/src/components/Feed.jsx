import React, { useEffect, useState } from "react";
import { feedQuery, searchQuery } from "../utils/data";

import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { client } from "../client";
import { useParams } from "react-router-dom";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null);
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      // Fetch all the pins and posts for a specific category.
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) {
    return <Spinner message='We are adding new ideas to your feed!'></Spinner>;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
