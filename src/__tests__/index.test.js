describe('Jest Init', () => {
  it('should work', () => {
    expect(true).toEqual(true)
  });

  it('should support spies', () => {
    const spy = jest.fn();
    spy();
    expect(spy).toHaveBeenCalled();
  })
 
})
