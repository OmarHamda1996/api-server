class MedicalRecordCollection {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        const record = await this.model.create(data);
        return record;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async read() {
      try {
        const records = await this.model.findAll();
        return records;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async update(id, data) {
      try {
        await this.model.update(data, {
          where: {
            id,
          },
        });
        const updatedRecord = await this.model.findByPk(id);
        return updatedRecord;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async delete(id) {
      try {
        const record = await this.model.findByPk(id);
        await this.model.destroy({
          where: {
            id,
          },
        });
        return record;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  
  module.exports = MedicalRecordCollection;
  