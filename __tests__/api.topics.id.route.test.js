import { GET, PUT} from '@/app/api/topics/[id]/route';

// jest.mock('@/libs/mongodb');
// jest.mock('@/models/topic');  ->  Mocking: Asegúrate de usar jest.mock() para reemplazar las dependencias de base de datos en las pruebas. Esto te permitirá simular respuestas y comportamientos sin necesidad de una base de datos real.


describe('Testing GET_ID', () => { 
    test('GET should return the correct topic data', async () => {

        const request = new Request('http://localhost:3000/api/topics?id=66c3b65549e9da9841e2f557');
        const params = { id: '66c3b65549e9da9841e2f557' };
        const response = await GET(request, { params });
        const result = await response.json();

        
        expect(result.topic._id).toEqual('66c3b65549e9da9841e2f557');


    });

    test('GET should handle missing topic', async () => {

        const request = new Request('http://localhost:3000/api/topics?id=999');
        const params = { id: '999' };
        const response = await GET(request, { params });
        const result = await response.json();

        expect(result.message).toEqual("id not found");
    });

 });

 describe('PUT method', () => { 

    test('PUT should update the topic and return a success message',async  () => { 
        
        const request = new Request('http://localhost:3000/api/topics?id=66c3b65549e9da9841e2f557', {
            method: 'PUT',
            body: JSON.stringify({ newTitle: 'Prueba', newDescription: 'Descripción Actualizada' }),
            headers: { 'Content-Type': 'application/json' },
        });

        const params = { id: '66c3b65549e9da9841e2f557' };
        const response = await PUT(request, { params });
        const result = await response.json();

        expect(result.message).toBe('Topic updated');
        
     });
  });