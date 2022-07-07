import axios from "axios";
import { ref } from "vue";
import { IPost } from "../types";

const getPost = (id: string) => {
  const post = ref<IPost | null>(null);
  const error = ref<string | null>(null);
  const load = async () => {
    try {
      await axios
        .get(`http://localhost:4000/posts/${id}`, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          if (response.status !== 200) {
            throw Error("post is not exist");
          }
          post.value = response.data;
        });
    } catch (err: unknown) {
      error.value = "post is not exist";
    }
  };

  return { post, error, load };
};

export default getPost;
