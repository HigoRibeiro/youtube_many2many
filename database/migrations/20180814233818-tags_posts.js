module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('TagPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      PostId: {
        type: DataTypes.INTEGER,
        references: { model: 'Posts', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      TagId: {
        type: DataTypes.INTEGER,
        references: { model: 'Tags', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('TagPosts');
  },
};
