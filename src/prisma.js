import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466"
});

const createPostForUser = async (authorId, data) => {
  const userExists = await prisma.exists.User({ id: authorId });

  if (!userExists) throw new Error("User not found");

  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    "{author {id name email posts {id title published}}}"
  );

  return post.author;
};

// createPostForUser("cjouzqk7b001f0905j4qpu4ry", {
//   title: "New post 1234",
//   body: "better way of doing it",
//   published: true
// })
//   .then(user => {
//     console.log(user);
//   })
//   .catch(error => console.log(error));

const updatePostForUser = async (postId, data) => {
  const postExists = await prisma.exists.Post({ id: postId });

  if (!postExists) throw new Error("Post not found");

  const post = await prisma.mutation.updatePost(
    {
      where: {
        id: postId
      },
      data
    },
    "{author {id name email posts { id title published }}}"
  );

  return post.author;
};

updatePostForUser("cjp1nhqng00ue0905bt4e60nv", {
  title: "updated title from nodejs",
  published: false
})
  .then(user => {
    console.log(user);
  })
  .catch(error => console.log(error.message));

// prisma.mutation
//   .updatePost(
//     {
//       where: {
//         id: "cjow4gtqb00090a05xxvdb9fp"
//       },
//       data: {
//         body: "updated post",
//         published: false
//       }
//     },
//     "{id body}"
//   )
//   .then(updatedPost => {
//     return prisma.query.posts(null, "{id title body published}");
//   })
//   .then(posts => {
//     console.log(posts);
//   });
