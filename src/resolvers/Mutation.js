import uuidv4 from "uuid/v4";

const Mutation = {
  async createUser(parent, { data }, { prisma }, info) {
    return prisma.mutation.createUser({ data }, info);
  },
  async deleteUser(parent, { id }, { prisma }, info) {
    return prisma.mutation.deleteUser({ where: { id } }, info);
  },
  async updateUser(parent, { id, data }, { prisma }, info) {
    return prisma.mutation.updateUser(
      {
        where: { id },
        data
      },
      info
    );
  },
  createPost(parent, { data }, { prisma }, info) {
    return prisma.mutation.createPost(
      {
        data: {
          title: data.title,
          body: data.body,
          published: data.published,
          author: {
            connect: {
              id: data.author
            }
          }
        }
      },
      info
    );
  },
  deletePost(parent, { id }, { prisma }, info) {
    return prisma.mutation.deletePost({ where: { id } }, info);
  },
  updatePost(parent, { data, id }, { prisma }, info) {
    return prisma.mutation.updatePost(
      {
        where: {
          id
        },
        data
      },
      info
    );

    // const post = db.posts.find(post => post.id === id);
    // const originalPost = { ...post };

    // if (!post) throw new Error("Post not found");

    // if (typeof data.title === "string") {
    //   post.title = data.title;
    // }
    // if (typeof data.body === "string") {
    //   post.body = data.body;
    // }
    // if (typeof data.published === "boolean") {
    //   post.published = data.published;

    //   if (originalPost.published && !post.published) {
    //     // deleted
    //     pubSub.publish("post", {
    //       post: {
    //         mutation: "DELETED",
    //         data: originalPost
    //       }
    //     });
    //   } else if (!originalPost.published && post.published) {
    //     // created
    //     pubSub.publish("post", {
    //       post: {
    //         mutation: "CREATED",
    //         data: post
    //       }
    //     });
    //   }
    // } else if (post.published) {
    //   // updated
    //   pubSub.publish("post", {
    //     post: {
    //       mutation: "UPDATED",
    //       data: post
    //     }
    //   });
    // }

    // return post;
  },
  createComment(parent, { data }, { prisma }, info) {
    return prisma.mutation.createComment(
      {
        data: {
          text: data.text,
          author: {
            connect: {
              id: data.author
            }
          },
          post: {
            connect: {
              id: data.post
            }
          }
        }
      },
      info
    );
  },
  deleteComment(parent, { id }, { prisma }, info) {
    return prisma.mutation.deleteComment(
      {
        where: {
          id
        }
      },
      info
    );
  },
  updateComment(parent, { id, data }, { prisma }, info) {
    return prisma.mutation.updateComment(
      {
        where: {
          id
        },
        data
      },
      info
    );
  }
};

export { Mutation as default };
