const chai = require('chai');
const assert = chai.assert;
const reaction = require('../reaction');
describe('Reaction', () =>{
  it('should answer with **trololololol**', () =>{
    let return_message = reaction.action('/gommemode');
    assert.equal(return_message, '**trololololol**');
});

  it('should answer with **lol**', () =>{
    let return_message = reaction.action('/lol');
    assert.equal(return_message, '**lol**');
  });

  it('should not answer', () =>{
    let return_message = reaction.action('asduoibaüsädouibüioabwdüoubwq');
    assert.equal(return_message, null);
  });

});