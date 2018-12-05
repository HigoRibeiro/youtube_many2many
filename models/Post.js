module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  Post.associate = (models) => {
    Post.belongsToMany(models.Tag, {
      through: 'TagPosts',
      as: 'tags',
      foreignKey: 'PostId',
    });
  };

  return Post;
};
