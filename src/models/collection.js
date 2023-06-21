class Collection {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        const record = await this.model.create(data);
        return record;
      } catch (error) {
        throw error;
      }
    }
  
    async read() {
      try {
        const records = await this.model.findAll();
        return records;
      } catch (error) {
        throw error;
      }
    }
  
    async update(id, data) {
      try {
        const record = await this.model.findByPk(id);
        if (record) {
          await record.update(data);
          return record;
        } else {
          throw new Error('Record not found');
        }
      } catch (error) {
        throw error;
      }
    }
  
    async delete(id) {
      try {
        const record = await this.model.findByPk(id);
        if (record) {
          await record.destroy();
          return record;
        } else {
          throw new Error('Record not found');
        }
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = Collection;
  