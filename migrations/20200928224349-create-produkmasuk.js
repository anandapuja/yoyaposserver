'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Produkmasuks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProdukId: {
        type: Sequelize.INTEGER
      },
      ProdukkategoriId: {
        type: Sequelize.INTEGER
      },
      jumlahproduk: {
        type: Sequelize.INTEGER
      },
      bahanterpakai: {
        type: Sequelize.INTEGER
      },
      modalbahan: {
        type: Sequelize.INTEGER
      },
      modalpuring: {
        type: Sequelize.INTEGER
      },
      modaljahit: {
        type: Sequelize.INTEGER
      },
      modalrenda: {
        type: Sequelize.INTEGER
      },
      modallain: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      hargaperpotong: {
        type: Sequelize.INTEGER
      },
      hargagrosir: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Produkmasuks');
  }
};