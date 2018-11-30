const Query = {
  users(parent, args, { db, prisma }, info) {
    return prisma.query.users(null, info);

    // if (!args.query) {
    //   return db.users;
    // }

    // return db.users.filter(user => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase());
    // });
  },
  post() {
    return {
      id: "123",
      title: "Title",
      body: "lasdasd"
    };
  },
  posts(parent, args, { db, prisma }, info) {
    return prisma.query.posts(null, info);
    // if (!args.query) {
    //   return db.posts;
    // }

    // return db.posts.filter(post => {
    //   const title = post.title.toLowerCase().includes(args.query.toLowerCase());
    //   const body = post.title.toLowerCase().includes(args.query.toLowerCase());
    //   return title || body;
    // });
  },
  comments(parent, args, { db }, info) {
    return prisma.query.comments(null, info);
  }
};

export { Query as default };
