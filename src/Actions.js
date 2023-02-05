export const TEST_ACTION = "TEST_ACTION";

export function testAction() {
  alert('test action')
  
  return {
    type: TEST_ACTION,
    payload: 'something'
  };
};