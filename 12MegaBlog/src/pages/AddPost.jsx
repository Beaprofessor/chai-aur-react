import React from "react";
import { Container, Post, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm/>
      </Container>
    </div>
  );
}

export default AddPost;
