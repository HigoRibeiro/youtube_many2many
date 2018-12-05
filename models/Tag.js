module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING,
  });

  Tag.associate = (models) => {
    Tag.belongsToMany(models.Post, {
      through: 'TagPosts',
      as: 'posts',
      foreignKey: 'TagId',
    });
  };

  return Tag;
};
