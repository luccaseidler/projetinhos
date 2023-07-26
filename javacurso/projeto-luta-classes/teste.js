let log = new Log(document.querySelector('.log'));

let char = new Assassin('lucca');
let buff = new Red();

const stage = new Stage(
    char,
    buff,
    document.querySelector('#char'),
    document.querySelector('#buff'),
    log
    
);

stage.start();