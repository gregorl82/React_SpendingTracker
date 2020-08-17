import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import CategoryInput from "../components/categories/CategoryInput";
import CategoryList from "../components/categories/CategoryList";

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/categories");
      const json = await response.json();
      setCategories(json);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <h2 className="m-5">Spending Categories</h2>
      <CategoryInput />
      <CategoryList categories={categories} />
    </Container>
  );
};

export default CategoryContainer;
