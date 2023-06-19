const request = require('supertest');
const app = require('../src/server');

describe('Food Routes', () => {
  let createdFood;

  it('should create a new food item', async () => {
    const response = await request(app)
      .post('/food')
      .send({ name: 'Mansaf', description: 'Delicious Mansaf', price: 9.99 });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Mansaf');
    expect(response.body.description).toBe('Delicious Mansaf');
    expect(response.body.price).toBe(9.99);

    createdFood = response.body;
  });

  it('should get all food items', async () => {
    const response = await request(app).get('/food');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it('should get a specific food item by ID', async () => {
    const response = await request(app).get(`/food/${createdFood.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Mansaf');
    expect(response.body.description).toBe('Delicious Mansaf');
    expect(response.body.price).toBe(9.99);
  });

  it('should update a specific food item', async () => {
    const updatedFood = { name: 'Updated Mansaf', description: 'Even more delicious Mansaf', price: 12.99 };

    const response = await request(app)
      .put(`/food/${createdFood.id}`)
      .send(updatedFood);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated Mansaf');
    expect(response.body.description).toBe('Even more delicious Mansaf');
    expect(response.body.price).toBe(12.99);
  });

  it('should delete a specific food item', async () => {
    const response = await request(app).delete(`/food/${createdFood.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(createdFood);
  });

  it('should return 404 when getting a deleted food item', async () => {
    const response = await request(app).get(`/food/${createdFood.id}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Food not found');
  });
});

describe('Medical Record Routes', () => {
  let createdRecord;

  it('should create a new medical record', async () => {
    const response = await request(app)
      .post('/medicalrecord')
      .send({
        patientName: 'Omar Hamada',
        dateOfBirth: '1996-10-05',
        medicalHistory: 'none',
        allergies: 'none',
        medications: 'none',
      });

    expect(response.status).toBe(201);
    expect(response.body.patientName).toBe('Omar Hamada');
    expect(response.body.dateOfBirth).toBe('1996-10-05');
    expect(response.body.medicalHistory).toBe('none');
    expect(response.body.allergies).toBe('none');
    expect(response.body.medications).toBe('none');

    createdRecord = response.body;
  });

  it('should get all medical records', async () => {
    const response = await request(app).get('/medicalrecord');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it('should get a specific medical record by ID', async () => {
    const response = await request(app).get(`/medicalrecord/${createdRecord.id}`);

    expect(response.status).toBe(200);
    expect(response.body.patientName).toBe('Omar Hamada');
    expect(response.body.dateOfBirth).toBe('1996-10-05');
    expect(response.body.medicalHistory).toBe('none');
    expect(response.body.allergies).toBe('none');
    expect(response.body.medications).toBe('none');
  });

  it('should update a specific medical record', async () => {
    const updatedRecord = {
      patientName: 'Updated Patient',
      dateOfBirth: 'Updated date',
      medicalHistory: 'Updated history',
      allergies: 'Updated allergies',
      medications: 'Updated medications',
    };

    const response = await request(app)
      .put(`/medicalrecord/${createdRecord.id}`)
      .send(updatedRecord);

    expect(response.status).toBe(200);
    expect(response.body.patientName).toBe('Updated Patient');
    expect(response.body.dateOfBirth).toBe('Updated date');
    expect(response.body.medicalHistory).toBe('Updated history');
    expect(response.body.allergies).toBe('Updated allergies');
    expect(response.body.medications).toBe('Updated medications');
  });

  it('should delete a specific medical record', async () => {
    const response = await request(app).delete(`/medicalrecord/${createdRecord.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(createdRecord);
  });

  it('should return 404 when getting a deleted medical record', async () => {
    const response = await request(app).get(`/medicalrecord/${createdRecord.id}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Medical record not found');
  });
});
