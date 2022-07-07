import { IPost } from "@/types";
import axios from "axios";
import { ref } from "vue";

const getPosts = () => {
  const posts = ref<IPost[]>([]);
  const error = ref<string | null>(null);
  const load = async () => {
    try {
      await axios
        .get("http://localhost:4000/posts", {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          if (response.status !== 200) {
            throw Error("data is not available");
          }
          posts.value = response.data;
        });
    } catch (err: unknown) {
      error.value = "data is not available";
    }
  };

  return { posts, error, load };
};

export default getPosts;
