import { GET, POST , DELETE} from '@/app/api/topics/route';

describe('Testing for GET', () => {
    test('GET should return expected response', async () => {
        const response = await GET(); 
        const result = await response.json();
        
        //  to be

        expect(result.topics[0].title).toBe("Prueba"); 
    });

    // sentencia it

    it('GET should return expected response', async () => {
        const response = await GET(); 
        const result = await response.json();

        expect(result.topics[1].title).toEqual("Prueba 2");  
    });

    test('GET should return expected response', async () => {
        const response = await GET(); 
        const result = await response.json();

        // sentencia not

        expect(result.topics[2].title).not.toEqual("Prueba");  
    });

    test('GET should return a response', async () => {
        const response = await GET(); 
        const result = await response.json();

        // Thruthiness -> Veracidad

        expect(result.topics[2]).toBeDefined();  
        expect(result.topics[10]).toBeUndefined();
        expect(result.topics[10]).not.toBeDefined(); 
        expect(result.topics[10]).toBeFalsy();  
    });

    test('GET should return a response', async () => {
        const response = await GET(); 
        const result = await response.json();

        // Regex with String

        expect(result.topics[1].description).toMatch(/\S+@\S+\.\S+/); 
        expect(result.topics[1].title).not.toMatch(/\S+@\S+\.\S+/); 
         
    });


});

describe('Testing for POST', () => {
    test('Post should return a confirmation message', async () => {
      const obj = {"title": "Prueba 4", "description": "Nueva Prueba Creada Correctamente" };
  
      // Simulate -> REQUEST
      const request = new Request('http://localhost:3000/api/topics', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const response = await POST(request);
      const result = await response.json();
  
      expect(result.message.mensaje).toEqual('Topic Created');
    });


  });



  describe('Testing for DELETE', () => {
    test('Delete should return a confirmation message', async () => {

        const obj = { "title": "Prueba 5", "description": "Nueva Prueba Para eliminar Correctamente" };
  
      // Simulate -> REQUEST
      const postRequest = new Request('http://localhost:3000/api/topics', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const responsePost = await POST(postRequest);
      const resultPost = await responsePost.json();

        const url = new URL(`http://localhost:3000/api/topics/?id=${resultPost.message.topic._id}`);
        
        const request = {
            nextUrl: url
        };
  
        const response = await DELETE(request);
        const result = await response.json();
  
        expect(result.message.mensaje).toEqual('Topic Deleted');
    });
});


  
